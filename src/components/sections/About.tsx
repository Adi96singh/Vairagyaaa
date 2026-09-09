"use client";

import { motion } from "framer-motion";
import { Code2, Database, Brain, Server, Workflow, Cpu } from "lucide-react";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";

const focusAreas = [
  {
    icon: Server,
    title: "Backend Systems",
    description: "Node.js, Express, REST APIs — the stuff that runs while you sleep.",
    color: "#8b5cf6",
  },
  {
    icon: Database,
    title: "Databases",
    description: "PostgreSQL, MySQL, MongoDB. Transactions that don't lose your data.",
    color: "#3b82f6",
  },
  {
    icon: Code2,
    title: "Full-Stack Dev",
    description: "From pixel to production. HTML to deployment pipelines.",
    color: "#06b6d4",
  },
  {
    icon: Brain,
    title: "AI / ML",
    description: "Scikit-learn, NLP, classification — ML that solves actual problems.",
    color: "#a855f7",
  },
  {
    icon: Cpu,
    title: "LLM Tooling",
    description: "Agentic AI, RAG pipelines, Gemini API integrations.",
    color: "#10b981",
  },
  {
    icon: Workflow,
    title: "System Architecture",
    description: "MVC, microservices patterns, queue-based processing. Clean layers or bust.",
    color: "#f59e0b",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="The kind of developer who reads the docs first and asks ChatGPT second.">
          About Me
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              I&apos;m a Computer Science student at Chandigarh University with a focus on building
              backend systems that are clean, scalable, and — this is the important part —{" "}
              <span className="text-[var(--color-text-primary)] font-medium">actually work in production</span>.
            </p>
            <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
              My approach is simple: write code that other developers can read without wanting to
              quit their jobs. I care about clean architecture (MVC, layered services), proper
              database design (indexes, transactions, concurrency), and integrating AI where it
              genuinely helps — not where it looks good on a slide deck.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              When I&apos;m not refactoring someone&apos;s spaghetti code, I&apos;m exploring NLP
              pipelines, building agentic AI systems, or contributing to research on guided
              learning platforms. I also served as Vice Chairperson of the IEEE CIS student branch,
              which is a fancy way of saying I organized events and made sure the WiFi worked.
            </p>
          </motion.div>

          {/* Focus areas grid */}
          <div className="grid grid-cols-2 gap-4">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-4 group cursor-default"
              >
                <area.icon
                  size={24}
                  className="mb-3 transition-colors duration-300"
                  style={{ color: area.color }}
                />
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                  {area.title}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
