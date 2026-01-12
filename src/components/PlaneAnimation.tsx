import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface PlaneModelProps {
  onAnimationComplete: () => void;
}

const PlaneModel = ({ onAnimationComplete }: PlaneModelProps) => {
  const { scene } = useGLTF('/models/su-57.glb');
  const modelRef = useRef<THREE.Group>(null);
  const [animationPhase, setAnimationPhase] = useState<'approach' | 'center' | 'pitchUp' | 'takeoff' | 'done'>('approach');
  const startTime = useRef(Date.now());
  const hasCompleted = useRef(false);

  // Clone the scene to avoid issues
  const clonedScene = scene.clone();

  useFrame(() => {
    if (!modelRef.current || hasCompleted.current) return;

    const elapsed = (Date.now() - startTime.current) / 1000;

    switch (animationPhase) {
      case 'approach':
        // Plane flies toward camera from distance
        modelRef.current.position.z = THREE.MathUtils.lerp(-80, 0, Math.min(elapsed / 1.5, 1));
        modelRef.current.position.y = THREE.MathUtils.lerp(0, 0, elapsed / 1.5);
        modelRef.current.scale.setScalar(THREE.MathUtils.lerp(0.1, 1.5, Math.min(elapsed / 1.5, 1)));
        
        // Subtle wobble during approach
        modelRef.current.rotation.z = Math.sin(elapsed * 3) * 0.05;
        modelRef.current.rotation.x = Math.PI / 2; // Keep plane horizontal
        
        if (elapsed > 1.5) {
          setAnimationPhase('center');
          startTime.current = Date.now();
        }
        break;

      case 'center':
        // Hold at center briefly
        modelRef.current.position.z = 0;
        modelRef.current.rotation.z = 0;
        
        if (elapsed > 0.3) {
          setAnimationPhase('pitchUp');
          startTime.current = Date.now();
        }
        break;

      case 'pitchUp':
        // Pitch up to vertical
        const pitchProgress = Math.min(elapsed / 0.6, 1);
        const eased = 1 - Math.pow(1 - pitchProgress, 3); // Ease out cubic
        modelRef.current.rotation.x = THREE.MathUtils.lerp(Math.PI / 2, 0, eased);
        
        if (elapsed > 0.6) {
          setAnimationPhase('takeoff');
          startTime.current = Date.now();
        }
        break;

      case 'takeoff':
        // Vertical takeoff - accelerate upward
        const takeoffProgress = elapsed / 0.8;
        const acceleration = Math.pow(takeoffProgress, 2); // Accelerating
        modelRef.current.position.y = acceleration * 60;
        modelRef.current.scale.setScalar(1.5 - takeoffProgress * 0.5);
        
        if (elapsed > 0.8) {
          setAnimationPhase('done');
          if (!hasCompleted.current) {
            hasCompleted.current = true;
            setTimeout(onAnimationComplete, 300);
          }
        }
        break;
    }
  });

  return (
    <group ref={modelRef} position={[0, 0, -80]} scale={0.1}>
      <primitive object={clonedScene} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  );
};

// Engine glow particles
const EngineGlow = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 50;
  
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 2;
    positions[i * 3 + 1] = -5 + Math.random() * -10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.3}
        color="#00ff88"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Grid floor for depth
const GridFloor = () => {
  return (
    <gridHelper
      args={[200, 50, '#00ff00', '#003300']}
      position={[0, -20, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

interface PlaneAnimationProps {
  onComplete: () => void;
}

export const PlaneAnimation = ({ onComplete }: PlaneAnimationProps) => {
  const [showCanvas, setShowCanvas] = useState(true);

  const handleAnimationComplete = () => {
    setShowCanvas(false);
    setTimeout(onComplete, 500);
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-[#0a0a12] z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: showCanvas ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* CRT scanlines overlay */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.03)_2px,rgba(0,255,0,0.03)_4px)] opacity-30" />
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)]" />

      {/* 3D Canvas */}
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 5, 20]} fov={60} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 20, 10]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#00ff88" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#00ff00" distance={50} />
        
        <PlaneModel onAnimationComplete={handleAnimationComplete} />
        <GridFloor />
        
        {/* Fog for atmosphere */}
        <fog attach="fog" args={['#0a0a12', 30, 150]} />
      </Canvas>

      {/* Status text */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-terminal-green text-sm z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="animate-pulse">▶</span> LAUNCHING INTERFACE...
      </motion.div>
    </motion.div>
  );
};

// Preload the model
useGLTF.preload('/models/su-57.glb');
