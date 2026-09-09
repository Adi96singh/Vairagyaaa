"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({
  position,
  geometry,
  color,
  speed,
  rotationSpeed,
  distort = 0.3,
  scale = 1,
}: {
  position: [number, number, number];
  geometry: "icosahedron" | "octahedron" | "torus";
  color: string;
  speed: number;
  rotationSpeed: number;
  distort?: number;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += rotationSpeed * 0.01;
    meshRef.current.rotation.y += rotationSpeed * 0.015;
    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry === "icosahedron" && <icosahedronGeometry args={[1, 1]} />}
        {geometry === "octahedron" && <octahedronGeometry args={[1, 0]} />}
        {geometry === "torus" && <torusGeometry args={[1, 0.3, 16, 32]} />}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          wireframe
          distort={distort}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingGeometry() {
  return (
    <group>
      <FloatingShape
        position={[-4, 2, -3]}
        geometry="icosahedron"
        color="#8b5cf6"
        speed={1.5}
        rotationSpeed={0.3}
        scale={1.5}
      />
      <FloatingShape
        position={[4, -1, -4]}
        geometry="octahedron"
        color="#3b82f6"
        speed={1}
        rotationSpeed={0.5}
        scale={1.2}
      />
      <FloatingShape
        position={[-3, -3, -2]}
        geometry="torus"
        color="#06b6d4"
        speed={0.8}
        rotationSpeed={0.2}
        scale={0.8}
      />
      <FloatingShape
        position={[5, 3, -5]}
        geometry="icosahedron"
        color="#a855f7"
        speed={1.2}
        rotationSpeed={0.4}
        distort={0.5}
        scale={1}
      />
      <FloatingShape
        position={[0, -4, -3]}
        geometry="octahedron"
        color="#8b5cf6"
        speed={0.6}
        rotationSpeed={0.3}
        scale={0.7}
      />
    </group>
  );
}
