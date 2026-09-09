"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/profile";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";
import dynamic from "next/dynamic";
import { useState } from "react";

const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });
const SkillConstellation = dynamic(() => import("@/components/3d/SkillConstellation"), { ssr: false });

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Technologies I use to build things that compile on the first try. Well, sometimes the second.">
          Technical Arsenal
        </SectionTitle>

        {/* 3D Constellation - Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="h-[500px] rounded-2xl overflow-hidden glass-card">
            <Scene className="w-full h-full">
              <SkillConstellation />
            </Scene>
          </div>
          <p className="text-center text-xs text-[var(--color-text-muted)] mt-3">
            ↑ Hover over nodes to explore. Yes, this is real 3D. No, it&apos;s not a screenshot.
          </p>
        </div>

        {/* Category cards - All screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-6 group"
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
                  {category.label}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="group/skill relative"
                  >
                    <span
                      className="inline-block px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-default border"
                      style={{
                        borderColor: `${category.color}22`,
                        color: activeCategory === category.id ? category.color : "var(--color-text-secondary)",
                        backgroundColor:
                          activeCategory === category.id
                            ? `${category.color}10`
                            : "transparent",
                      }}
                    >
                      {skill.name}
                    </span>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] text-xs text-[var(--color-text-muted)] opacity-0 group-hover/skill:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-xl">
                      {skill.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
