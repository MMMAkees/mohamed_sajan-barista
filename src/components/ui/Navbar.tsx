'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, Sun, Moon, Sparkles } from 'lucide-react';
import { BARISTA_PROFILE } from '@/data/baristaData';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
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
    { name: 'Brew Lab', href: '#brew-simulator' },
    { name: 'Latte Art', href: '#latte-art' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl transition-all duration-500 px-6 py-3 flex items-center justify-between ${
          scrolled
            ? 'bg-[#120B08]/85 dark:bg-[#120B08]/90 light:bg-white/90 backdrop-blur-xl border border-[#C89D66]/30 shadow-2xl shadow-black/40'
            : 'bg-[#18100C]/50 dark:bg-[#18100C]/50 light:bg-white/60 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Brand Logo with MS Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#C89D66] p-0.5 shadow-lg shadow-[#C89D66]/20 group-hover:scale-105 transition-transform bg-black">
            <Image
              src="/logo.png"
              alt="MS Monogram Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <span className="font-extrabold text-base tracking-wide text-stone-100 dark:text-white light:text-stone-900 group-hover:text-[#E6C594] transition-colors block leading-none">
              SAJAN
            </span>
            <span className="text-[9px] tracking-widest text-[#C89D66] uppercase font-bold">
              Specialty Barista
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-wide text-stone-300 dark:text-stone-300 light:text-stone-700 hover:text-[#E6C594] light:hover:text-[#A87339] transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C89D66] to-[#E6C594] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Actions & Telegram-Style Theme Switcher */}
        <div className="flex items-center gap-3">
          {/* Telegram-style Fluid Morph Light/Dark Mode Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            className="theme-toggle-btn w-14 h-8 rounded-full p-1 bg-[#2E1E16] dark:bg-[#2E1E16] light:bg-[#E8DCCF] border border-[#C89D66]/40 flex items-center justify-between relative shadow-inner cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {/* Sliding Morph Handle */}
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${
                theme === 'dark'
                  ? 'bg-gradient-to-tr from-[#C89D66] to-[#E6C594] text-[#0B0705] translate-x-0'
                  : 'bg-[#A87339] text-white translate-x-6'
              }`}
            >
              {theme === 'dark' ? (
                <Moon className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Sun className="w-3.5 h-3.5 fill-current" />
              )}
            </motion.div>

            {/* Inactive Icon Indicators */}
            <Sun className={`w-3.5 h-3.5 absolute right-2 text-[#C89D66] ${theme === 'light' ? 'opacity-0' : 'opacity-60'}`} />
            <Moon className={`w-3.5 h-3.5 absolute left-2 text-[#A87339] ${theme === 'dark' ? 'opacity-0' : 'opacity-60'}`} />
          </button>

          {/* Quick WhatsApp Link */}
          <a
            href={`https://wa.me/${BARISTA_PROFILE.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex px-3.5 py-2 rounded-xl text-xs font-semibold text-[#E6C594] light:text-[#7A4E1D] bg-[#2E1E16]/80 light:bg-[#FAF0E6] hover:bg-[#C89D66] hover:text-[#0B0705] border border-[#C89D66]/40 transition-all items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            WhatsApp
          </a>

          {/* Hire CTA */}
          <a
            href="#contact"
            className="hidden sm:flex px-4 py-2 rounded-xl text-xs font-bold text-[#0B0705] bg-gradient-to-r from-[#E6C594] to-[#C89D66] hover:brightness-110 shadow-lg shadow-[#C89D66]/25 transition-all items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            Hire Barista
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-xl bg-[#2E1E16]/80 border border-[#C89D66]/30 flex items-center justify-center text-[#E6C594]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-3 max-w-6xl mx-auto rounded-2xl bg-[#120B08]/95 dark:bg-[#120B08]/95 light:bg-[#FAF6F0]/95 backdrop-blur-2xl border border-[#C89D66]/40 p-6 shadow-2xl space-y-4"
          >
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-stone-200 dark:text-stone-200 light:text-stone-800 hover:text-[#E6C594] hover:bg-[#2E1E16]/60 text-sm font-medium transition-all"
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
