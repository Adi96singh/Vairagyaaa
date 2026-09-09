"use client";

import { motion } from "framer-motion";
import { Mail, Download, Globe, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/profile";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Big name */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6"
        >
          {personalInfo.name}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-[var(--color-text-secondary)] mb-2"
        >
          Let&apos;s build something useful.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-[var(--color-text-muted)] mb-12 italic"
        >
          Or at least something that compiles on the first try.
        </motion.p>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="glass-card p-5 flex flex-col items-center gap-3 group"
          >
            <Mail size={24} className="text-[var(--color-accent-violet)] group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">Email</p>
              <p className="text-xs text-[var(--color-text-muted)] break-all">{personalInfo.email}</p>
            </div>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 flex flex-col items-center gap-3 group"
          >
            <GithubIcon size={24} className="text-[var(--color-text-primary)] group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">GitHub</p>
              <p className="text-xs text-[var(--color-text-muted)]">@{personalInfo.githubUsername}</p>
            </div>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 flex flex-col items-center gap-3 group"
          >
            <LinkedinIcon size={24} className="text-[#0077b5] group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">LinkedIn</p>
              <p className="text-xs text-[var(--color-text-muted)]">aditya08singh</p>
            </div>
          </a>

          <a
            href={`https://${personalInfo.portfolio}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 flex flex-col items-center gap-3 group"
          >
            <Globe size={24} className="text-[var(--color-accent-cyan)] group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">Portfolio</p>
              <p className="text-xs text-[var(--color-text-muted)]">{personalInfo.portfolio}</p>
            </div>
          </a>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a href={`mailto:${personalInfo.email}`} className="btn-primary">
            <Mail size={18} />
            Email Me
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <GithubIcon size={18} />
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
          <a href={personalInfo.resumePath} download className="btn-secondary">
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--color-border-subtle)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <p className="text-xs text-[var(--color-text-muted)] flex items-center gap-1">
          Built with React / Next.js / Three.js
          <ArrowUpRight size={12} />
        </p>
      </div>
    </footer>
  );
}
