'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D Coffee Cup Model Procedural Component
function CoffeeCupModel() {
  const groupRef = useRef<THREE.Group>(null);
  const steamRef = useRef<THREE.Group>(null);

  // Animate steam particles & gentle float rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
    if (steamRef.current) {
      steamRef.current.children.forEach((child, i) => {
        child.position.y += delta * 0.4;
        child.scale.x = 1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.2;
        child.scale.z = child.scale.x;
        if (child.position.y > 2.2) {
          child.position.y = 0.9;
        }
      });
    }
  });

  // Coffee Bean Mesh geometry & material helper
  const beanPositions = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 3.2,
        (Math.random() - 0.5) * 2.5,
        (Math.random() - 0.5) * 3.2
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ] as [number, number, number],
      scale: 0.12 + Math.random() * 0.08
    }));
  }, []);

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* Outer Ceramic Cup Wall */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.95, 0.65, 1.5, 32]} />
        <meshStandardMaterial
          color="#1C130E"
          roughness={0.2}
          metalness={0.8}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Inner Ceramic Cup Lining */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.88, 0.6, 1.42, 32]} />
        <meshStandardMaterial color="#FAF5EE" roughness={0.3} />
      </mesh>

      {/* Coffee Liquid Surface */}
      <mesh position={[0, 0.62, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0, 0.86, 32]} />
        <meshStandardMaterial
          color="#2A170C"
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>

      {/* Golden Crema Center Ring */}
      <mesh position={[0, 0.625, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.15, 0.65, 32]} />
        <meshBasicMaterial color="#C89D66" transparent opacity={0.65} />
      </mesh>

      {/* Cup Handle */}
      <mesh position={[1.05, 0, 0]} rotation={[0, 0, Math.PI / 8]}>
        <torusGeometry args={[0.42, 0.1, 16, 32, Math.PI * 1.2]} />
        <meshStandardMaterial color="#1C130E" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Saucer Base */}
      <mesh position={[0, -0.82, 0]}>
        <cylinderGeometry args={[1.5, 0.9, 0.12, 32]} />
        <meshStandardMaterial color="#160E0A" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Rising Steam Particle Meshes */}
      <group ref={steamRef} position={[0, 0.7, 0]}>
        {[0.1, 0.35, 0.6, 0.85, 1.1].map((offset, i) => (
          <mesh key={i} position={[(i % 2 === 0 ? 0.15 : -0.15), offset, (i % 3 === 0 ? 0.1 : -0.1)]}>
            <sphereGeometry args={[0.12 + i * 0.02, 16, 16]} />
            <MeshWobbleMaterial
              color="#F5EAE0"
              transparent
              opacity={0.25 - i * 0.04}
              factor={0.4}
              speed={2}
            />
          </mesh>
        ))}
      </group>

      {/* Floating 3D Roasted Coffee Beans orbiting */}
      {beanPositions.map((bean, idx) => (
        <Float key={idx} speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
          <mesh position={bean.position} rotation={bean.rotation} scale={bean.scale}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#3D2314" roughness={0.4} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function CoffeeCupCanvas() {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 1.8, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={1.8} color="#FFE6CA" castShadow />
        <pointLight position={[-4, 2, -2]} intensity={1.2} color="#C89D66" />
        <spotLight position={[0, 6, 2]} angle={0.6} penumbra={0.8} intensity={2} color="#FDE68A" />

        <CoffeeCupModel />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 4}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* Floating Instruction Hint */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#C89D66]/30 text-xs text-[#E6C594] pointer-events-none flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#C89D66] animate-ping" />
        Interactive 3D Model — Drag to Rotate
      </div>
    </div>
  );
}
