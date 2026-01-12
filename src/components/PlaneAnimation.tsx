import { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface PlaneModelProps {
  onAnimationComplete: () => void;
}

const PlaneModel = ({ onAnimationComplete }: PlaneModelProps) => {
  const { scene } = useGLTF('/models/su-57.glb');
  const groupRef = useRef<THREE.Group>(null);
  const progressRef = useRef(0);
  const hasCompleted = useRef(false);

  useFrame((_, delta) => {
    if (!groupRef.current || hasCompleted.current) return;

    // Smooth progress increment
    progressRef.current += delta * 0.35;
    const t = progressRef.current;

    if (t < 1.2) {
      // Phase 1: Approach - fly toward camera (0 to 1.2)
      const approachT = Math.min(t / 1.2, 1);
      const eased = 1 - Math.pow(1 - approachT, 3);
      
      groupRef.current.position.z = THREE.MathUtils.lerp(-80, 0, eased);
      groupRef.current.position.y = THREE.MathUtils.lerp(-2, 0, eased);
      groupRef.current.rotation.x = 0;
      groupRef.current.rotation.y = Math.PI; // Face camera
      groupRef.current.rotation.z = Math.sin(t * 6) * 0.02; // Subtle wobble
      
      const scale = THREE.MathUtils.lerp(0.8, 6, eased);
      groupRef.current.scale.setScalar(scale);
      
    } else if (t < 1.6) {
      // Phase 2: Brief pause at center - hold steady
      groupRef.current.position.z = 0;
      groupRef.current.position.y = 0;
      groupRef.current.rotation.z = 0;
      groupRef.current.scale.setScalar(6);
      
    } else if (t < 2.4) {
      // Phase 3: Pitch up
      const pitchT = (t - 1.6) / 0.8;
      const easedPitch = 1 - Math.pow(1 - pitchT, 2);
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(0, -Math.PI / 2, easedPitch);
      groupRef.current.position.y = THREE.MathUtils.lerp(0, 3, easedPitch);
      groupRef.current.position.z = THREE.MathUtils.lerp(0, 5, easedPitch);
      groupRef.current.scale.setScalar(6);
      
    } else if (t < 3.5) {
      // Phase 4: Vertical takeoff
      const takeoffT = (t - 2.4) / 1.1;
      const accelerated = Math.pow(takeoffT, 2.5);
      
      groupRef.current.rotation.x = -Math.PI / 2;
      groupRef.current.position.y = 3 + accelerated * 100;
      groupRef.current.position.z = 5;
      
      // Scale down as it goes up
      const scale = THREE.MathUtils.lerp(6, 2, takeoffT);
      groupRef.current.scale.setScalar(scale);
      
    } else {
      // Complete
      if (!hasCompleted.current) {
        hasCompleted.current = true;
        onAnimationComplete();
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, -2, -80]} scale={0.8}>
      <primitive object={scene} />
    </group>
  );
};

// Simple loading fallback
const LoadingFallback = () => (
  <mesh>
    <boxGeometry args={[2, 0.5, 4]} />
    <meshStandardMaterial color="#00ff00" wireframe />
  </mesh>
);

// Grid floor for depth perception
const GridFloor = () => (
  <gridHelper
    args={[300, 60, '#004400', '#002200']}
    position={[0, -15, 0]}
  />
);

// Starfield background
const Starfield = () => {
  const starsRef = useRef<THREE.Points>(null);
  const count = 500;
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 200;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100 + 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 200 - 50;
  }

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.5} color="#88ff88" transparent opacity={0.6} />
    </points>
  );
};

interface PlaneAnimationProps {
  onComplete: () => void;
}

export const PlaneAnimation = ({ onComplete }: PlaneAnimationProps) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleAnimationComplete = () => {
    setIsExiting(true);
    setTimeout(onComplete, 600);
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-[#050510] z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* CRT scanlines */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-20">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.05)_2px,rgba(0,255,0,0.05)_4px)]" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)]" />

      {/* 3D Scene */}
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 18]} fov={60} />
        <color attach="background" args={['#050510']} />
        <fog attach="fog" args={['#050510', 40, 150]} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 15]} intensity={2} color="#ffffff" />
        <directionalLight position={[-5, 10, -10]} intensity={0.8} color="#00ff88" />
        <pointLight position={[0, 5, 15]} intensity={1.5} color="#00ff00" distance={40} />
        
        <Suspense fallback={<LoadingFallback />}>
          <PlaneModel onAnimationComplete={handleAnimationComplete} />
        </Suspense>
        
        <GridFloor />
        <Starfield />
      </Canvas>

      {/* Status text */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-terminal-green text-sm z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="animate-pulse">▶</span> INITIALIZING INTERFACE...
      </motion.div>
    </motion.div>
  );
};

// Preload model
useGLTF.preload('/models/su-57.glb');
