"use client";

import { useRef, useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text, Billboard } from "@react-three/drei";
import * as THREE from "three";
import { skillCategories } from "@/data/profile";

interface SkillNode {
  name: string;
  description: string;
  categoryId: string;
  color: string;
  position: THREE.Vector3;
}

function SkillNodeMesh({
  node,
  isHovered,
  onHover,
  onUnhover,
}: {
  node: SkillNode;
  isHovered: boolean;
  onHover: () => void;
  onUnhover: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const targetScale = isHovered ? 1.5 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <group position={node.position}>
      <mesh
        ref={meshRef}
        onPointerEnter={(e) => { e.stopPropagation(); onHover(); }}
        onPointerLeave={onUnhover}
      >
        <octahedronGeometry args={[0.12, 0]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={isHovered ? 0.8 : 0.3}
          transparent
          opacity={isHovered ? 1 : 0.7}
        />
      </mesh>

      <Billboard>
        <Text
          fontSize={0.1}
          color={isHovered ? "#ffffff" : "#9ca3af"}
          anchorY="bottom"
          position={[0, 0.25, 0]}
          font="/fonts/Inter-Medium.woff"
        >
          {node.name}
        </Text>
      </Billboard>

      {isHovered && (
        <Billboard>
          <Text
            fontSize={0.065}
            color="#c4b5fd"
            anchorY="top"
            position={[0, -0.22, 0]}
            maxWidth={2}
            textAlign="center"
          >
            {node.description}
          </Text>
        </Billboard>
      )}

      {/* Glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.15, 0.18, 32]} />
        <meshBasicMaterial
          color={node.color}
          transparent
          opacity={isHovered ? 0.4 : 0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function ConnectionLine({ start, end, color }: { start: THREE.Vector3; end: THREE.Vector3; color: string }) {
  const points = useMemo(() => [start, end], [start, end]);
  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color={color} transparent opacity={0.08} />
    </line>
  );
}

export default function SkillConstellation() {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { viewport } = useThree();

  const scaleFactor = Math.min(viewport.width / 12, 1);

  const nodes: SkillNode[] = useMemo(() => {
    const result: SkillNode[] = [];
    const categoryPositions: Record<string, THREE.Vector3> = {
      languages: new THREE.Vector3(-2.5 * scaleFactor, 1.5 * scaleFactor, 0),
      backend: new THREE.Vector3(2.5 * scaleFactor, 1 * scaleFactor, 0),
      aiml: new THREE.Vector3(-1.5 * scaleFactor, -1.5 * scaleFactor, 0),
      databases: new THREE.Vector3(2 * scaleFactor, -1.5 * scaleFactor, 0),
      tools: new THREE.Vector3(0, 2.5 * scaleFactor, 0),
    };

    skillCategories.forEach((category) => {
      const center = categoryPositions[category.id] || new THREE.Vector3(0, 0, 0);
      category.skills.forEach((skill, i) => {
        const angle = (i / category.skills.length) * Math.PI * 2;
        const radius = 0.6 * scaleFactor;
        const pos = new THREE.Vector3(
          center.x + Math.cos(angle) * radius,
          center.y + Math.sin(angle) * radius,
          (Math.random() - 0.5) * 0.5
        );
        result.push({
          name: skill.name,
          description: skill.description,
          categoryId: category.id,
          color: category.color,
          position: pos,
        });
      });
    });
    return result;
  }, [scaleFactor]);

  const connections = useMemo(() => {
    const conns: { start: THREE.Vector3; end: THREE.Vector3; color: string }[] = [];
    const categories = [...new Set(nodes.map((n) => n.categoryId))];
    categories.forEach((catId) => {
      const catNodes = nodes.filter((n) => n.categoryId === catId);
      for (let i = 0; i < catNodes.length - 1; i++) {
        conns.push({
          start: catNodes[i].position,
          end: catNodes[i + 1].position,
          color: catNodes[i].color,
        });
      }
      if (catNodes.length > 2) {
        conns.push({
          start: catNodes[catNodes.length - 1].position,
          end: catNodes[0].position,
          color: catNodes[0].color,
        });
      }
    });
    return conns;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#8b5cf6" />

      {connections.map((conn, i) => (
        <ConnectionLine key={i} start={conn.start} end={conn.end} color={conn.color} />
      ))}

      {nodes.map((node) => (
        <SkillNodeMesh
          key={node.name}
          node={node}
          isHovered={hoveredSkill === node.name}
          onHover={() => setHoveredSkill(node.name)}
          onUnhover={() => setHoveredSkill(null)}
        />
      ))}
    </group>
  );
}
