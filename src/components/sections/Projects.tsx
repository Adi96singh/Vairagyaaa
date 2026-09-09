"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  X,
  Shield,
  Wallet,
  Search,
  TrendingDown,
  Globe,
  Users,
  ClipboardCheck,
  Package,
  Link,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projects, type Project } from "@/data/profile";
import SectionWrapper, { SectionTitle } from "@/components/ui/SectionWrapper";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  shield: Shield,
  wallet: Wallet,
  search: Search,
  trendingDown: TrendingDown,
  globe: Globe,
  users: Users,
  clipboardCheck: ClipboardCheck,
  package: Package,
  link: Link,
};

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: () => void;
}) {
  const Icon = iconMap[project.icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onSelect}
      className="glass-card p-6 cursor-pointer group relative overflow-hidden"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon + Title */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.15)]">
              <Icon size={20} className="text-[var(--color-accent-violet)]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-violet)] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] font-mono">{project.tagline}</p>
            </div>
          </div>
          <ArrowRight
            size={18}
            className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-violet)] group-hover:translate-x-1 transition-all"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="tech-badge text-[10px]">{t}</span>
          ))}
          {project.tech.length > 5 && (
            <span className="tech-badge text-[10px]">+{project.tech.length - 5}</span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent-violet)] transition-colors"
          >
            <GithubIcon size={14} />
            Source
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent-cyan)] transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = iconMap[project.icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="glass rounded-2xl p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-[var(--color-border-glow)]"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]">
              <Icon size={28} className="text-[var(--color-accent-violet)]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">{project.title}</h2>
              <p className="text-sm text-[var(--color-accent-violet)] font-mono">{project.tagline}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={20} className="text-[var(--color-text-muted)]" />
          </button>
        </div>

        {/* Description */}
        <p className="text-[var(--color-text-secondary)] mb-6">{project.description}</p>

        {/* Problem / Solution */}
        {project.problem && (
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
              <h4 className="text-sm font-semibold text-red-400 mb-2">Problem</h4>
              <p className="text-sm text-[var(--color-text-muted)]">{project.problem}</p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
              <h4 className="text-sm font-semibold text-emerald-400 mb-2">Solution</h4>
              <p className="text-sm text-[var(--color-text-muted)]">{project.solution}</p>
            </div>
          </div>
        )}

        {/* Architecture */}
        {project.architecture && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">Architecture</h4>
            <div className="flex flex-col md:flex-row gap-4">
              {/* Main pipeline */}
              <div className="flex-1 glass-card p-4">
                <p className="text-xs text-[var(--color-text-muted)] mb-3 uppercase tracking-wider">Main Pipeline</p>
                <div className="space-y-2">
                  {project.architecture.layers.map((layer, i) => (
                    <div key={layer} className="flex items-center gap-2">
                      {i > 0 && <ChevronRight size={12} className="text-[var(--color-accent-violet)]" />}
                      <span className="text-sm font-mono text-[var(--color-text-secondary)]">{layer}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Side services */}
              {project.architecture.sideServices && (
                <div className="flex-1 glass-card p-4">
                  <p className="text-xs text-[var(--color-text-muted)] mb-3 uppercase tracking-wider">Connected Services</p>
                  <div className="flex flex-wrap gap-2">
                    {project.architecture.sideServices.map((service) => (
                      <span key={service} className="tech-badge">{service}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">Key Features</h4>
          <div className="grid md:grid-cols-2 gap-2">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2">
                <ChevronRight size={14} className="text-[var(--color-accent-violet)] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[var(--color-text-muted)]">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-[var(--color-border-subtle)]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            <GithubIcon size={16} />
            View Source
          </a>
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.filter((p) => p.category === "featured");
  const secondaryProjects = projects.filter((p) => p.category === "secondary");

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="The projects where 'it works on my machine' became 'it works in production'. Mostly.">
          Projects
        </SectionTitle>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Secondary projects */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
            More Experiments
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] mb-6">
            Smaller projects, proof-of-concepts, and things I built because I was curious.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondaryProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/Adi96singh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <GithubIcon size={18} />
            View All Repositories on GitHub
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
