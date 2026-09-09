"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, personalInfo } from "@/data/profile";
import { useActiveSection } from "@/lib/hooks";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass rounded-2xl px-6 py-3 shadow-lg shadow-black/20"
            : "bg-transparent px-6 py-4"
        }`}
      >
        <div className="flex items-center gap-8">
          {/* Profile indicator */}
          <button
            onClick={() => scrollTo("home")}
            className="hidden md:flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[var(--color-border-subtle)] group-hover:border-[var(--color-border-glow)] transition-colors">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
              {personalInfo.firstName}
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3 py-1.5 text-sm rounded-lg transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-[rgba(139,92,246,0.1)] border border-[var(--color-border-subtle)] rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 text-[var(--color-text-secondary)] cursor-pointer"
            aria-label="Toggle navigation"
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-50 glass rounded-2xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-3 text-left rounded-xl transition-all cursor-pointer ${
                    activeSection === item.id
                      ? "bg-[rgba(139,92,246,0.1)] text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
