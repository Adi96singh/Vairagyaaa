"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { Suspense, ReactNode } from "react";
import { useMediaQuery } from "@/lib/hooks";

interface SceneProps {
  children: ReactNode;
  className?: string;
}

export default function Scene({ children, className = "" }: SceneProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={`${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {children}
          <Preload all />
        </Suspense>
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
      </Canvas>
    </div>
  );
}
