"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

const AndroidRobot = () => {
  const groupRef = useRef<THREE.Group>(null);
  const color = "#00DE8A"; // Original Android Green

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.1}>
      {/* Head (half sphere) */}
      <mesh position={[0, 0.9, 0]}>
        <sphereGeometry args={[0.8, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.15}
          metalness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.05}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.3, 1.2, 0.72]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.3, 1.2, 0.72]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      {/* Antennas */}
      <mesh position={[-0.4, 1.55, 0]} rotation={[0, 0, 0.4]}>
        <capsuleGeometry args={[0.045, 0.4, 4, 8]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.1}
          metalness={0.3}
          clearcoat={1}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
      <mesh position={[0.4, 1.55, 0]} rotation={[0, 0, -0.4]}>
        <capsuleGeometry args={[0.045, 0.4, 4, 8]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.1}
          metalness={0.3}
          clearcoat={1}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Body */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 1.5, 32]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.15}
          metalness={0.3}
          clearcoat={1}
          emissive={color}
          emissiveIntensity={0.25}
        />
      </mesh>
      {/* Body Bottom */}
      <mesh position={[0, -0.85, 0]}>
        <sphereGeometry args={[0.8, 32, 32, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.15}
          metalness={0.3}
          clearcoat={1}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Arms */}
      <mesh position={[-1.15, -0.1, 0]}>
        <capsuleGeometry args={[0.21, 1.1, 16, 16]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.15}
          metalness={0.3}
          clearcoat={1}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
      <mesh position={[1.15, -0.1, 0]}>
        <capsuleGeometry args={[0.21, 1.1, 16, 16]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.15}
          metalness={0.3}
          clearcoat={1}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.35, -1.25, 0]}>
        <capsuleGeometry args={[0.21, 0.65, 16, 16]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.15}
          metalness={0.3}
          clearcoat={1}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
      <mesh position={[0.35, -1.25, 0]}>
        <capsuleGeometry args={[0.21, 0.65, 16, 16]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.15}
          metalness={0.3}
          clearcoat={1}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </group>
  );
};

export const Android3DBackground = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 top-[20%] lg:top-0 lg:inset-0 z-[2] pointer-events-none opacity-25 lg:opacity-65 scale-105 lg:scale-100 transition-all duration-1000 will-change-transform">
      <Canvas 
        dpr={[1, 1.5]} 
        gl={{ antialias: false, powerPreference: "high-performance", alpha: true }} 
        camera={{ position: [3, 1, 8], fov: 40 }}
      >
        {/* Pure neutral/warm white lighting — no violet tinting */}
        <ambientLight intensity={0.4} color="#e8f5ff" />
        <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" />
        {/* Green key light — matches the robot color */}
        <pointLight position={[-6, 4, 6]} intensity={3} color="#00DE8A" />
        {/* Soft teal fill light */}
        <pointLight position={[8, -3, 4]} intensity={2} color="#00BCD4" />
        {/* Neutral top light for shape definition */}
        <spotLight position={[0, 12, 3]} intensity={1.5} color="#d0eeff" angle={0.5} penumbra={0.6} />

        <Float
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={1.2}
          floatingRange={[-0.4, 0.4]}
        >
          <AndroidRobot />
        </Float>

        <Environment preset="night" />
      </Canvas>
    </div>
  );
};
