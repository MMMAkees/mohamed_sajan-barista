'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, Sun, Moon } from 'lucide-react';
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
        className="max-w-6xl mx-auto rounded-2xl transition-all duration-500 px-6 py-3 flex items-center justify-between backdrop-blur-xl border shadow-2xl"
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'var(--nav-bg-transparent)',
          borderColor: scrolled ? 'var(--border-accent)' : 'var(--border-default)',
        }}
      >
        {/* Brand Logo with MS Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 p-0.5 shadow-lg group-hover:scale-105 transition-transform"
            style={{ borderColor: 'var(--gold)', background: theme === 'dark' ? '#000' : '#fff' }}
          >
            <Image
              src="/logo.png"
              alt="MS Monogram Logo"
              fill
              className="object-cover"
              style={{ filter: theme === 'light' ? 'none' : 'invert(1)' }}
              priority
            />
          </div>
          <div>
            <span className="font-extrabold text-base tracking-wide group-hover:opacity-80 transition-colors block leading-none"
              style={{ color: 'var(--text-primary)' }}
            >
              SAJAN
            </span>
            <span className="text-[9px] tracking-widest uppercase font-bold"
              style={{ color: 'var(--gold)' }}
            >
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
              className="text-xs font-semibold tracking-wide transition-colors relative group py-1"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ background: `linear-gradient(to right, var(--gold), var(--gold-bright))` }}
              />
            </a>
          ))}
        </nav>

        {/* Actions & Theme Switcher */}
        <div className="flex items-center gap-3">
          {/* Telegram-style Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            className="theme-toggle-btn w-14 h-8 rounded-full p-1 border flex items-center relative shadow-inner cursor-pointer"
            style={{
              background: 'var(--bg-elevated)',
              borderColor: 'var(--border-default)',
            }}
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="w-6 h-6 rounded-full flex items-center justify-center shadow-md absolute"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, #C89D66, #E6C594)'
                  : 'linear-gradient(135deg, #A87339, #7A4E1D)',
                left: theme === 'dark' ? '4px' : 'calc(100% - 28px)',
              }}
            >
              {theme === 'dark' ? (
                <Moon className="w-3.5 h-3.5 text-[#0B0705]" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-white" />
              )}
            </motion.div>
          </button>

          {/* Quick WhatsApp Link */}
          <a
            href={`https://wa.me/${BARISTA_PROFILE.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all items-center gap-1.5 hover:opacity-80"
            style={{
              color: 'var(--text-accent)',
              background: 'var(--bg-elevated)',
              borderColor: 'var(--border-default)',
            }}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            WhatsApp
          </a>

          {/* Hire CTA */}
          <a
            href="#contact"
            className="hidden sm:flex px-4 py-2 rounded-xl text-xs font-bold text-[#0B0705] bg-gradient-to-r from-[#E6C594] to-[#C89D66] hover:brightness-110 shadow-lg transition-all items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            Hire Barista
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-xl border flex items-center justify-center"
            style={{
              background: 'var(--bg-elevated)',
              borderColor: 'var(--border-default)',
              color: 'var(--text-accent)',
            }}
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
            className="lg:hidden mt-3 max-w-6xl mx-auto rounded-2xl backdrop-blur-2xl border p-6 shadow-2xl space-y-4"
            style={{
              background: 'var(--nav-bg)',
              borderColor: 'var(--border-accent)',
            }}
          >
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:opacity-80"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t flex flex-col gap-3" style={{ borderColor: 'var(--border-default)' }}>
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
