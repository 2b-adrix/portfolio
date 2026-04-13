"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const AndroidRobot = () => {
  const groupRef = useRef<THREE.Group>(null);
  const color = "#00DE8A";

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.5}>
      {/* Head */}
      <mesh position={[0, 0.9, 0]}>
        <sphereGeometry args={[0.8, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshPhysicalMaterial 
            color={color} 
            roughness={0.2} 
            metalness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            emissive={color}
            emissiveIntensity={0.2}
        />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.3, 1.2, 0.7]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.3, 1.2, 0.7]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      {/* Antennas */}
      <mesh position={[-0.4, 1.5, 0]} rotation={[0, 0, 0.4]}>
        <capsuleGeometry args={[0.04, 0.4, 4, 8]} />
        <meshPhysicalMaterial color={color} roughness={0.2} metalness={0.1} clearcoat={1} />
      </mesh>
      <mesh position={[0.4, 1.5, 0]} rotation={[0, 0, -0.4]}>
        <capsuleGeometry args={[0.04, 0.4, 4, 8]} />
        <meshPhysicalMaterial color={color} roughness={0.2} metalness={0.1} clearcoat={1} />
      </mesh>

      {/* Body */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 1.5, 32]} />
        <meshPhysicalMaterial color={color} roughness={0.2} metalness={0.1} clearcoat={1} emissive={color} emissiveIntensity={0.1}/>
      </mesh>
      {/* Body Bottom Curve (fake capsule bottom) */}
      <mesh position={[0, -0.85, 0]}>
        <sphereGeometry args={[0.8, 32, 32, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
        <meshPhysicalMaterial color={color} roughness={0.2} metalness={0.1} clearcoat={1} />
      </mesh>

      {/* Arms */}
      <mesh position={[-1.1, -0.1, 0]}>
        <capsuleGeometry args={[0.2, 1.1, 16, 16]} />
        <meshPhysicalMaterial color={color} roughness={0.2} metalness={0.1} clearcoat={1} />
      </mesh>
      <mesh position={[1.1, -0.1, 0]}>
        <capsuleGeometry args={[0.2, 1.1, 16, 16]} />
        <meshPhysicalMaterial color={color} roughness={0.2} metalness={0.1} clearcoat={1} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.35, -1.2, 0]}>
        <capsuleGeometry args={[0.2, 0.6, 16, 16]} />
        <meshPhysicalMaterial color={color} roughness={0.2} metalness={0.1} clearcoat={1} />
      </mesh>
      <mesh position={[0.35, -1.2, 0]}>
        <capsuleGeometry args={[0.2, 0.6, 16, 16]} />
        <meshPhysicalMaterial color={color} roughness={0.2} metalness={0.1} clearcoat={1} />
      </mesh>
    </group>
  );
};

export const Android3DBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#7F52FF" />
        
        <Float
          speed={2} // Animation speed
          rotationIntensity={1} // XYZ rotation intensity
          floatIntensity={1.5} // Up/down float intensity
          floatingRange={[-0.5, 0.5]} // Range of y-axis values
        >
          <AndroidRobot />
        </Float>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};
