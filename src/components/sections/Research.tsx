"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Award } from "lucide-react";
import { research } from "@/data/profile";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";

export default function Research() {
  return (
    <SectionWrapper id="research">
      <div className="max-w-4xl mx-auto">
        <SectionTitle subtitle="Because building things is great, but writing about them is how you prove you understand what you built.">
          Research
        </SectionTitle>

        {research.map((pub) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#8b5cf6]/5 to-transparent" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]">
                  <Award size={14} className="text-[var(--color-accent-violet)]" />
                  <span className="text-xs font-medium text-[var(--color-accent-violet)]">Published Research</span>
                </div>
                <span className="text-xs text-[var(--color-text-muted)]">{pub.date}</span>
              </div>

              {/* Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.15)] flex-shrink-0 mt-1">
                  <BookOpen size={24} className="text-[var(--color-accent-violet)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-1">{pub.description}</p>
                </div>
              </div>

              {/* Publication details */}
              <div className="ml-16 space-y-2 mb-6">
                <p className="text-sm text-[var(--color-text-muted)]">
                  <span className="text-[var(--color-text-secondary)] font-medium">Journal:</span>{" "}
                  {pub.journal}
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  <span className="text-[var(--color-text-secondary)] font-medium">Volume:</span>{" "}
                  {pub.volume}
                </p>
                <p className="text-sm text-[var(--color-text-muted)] font-mono">
                  <span className="text-[var(--color-text-secondary)] font-sans font-medium">DOI:</span>{" "}
                  {pub.doi}
                </p>
              </div>

              {/* CTA */}
              <div className="ml-16">
                <a
                  href={pub.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  <ExternalLink size={16} />
                  View Publication
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
