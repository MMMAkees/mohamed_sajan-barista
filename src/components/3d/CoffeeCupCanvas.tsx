'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Realistic Espresso Cup with proper proportions
function EspressoCup() {
  const groupRef = useRef<THREE.Group>(null);
  const steamRef = useRef<THREE.Group>(null);
  const coffeeRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.04;
    }
    if (steamRef.current) {
      steamRef.current.children.forEach((child, i) => {
        child.position.y += delta * 0.3;
        (child as THREE.Mesh).material && ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity && (
          ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.3 - (child.position.y - 0.6) * 0.15)
        );
        child.scale.x = 1 + Math.sin(state.clock.elapsedTime * 1.5 + i * 0.8) * 0.3;
        child.scale.z = child.scale.x;
        if (child.position.y > 2.5) {
          child.position.y = 0.65;
        }
      });
    }
    // Subtle coffee surface shimmer
    if (coffeeRef.current) {
      const mat = coffeeRef.current.material as THREE.MeshStandardMaterial;
      mat.roughness = 0.05 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
    }
  });

  // Create cup profile using LatheGeometry for proper rounded shape
  const cupOuterProfile = useMemo(() => {
    const points: THREE.Vector2[] = [];
    // Bottom flat
    points.push(new THREE.Vector2(0, 0));
    points.push(new THREE.Vector2(0.52, 0));
    // Curved wall rising outward (proper coffee cup curve - wider at top)
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const radius = 0.52 + t * 0.35 + Math.sin(t * Math.PI * 0.5) * 0.08;
      const height = t * 1.25;
      points.push(new THREE.Vector2(radius, height));
    }
    // Lip rim (slight outward flare)
    points.push(new THREE.Vector2(0.92, 1.28));
    points.push(new THREE.Vector2(0.94, 1.3));
    // Inner rim thickness
    points.push(new THREE.Vector2(0.91, 1.3));
    points.push(new THREE.Vector2(0.88, 1.28));
    // Inner wall going down
    for (let i = 20; i >= 0; i--) {
      const t = i / 20;
      const radius = 0.48 + t * 0.33 + Math.sin(t * Math.PI * 0.5) * 0.07;
      const height = t * 1.25;
      points.push(new THREE.Vector2(radius, height));
    }
    // Inner bottom
    points.push(new THREE.Vector2(0.48, 0.06));
    points.push(new THREE.Vector2(0, 0.06));
    return points;
  }, []);

  // Floating coffee beans
  const beanPositions = useMemo(() => {
    return Array.from({ length: 10 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 3.5,
        (Math.random() - 0.5) * 3.0,
        (Math.random() - 0.5) * 3.5
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ] as [number, number, number],
      scale: 0.08 + Math.random() * 0.06,
    }));
  }, []);

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Cup Body - Lathe Geometry for smooth realistic profile */}
      <mesh castShadow receiveShadow>
        <latheGeometry args={[cupOuterProfile, 48]} />
        <meshStandardMaterial
          color="#FEFCF7"
          roughness={0.12}
          metalness={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Coffee liquid inside the cup - visible dark espresso with crema */}
      <mesh ref={coffeeRef} position={[0, 1.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.82, 48]} />
        <meshStandardMaterial
          color="#1A0D06"
          roughness={0.05}
          metalness={0.4}
        />
      </mesh>

      {/* Golden crema ring on coffee surface */}
      <mesh position={[0, 1.105, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.25, 0.72, 48]} />
        <meshStandardMaterial
          color="#C4883A"
          roughness={0.15}
          metalness={0.3}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Crema center dot */}
      <mesh position={[0, 1.108, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.18, 32]} />
        <meshStandardMaterial
          color="#E8B569"
          roughness={0.1}
          metalness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Cup Handle - proper curved D-shape handle */}
      <mesh position={[1.0, 0.6, 0]} rotation={[0, 0, Math.PI / 12]}>
        <torusGeometry args={[0.32, 0.065, 12, 24, Math.PI * 1.15]} />
        <meshStandardMaterial
          color="#FEFCF7"
          roughness={0.12}
          metalness={0.05}
        />
      </mesh>

      {/* Saucer plate */}
      <mesh position={[0, -0.08, 0]}>
        <cylinderGeometry args={[1.35, 1.2, 0.08, 48]} />
        <meshStandardMaterial
          color="#FEFCF7"
          roughness={0.15}
          metalness={0.05}
        />
      </mesh>

      {/* Saucer center indent */}
      <mesh position={[0, -0.03, 0]}>
        <cylinderGeometry args={[0.58, 0.55, 0.04, 48]} />
        <meshStandardMaterial
          color="#F5F0E8"
          roughness={0.2}
          metalness={0.02}
        />
      </mesh>

      {/* Gold rim on saucer edge */}
      <mesh position={[0, -0.04, 0]}>
        <torusGeometry args={[1.34, 0.015, 8, 48]} />
        <meshStandardMaterial color="#D4A84B" roughness={0.08} metalness={0.85} />
      </mesh>

      {/* Gold rim on cup lip */}
      <mesh position={[0, 1.3, 0]}>
        <torusGeometry args={[0.92, 0.018, 8, 48]} />
        <meshStandardMaterial color="#D4A84B" roughness={0.08} metalness={0.85} />
      </mesh>

      {/* Rising Steam wisps */}
      <group ref={steamRef} position={[0, 0.6, 0]}>
        {[0.05, 0.25, 0.5, 0.75, 1.0, 1.3, 1.6].map((offset, i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i * 1.2) * 0.15,
              offset,
              Math.cos(i * 1.2) * 0.1,
            ]}
          >
            <sphereGeometry args={[0.06 + i * 0.015, 12, 12]} />
            <meshBasicMaterial
              color="#FFFFFF"
              transparent
              opacity={0.3 - i * 0.03}
            />
          </mesh>
        ))}
      </group>

      {/* Floating coffee beans around the cup */}
      {beanPositions.map((bean, idx) => (
        <Float key={idx} speed={1.2} rotationIntensity={1.5} floatIntensity={1.2}>
          <CoffeeBean
            position={bean.position}
            rotation={bean.rotation}
            scale={bean.scale}
          />
        </Float>
      ))}
    </group>
  );
}

