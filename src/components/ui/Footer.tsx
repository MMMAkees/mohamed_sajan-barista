'use client';

import React from 'react';
import { Coffee, ArrowUp, Instagram, Mail, Phone } from 'lucide-react';
import { BARISTA_PROFILE } from '@/data/baristaData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#C89D66]/20 bg-[#0B0705] py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C89D66] to-[#784A28] flex items-center justify-center text-[#0B0705]">
            <Coffee className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-white text-base block">{BARISTA_PROFILE.name}</span>
            <span className="text-xs text-[#C89D66] font-medium">Specialty Coffee Barista • Doha, Qatar</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-xs text-stone-400 space-y-1">
          <p>© {new Date().getFullYear()} Abdul Rahman Mohammed Sajan. All rights reserved.</p>
          <p className="text-stone-500">Crafted with Next.js, Three.js & Tailwind CSS.</p>
        </div>

        {/* Actions & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={BARISTA_PROFILE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#18100C] border border-[#C89D66]/30 text-[#E6C594] hover:bg-[#C89D66] hover:text-[#0B0705] transition-all"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${BARISTA_PROFILE.email}`}
            className="p-2.5 rounded-xl bg-[#18100C] border border-[#C89D66]/30 text-[#E6C594] hover:bg-[#C89D66] hover:text-[#0B0705] transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#2E1E16] border border-[#C89D66]/40 text-[#E6C594] hover:bg-[#C89D66] hover:text-[#0B0705] transition-all flex items-center gap-1.5 text-xs font-bold"
          >
            <ArrowUp className="w-4 h-4" />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
