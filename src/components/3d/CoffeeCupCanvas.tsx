'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function RealisticCoffeeCup() {
  const groupRef = useRef<THREE.Group>(null);
  const steamRef = useRef<THREE.Group>(null);

  // Smooth rotation & steam particle movement
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.04;
    }
    if (steamRef.current) {
      steamRef.current.children.forEach((child, i) => {
        child.position.y += delta * 0.4;
        child.scale.x = 1 + Math.sin(state.clock.elapsedTime * 1.8 + i) * 0.2;
        child.scale.z = child.scale.x;
        if (child.position.y > 2.2) {
          child.position.y = 0.85;
        }
      });
    }
  });

  // Coffee Beans placed cleanly on saucer plate and orbiting outside cup boundaries
  const beansOnPlate = useMemo(() => [
    { pos: [0.95, -0.72, 0.4] as [number, number, number], rot: [0.4, 0.8, 0.2] as [number, number, number] },
    { pos: [-0.9, -0.72, -0.5] as [number, number, number], rot: [0.2, 1.2, 0.5] as [number, number, number] },
    { pos: [0.4, -0.72, -1.0] as [number, number, number], rot: [0.6, 0.1, 0.8] as [number, number, number] },
    { pos: [-0.7, -0.72, 0.8] as [number, number, number], rot: [0.1, 0.5, 0.3] as [number, number, number] },
  ], []);

  const floatingBeans = useMemo(() => [
    { pos: [-1.6, 0.6, 0.8] as [number, number, number], rot: [0.5, 0.5, 0.5] as [number, number, number] },
    { pos: [1.7, 0.9, -0.6] as [number, number, number], rot: [0.2, 0.9, 0.1] as [number, number, number] },
    { pos: [-1.4, -0.2, -1.2] as [number, number, number], rot: [0.8, 0.3, 0.6] as [number, number, number] },
    { pos: [1.5, -0.3, 1.1] as [number, number, number], rot: [0.1, 0.7, 0.4] as [number, number, number] },
  ], []);

  return (
    <group ref={groupRef} position={[0, -0.3, 0]}>
      {/* 1. Saucer Base Plate */}
      <mesh position={[0, -0.78, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[1.5, 0.9, 0.12, 64]} />
        <meshStandardMaterial color="#FAF6F0" roughness={0.2} metalness={0.1} />
      </mesh>
      {/* Saucer Inner Ring */}
      <mesh position={[0, -0.71, 0]}>
        <cylinderGeometry args={[0.95, 0.92, 0.02, 64]} />
        <meshStandardMaterial color="#EAE2D8" roughness={0.3} />
      </mesh>

      {/* 2. Outer Ceramic Espresso Cup Body */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.0, 0.65, 1.4, 64]} />
        <meshStandardMaterial
          color="#FAF6F0"
          roughness={0.15}
          metalness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Smooth Curved Cup Rim Edge */}
      <mesh position={[0, 0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.0, 0.04, 16, 64]} />
        <meshStandardMaterial color="#FAF6F0" roughness={0.15} />
      </mesh>

      {/* Cup Gold Accent Band near rim */}
      <mesh position={[0, 0.62, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.99, 0.015, 16, 64]} />
        <meshStandardMaterial color="#C89D66" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* 3. Inner Cup Wall Ceramic Lining */}
      <mesh position={[0, 0.04, 0]}>
        <cylinderGeometry args={[0.94, 0.6, 1.34, 64]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.1} />
      </mesh>

      {/* 4. Coffee Liquid & Crema Surface (Planted neatly INSIDE the cup at y=0.55) */}
      <group position={[0, 0.55, 0]}>
        {/* Dark Rich Coffee Base */}
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.93, 64]} />
          <meshStandardMaterial color="#241209" roughness={0.08} metalness={0.2} />
        </mesh>

        {/* Golden Crema Layer */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.002, 0]}>
          <circleGeometry args={[0.88, 64]} />
          <meshBasicMaterial color="#C89D66" transparent opacity={0.85} />
        </mesh>

        {/* Silky Milk Foam Rosetta Heart Pattern Center */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.004, 0]}>
          <circleGeometry args={[0.45, 64]} />
          <meshBasicMaterial color="#FAF5EE" transparent opacity={0.92} />
        </mesh>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.006, 0]}>
          <ringGeometry args={[0.5, 0.68, 64]} />
          <meshBasicMaterial color="#FAF5EE" transparent opacity={0.65} />
        </mesh>
      </group>

      {/* 5. Ergonomic Cup Handle (Attached neatly to outer right wall) */}
      <mesh position={[1.08, -0.05, 0]} rotation={[0, 0, -Math.PI / 10]}>
        <torusGeometry args={[0.38, 0.09, 16, 32, Math.PI * 1.1]} />
        <meshStandardMaterial color="#FAF6F0" roughness={0.15} metalness={0.1} />
      </mesh>

      {/* 6. Coffee Beans Rested On Saucer Plate */}
      {beansOnPlate.map((bean, idx) => (
        <mesh key={`plate-${idx}`} position={bean.pos} rotation={bean.rot} scale={[0.12, 0.18, 0.12]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#361B0E" roughness={0.4} />
        </mesh>
      ))}

      {/* 7. Controlled Floating Coffee Beans (Orbiting cleanly outside cup boundaries) */}
      {floatingBeans.map((bean, idx) => (
        <Float key={`float-${idx}`} speed={1.5} rotationIntensity={1.8} floatIntensity={1.2}>
          <mesh position={bean.pos} rotation={bean.rot} scale={[0.13, 0.19, 0.13]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#361B0E" roughness={0.35} />
          </mesh>
        </Float>
      ))}

      {/* 8. Rising Particles of Soft Coffee Steam */}
      <group ref={steamRef} position={[0, 0.65, 0]}>
        {[0.15, 0.45, 0.75, 1.05].map((offset, i) => (
          <mesh key={`steam-${i}`} position={[(i % 2 === 0 ? 0.12 : -0.12), offset, (i % 3 === 0 ? 0.08 : -0.08)]}>
            <sphereGeometry args={[0.12 + i * 0.02, 16, 16]} />
            <MeshWobbleMaterial
              color="#FFFDF9"
              transparent
              opacity={0.35 - i * 0.07}
              factor={0.4}
              speed={1.8}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export default function CoffeeCupCanvas() {
  return (
    <div className="w-full h-[400px] md:h-[480px] relative flex items-center justify-center">
      {/* Background Soft Glow Aura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#C89D66]/30 via-[#E6C594]/20 to-transparent blur-3xl" />
      </div>

      <Canvas
        camera={{ position: [0, 1.7, 4.0], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="cursor-grab active:cursor-grabbing relative z-10"
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 8, 5]} intensity={2.2} color="#FFF7EE" castShadow />
        <pointLight position={[-4, 3, -3]} intensity={1.8} color="#E6C594" />
        <spotLight position={[0, 6, 2]} angle={0.6} penumbra={0.8} intensity={2.5} color="#FFFFFF" />

        <RealisticCoffeeCup />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 4}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* Floating Badge */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#C89D66]/40 text-xs font-semibold text-[#E6C594] pointer-events-none flex items-center gap-2 z-20 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[#E6C594] animate-ping" />
        3D Coffee Cup — Drag to Rotate
      </div>
    </div>
  );
}