// Proper coffee bean shape using merged spheres
function CoffeeBean({
  position,
  rotation,
  scale,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Main bean body - elongated ellipsoid */}
      <mesh>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#3C1E0A" roughness={0.35} metalness={0.1} />
      </mesh>
      {/* Bean crease line */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.85, 0.05, 6, 16, Math.PI]} />
        <meshStandardMaterial color="#2A1205" roughness={0.5} />
      </mesh>
    </group>
  );
}

export default function CoffeeCupCanvas() {
  return (
    <div className="w-full h-[420px] md:h-[520px] relative flex items-center justify-center">
      {/* Background Ambient Pedestal Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-[#C89D66]/30 via-[#F4D09A]/20 to-[#C89D66]/30 blur-3xl animate-pedestal" />
        <div className="absolute bottom-16 w-44 h-8 rounded-full bg-[#C89D66]/25 blur-xl" />
      </div>

      <Canvas
        camera={{ position: [0, 2.2, 4.5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        className="cursor-grab active:cursor-grabbing relative z-10"
      >
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 8, 5]} intensity={2.0} color="#FFF8F0" castShadow />
        <pointLight position={[-4, 3, -3]} intensity={1.5} color="#F4D09A" />
        <pointLight position={[4, -1, 3]} intensity={1.0} color="#C89D66" />
        <spotLight position={[0, 8, 2]} angle={0.5} penumbra={0.8} intensity={2.5} color="#FFFFFF" castShadow />

        <EspressoCup />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 5}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* Floating Badge */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 dark:bg-black/60 backdrop-blur-md border border-[#C89D66]/40 text-xs font-semibold text-[#E6C594] pointer-events-none flex items-center gap-2 z-20 shadow-xl">
        Interactive 3D Model — Drag to Rotate
      </div>
    </div>
  );
}
