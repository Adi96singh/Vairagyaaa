"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMediaQuery } from "@/lib/hooks";

export default function ParticleField() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const count = isMobile ? 200 : 600;

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 20;
      const speed = 0.002 + Math.random() * 0.005;
      const offset = Math.random() * Math.PI * 2;
      temp.push({ x, y, z, speed, offset });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    particles.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(time * p.speed + p.offset) * 0.5,
        p.y + Math.cos(time * p.speed + p.offset) * 0.5,
        p.z + Math.sin(time * p.speed * 0.5) * 0.3
      );
      const scale = 0.02 + Math.sin(time * 0.5 + p.offset) * 0.01;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#8b5cf6" transparent opacity={0.4} />
    </instancedMesh>
  );
}
