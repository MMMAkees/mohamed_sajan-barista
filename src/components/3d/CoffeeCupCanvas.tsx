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
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.06;
    }
    if (steamRef.current) {
      steamRef.current.children.forEach((child, i) => {
        child.position.y += delta * 0.45;
        child.scale.x = 1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.25;
        child.scale.z = child.scale.x;
        if (child.position.y > 2.3) {
          child.position.y = 0.9;
        }
      });
    }
  });

  // 3D Coffee Beans positioning
  const beanPositions = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 3.4,
        (Math.random() - 0.5) * 2.8,
        (Math.random() - 0.5) * 3.4
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ] as [number, number, number],
      scale: 0.13 + Math.random() * 0.09
    }));
  }, []);

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {/* Outer Luxury Porcelain Ceramic Cup Wall (Bright Ivory for Crisp Contrast) */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.96, 0.66, 1.52, 32]} />
        <meshStandardMaterial
          color="#FAF5EE"
          roughness={0.15}
          metalness={0.3}
          envMapIntensity={2.0}
        />
      </mesh>

      {/* Gold Trim Ring Around Rim */}
      <mesh position={[0, 0.76, 0]}>
        <torusGeometry args={[0.96, 0.03, 16, 32]} />
        <meshStandardMaterial color="#D4A373" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Inner Ceramic Cup Wall */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.89, 0.61, 1.44, 32]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.1} />
      </mesh>

      {/* Coffee Liquid Surface */}
      <mesh position={[0, 0.63, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0, 0.87, 32]} />
        <meshStandardMaterial
          color="#201007"
          roughness={0.08}
          metalness={0.3}
        />
      </mesh>

      {/* Golden Crema Center Art Pattern */}
      <mesh position={[0, 0.635, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.12, 0.7, 32]} />
        <meshBasicMaterial color="#E6B875" transparent opacity={0.75} />
      </mesh>

      {/* Cup Handle (Gold Accent) */}
      <mesh position={[1.06, 0, 0]} rotation={[0, 0, Math.PI / 8]}>
        <torusGeometry args={[0.43, 0.1, 16, 32, Math.PI * 1.2]} />
        <meshStandardMaterial color="#FAF5EE" roughness={0.15} metalness={0.4} />
      </mesh>

      {/* Saucer Base Plate (Ivory & Gold Rim) */}
      <mesh position={[0, -0.82, 0]}>
        <cylinderGeometry args={[1.55, 0.95, 0.14, 32]} />
        <meshStandardMaterial color="#FAF5EE" roughness={0.2} metalness={0.4} />
      </mesh>
      <mesh position={[0, -0.76, 0]}>
        <torusGeometry args={[1.54, 0.02, 16, 32]} />
        <meshStandardMaterial color="#D4A373" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Rising Steam Particle Meshes */}
      <group ref={steamRef} position={[0, 0.7, 0]}>
        {[0.1, 0.35, 0.6, 0.85, 1.1].map((offset, i) => (
          <mesh key={i} position={[(i % 2 === 0 ? 0.15 : -0.15), offset, (i % 3 === 0 ? 0.1 : -0.1)]}>
            <sphereGeometry args={[0.14 + i * 0.02, 16, 16]} />
            <MeshWobbleMaterial
              color="#FFF8F0"
              transparent
              opacity={0.35 - i * 0.05}
              factor={0.5}
              speed={2.2}
            />
          </mesh>
        ))}
      </group>

      {/* Floating 3D Roasted Coffee Beans */}
      {beanPositions.map((bean, idx) => (
        <Float key={idx} speed={1.6} rotationIntensity={2.2} floatIntensity={1.8}>
          <mesh position={bean.position} rotation={bean.rotation} scale={bean.scale}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#4A2A18" roughness={0.3} metalness={0.2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function CoffeeCupCanvas() {
  return (
    <div className="w-full h-[420px] md:h-[520px] relative flex items-center justify-center">
      {/* High Contrast Background Glowing Pedestal */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#C89D66]/40 via-[#F4D09A]/30 to-[#C89D66]/40 blur-3xl animate-pedestal" />
        <div className="absolute bottom-12 w-48 h-12 rounded-full bg-[#C89D66]/50 blur-xl" />
      </div>

      <Canvas
        camera={{ position: [0, 1.8, 4.3], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="cursor-grab active:cursor-grabbing relative z-10"
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[6, 9, 6]} intensity={2.5} color="#FFF5EA" castShadow />
        <pointLight position={[-5, 3, -3]} intensity={2.0} color="#F4D09A" />
        <pointLight position={[5, -2, 4]} intensity={1.5} color="#C89D66" />
        <spotLight position={[0, 7, 3]} angle={0.7} penumbra={0.9} intensity={3.0} color="#FFFFFF" />

        <CoffeeCupModel />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 4}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* Floating Interactive Badge */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#C89D66]/50 text-xs font-semibold text-[#E6C594] pointer-events-none flex items-center gap-2 z-20 shadow-xl">
        <span className="w-2.5 h-2.5 rounded-full bg-[#E6C594] animate-ping" />
        3D Artisanal Model — Drag to Rotate
      </div>
    </div>
  );
}
