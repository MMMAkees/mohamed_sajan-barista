'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Menu, X, Phone, MessageSquare, Award } from 'lucide-react';
import { BARISTA_PROFILE } from '@/data/baristaData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Brew Simulator', href: '#brew-simulator' },
    { name: 'Latte Art', href: '#latte-art' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-500 px-6 py-3.5 flex items-center justify-between ${
          scrolled
            ? 'bg-[#120B08]/85 backdrop-blur-xl border border-[#C89D66]/30 shadow-2xl shadow-black/80'
            : 'bg-[#18100C]/40 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Logo Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C89D66] to-[#784A28] flex items-center justify-center shadow-lg shadow-[#C89D66]/20 group-hover:scale-105 transition-transform">
            <Coffee className="w-5 h-5 text-[#0B0705]" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-wide text-white group-hover:text-[#E6C594] transition-colors block leading-none">
              SAJAN
            </span>
            <span className="text-[10px] tracking-widest text-[#C89D66] uppercase font-semibold">
              Specialty Barista
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-300 hover:text-[#E6C594] transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C89D66] to-[#E6C594] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Quick CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${BARISTA_PROFILE.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[#E6C594] bg-[#2E1E16]/80 hover:bg-[#C89D66] hover:text-[#0B0705] border border-[#C89D66]/40 transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            WhatsApp
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-bold text-[#0B0705] bg-gradient-to-r from-[#E6C594] to-[#C89D66] hover:brightness-110 shadow-lg shadow-[#C89D66]/25 transition-all flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            Hire Barista
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 rounded-xl bg-[#2E1E16]/80 border border-[#C89D66]/30 flex items-center justify-center text-[#E6C594]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-3 max-w-6xl mx-auto rounded-2xl bg-[#120B08]/95 backdrop-blur-2xl border border-[#C89D66]/40 p-6 shadow-2xl space-y-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-stone-200 hover:text-[#E6C594] hover:bg-[#2E1E16]/60 text-sm font-medium transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={`tel:${BARISTA_PROFILE.phone}`}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#E6C594] to-[#C89D66] text-[#0B0705] font-bold text-center text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Barista (+974 6647 6221)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
