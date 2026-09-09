"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, ChevronRight, Car, Scan, Server, Database, Wifi, LayoutDashboard } from "lucide-react";
import { experience } from "@/data/profile";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";
import { useState } from "react";

const parkingFlow = [
  { icon: Car, label: "Vehicle Enters", description: "Vehicle arrives at parking facility", color: "#10b981" },
  { icon: Scan, label: "Number Plate Recognition", description: "AI-powered ANPR scans and identifies vehicle", color: "#8b5cf6" },
  { icon: Server, label: "Backend API", description: "Express.js API processes the entry request", color: "#3b82f6" },
  { icon: Database, label: "Slot Allocation", description: "PostgreSQL transaction allocates slot with concurrency safety", color: "#06b6d4" },
  { icon: Wifi, label: "WebSocket Update", description: "Real-time occupancy broadcast to all connected clients", color: "#a855f7" },
  { icon: LayoutDashboard, label: "Dashboard Update", description: "Live occupancy dashboard reflects the change", color: "#f59e0b" },
];

export default function Experience() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <SectionWrapper id="experience">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Where I traded 'Hello World' for production deployments.">
          Experience
        </SectionTitle>

        {experience.map((exp) => (
          <div key={exp.id} className="space-y-12">
            {/* Company card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-[var(--color-accent-violet)] mb-1">
                    <Building2 size={18} />
                    <span className="font-mono text-sm">{exp.company}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">{exp.role}</h3>
                </div>
                <div className="flex flex-col gap-1 text-sm text-[var(--color-text-muted)]">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-[var(--color-text-secondary)] mb-6">{exp.description}</p>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                {exp.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <ChevronRight size={16} className="text-[var(--color-accent-violet)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[var(--color-text-secondary)]">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Parking System Architecture Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-6 text-center">
                Architecture Flow: How a Vehicle Gets Parked
                <span className="block text-sm text-[var(--color-text-muted)] font-normal mt-1">
                  (Click each step — it&apos;s not just for decoration)
                </span>
              </h4>

              <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-2">
                {parkingFlow.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    onClick={() => setActiveStep(activeStep === i ? null : i)}
                    className={`flex-1 glass-card p-4 cursor-pointer transition-all duration-300 ${
                      activeStep === i ? "glow-border scale-[1.02]" : ""
                    }`}
                  >
                    <div className="flex md:flex-col items-center md:text-center gap-3">
                      <div
                        className="p-2 rounded-lg transition-colors duration-300"
                        style={{ backgroundColor: `${step.color}15` }}
                      >
                        <step.icon size={20} style={{ color: step.color }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--color-text-primary)]">
                          {step.label}
                        </p>
                        {activeStep === i && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="text-xs text-[var(--color-text-muted)] mt-1"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Arrow connector */}
                    {i < parkingFlow.length - 1 && (
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                        →
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
