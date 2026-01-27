"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      {/* Animated Hamburger / X Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
        className="text-white text-3xl focus:outline-none transition-all z-50 relative"
      >
        <motion.span
          key={open ? "close" : "menu"}
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
        >
          {open ? "✕" : "☰"}
        </motion.span>
      </button>

      {/* FULLSCREEN MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center text-slate-100 text-2xl space-y-8"
          >
            <a
              href="/"
              onClick={() => setOpen(false)}
              className="hover:text-sky-400 transition"
            >
              Home
            </a>

            <a
              href="/services"
              onClick={() => setOpen(false)}
              className="hover:text-sky-400 transition"
            >
              Services
            </a>

            <a
              href="/platform"
              onClick={() => setOpen(false)}
              className="hover:text-sky-400 transition"
            >
              Platform
            </a>

            <a
              href="/about"
              onClick={() => setOpen(false)}
              className="hover:text-sky-400 transition"
            >
              About
            </a>

            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-sky-400 transition"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

