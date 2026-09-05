'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CoffeeBackground3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Lighting (Warm Coffee Atmosphere)
    const ambientLight = new THREE.AmbientLight(0x2d1b10, 2.5);
    scene.add(ambientLight);

    const warmPointLight = new THREE.PointLight(0xe6c594, 3.5, 40);
    warmPointLight.position.set(5, 5, 10);
    scene.add(warmPointLight);

    const goldPointLight = new THREE.PointLight(0xc89d66, 2.5, 30);
    goldPointLight.position.set(-8, -5, 5);
    scene.add(goldPointLight);

    // 3. Create 3D Coffee Bean Geometry
    const createBeanGeometry = () => {
      const beanGroup = new THREE.Group();

      // Main Bean Body (Flattened Oval)
      const bodyGeo = new THREE.SphereGeometry(0.35, 16, 16);
      bodyGeo.scale(1.1, 1.4, 0.65);

      const beanMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x28170d),
        roughness: 0.35,
        metalness: 0.1,
      });

      const bodyMesh = new THREE.Mesh(bodyGeo, beanMat);
      beanGroup.add(bodyMesh);

      // Center Crease Line
      const creaseGeo = new THREE.BoxGeometry(0.04, 1.1, 0.15);
      const creaseMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x100804),
        roughness: 0.9,
      });
      const creaseMesh = new THREE.Mesh(creaseGeo, creaseMat);
      creaseMesh.position.z = 0.22;
      beanGroup.add(creaseMesh);

      return beanGroup;
    };

    // Instantiate 35 Floating 3D Coffee Beans
    const beansCount = 35;
    const beans: {
      group: THREE.Group;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      floatSpeed: number;
      floatOffset: number;
      baseY: number;
    }[] = [];

    for (let i = 0; i < beansCount; i++) {
      const beanGroup = createBeanGeometry();

      // Random scale between 0.6 and 1.4
      const scale = 0.6 + Math.random() * 0.8;
      beanGroup.scale.set(scale, scale, scale);

      // Random position spread
      const posX = (Math.random() - 0.5) * 35;
      const posY = (Math.random() - 0.5) * 30;
      const posZ = (Math.random() - 0.5) * 20 - 2;

      beanGroup.position.set(posX, posY, posZ);

      // Random initial rotations
      beanGroup.rotation.x = Math.random() * Math.PI * 2;
      beanGroup.rotation.y = Math.random() * Math.PI * 2;
      beanGroup.rotation.z = Math.random() * Math.PI * 2;

      scene.add(beanGroup);

      beans.push({
        group: beanGroup,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        rotSpeedZ: (Math.random() - 0.5) * 0.01,
        floatSpeed: 0.5 + Math.random() * 0.8,
        floatOffset: Math.random() * Math.PI * 2,
        baseY: posY,
      });
    }

    // 4. Steam & Golden Aroma Particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      scales[i] = 0.08 + Math.random() * 0.15;
      speeds[i] = 0.01 + Math.random() * 0.02;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Texture Canvas (Soft radial glow)
    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = 64;
    particleCanvas.height = 64;
    const ctx = particleCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(230, 197, 148, 1)');
      grad.addColorStop(0.4, 'rgba(200, 157, 102, 0.6)');
      grad.addColorStop(1, 'rgba(200, 157, 102, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(particleCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.35,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.7,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Mouse Parallax Effect
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.position.x = mouseX * 2;
      camera.position.y = -mouseY * 2;
      camera.lookAt(0, 0, 0);

      // Animate Coffee Beans
      beans.forEach((b) => {
        b.group.rotation.x += b.rotSpeedX;
        b.group.rotation.y += b.rotSpeedY;
        b.group.rotation.z += b.rotSpeedZ;

        // Gentle sinusoidal floating
        b.group.position.y = b.baseY + Math.sin(elapsedTime * b.floatSpeed + b.floatOffset) * 0.6;
      });

      // Animate Steam / Ember Particles rising
      const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
      const array = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        array[i * 3 + 1] += speeds[i]; // move Y up
        array[i * 3] += Math.sin(elapsedTime + i) * 0.005; // sway X

        // Reset if moved above screen
        if (array[i * 3 + 1] > 18) {
          array[i * 3 + 1] = -18;
          array[i * 3] = (Math.random() - 0.5) * 30;
        }
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
