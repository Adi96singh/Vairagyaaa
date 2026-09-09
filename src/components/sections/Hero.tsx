"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown, Download, Eye } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/profile";
import Image from "next/image";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });
const ParticleField = dynamic(() => import("@/components/3d/ParticleField"), { ssr: false });
const FloatingGeometry = dynamic(() => import("@/components/3d/FloatingGeometry"), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene className="w-full h-full">
          <ParticleField />
          <FloatingGeometry />
        </Scene>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg z-[1]" />

      {/* Gradient overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent z-[2]" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--color-bg-primary)]/50 to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side - Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Status indicator */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse" />
                <span className="text-[var(--color-text-secondary)]">
                  {personalInfo.status}
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Headline */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl text-[var(--color-text-primary)] font-medium mb-4 leading-snug"
            >
              Full-Stack Developer.
              <br />
              <span className="text-[var(--color-text-secondary)]">
                Building Systems That Actually Ship.
              </span>
            </motion.p>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-[var(--color-text-muted)] mb-8 max-w-lg"
            >
              Backend engineering, scalable web systems, and applied AI/ML.
              <br />
              <span className="text-[var(--color-text-muted)] italic text-sm">
                Yes, the AI actually works. No, it won&apos;t replace your job. Probably.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              <button onClick={scrollToProjects} className="btn-primary">
                <Eye size={18} />
                View Projects
              </button>
              <a
                href={personalInfo.resumePath}
                download
                className="btn-secondary"
              >
                <Download size={18} />
                Download Resume
              </a>
              <button onClick={scrollToContact} className="btn-secondary">
                <Mail size={18} />
                Contact Me
              </button>
            </motion.div>

            {/* Social buttons */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover:border-[var(--color-border-glow)] transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} className="text-[var(--color-text-secondary)]" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover:border-[var(--color-border-glow)] transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} className="text-[var(--color-text-secondary)]" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 glass rounded-xl hover:border-[var(--color-border-glow)] transition-all duration-300 hover:-translate-y-1"
                aria-label="Send Email"
              >
                <Mail size={20} className="text-[var(--color-text-secondary)]" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative float-slow">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#8b5cf6]/20 via-[#3b82f6]/20 to-[#06b6d4]/20 blur-2xl" />

              {/* Glass frame */}
              <div className="relative glass rounded-3xl p-2 glow-border">
                <div className="relative w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - Professional Portrait`}
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/30 via-transparent to-transparent" />
                </div>

                {/* Rim lighting effect */}
                <div className="absolute inset-0 rounded-3xl border border-[#8b5cf6]/20" />
              </div>

              {/* Floating tech badges around photo */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 tech-badge"
              >
                Node.js
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-3 tech-badge"
              >
                Python
              </motion.div>
              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-6 tech-badge"
              >
                AI/ML
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[var(--color-text-muted)]"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
