"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Building, GraduationCap } from "lucide-react";
import { leadership, education } from "@/data/profile";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";

export default function Leadership() {
  return (
    <SectionWrapper id="leadership">
      <div className="max-w-5xl mx-auto">
        <SectionTitle subtitle="Proof that I can work with humans, not just compilers.">
          Leadership & Education
        </SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Leadership */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
              <Users size={20} className="text-[var(--color-accent-violet)]" />
              Leadership
            </h3>

            <div className="space-y-4">
              {leadership.map((role, i) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="glass-card p-5 relative overflow-hidden"
                >
                  {/* Accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-accent-violet)] to-[var(--color-accent-blue)]" />

                  <div className="ml-3">
                    <h4 className="text-base font-semibold text-[var(--color-text-primary)]">
                      {role.role}
                    </h4>
                    <p className="text-sm text-[var(--color-accent-violet)] font-mono mb-1">
                      {role.organization}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
                      <span className="flex items-center gap-1">
                        <Building size={12} />
                        {role.institution}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {role.period}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-2">{role.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-[var(--color-accent-cyan)]" />
              Education
            </h3>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="glass-card p-5 relative overflow-hidden"
                >
                  {/* Accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-accent-cyan)] to-[var(--color-accent-emerald)]" />

                  <div className="ml-3">
                    <h4 className="text-base font-semibold text-[var(--color-text-primary)]">
                      {edu.institution}
                    </h4>
                    <p className="text-sm text-[var(--color-accent-cyan)] mb-1">
                      {edu.degree}
                    </p>
                    {"grade" in edu && edu.grade && (
                      <p className="text-sm text-[var(--color-accent-emerald)] font-mono mb-1">
                        {edu.grade}
                      </p>
                    )}
                    <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
                      <span>{edu.location}</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
