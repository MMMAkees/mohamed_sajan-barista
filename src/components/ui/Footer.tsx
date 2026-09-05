'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUp, Mail, Download } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { BARISTA_PROFILE } from '@/data/baristaData';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 relative z-10" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-default)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand with MS Monogram */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 p-0.5"
            style={{ borderColor: 'var(--gold)', background: theme === 'dark' ? '#000' : '#fff' }}
          >
            <Image
              src="/logo.png"
              alt="MS Monogram Logo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="font-bold text-base block" style={{ color: 'var(--text-primary)' }}>{BARISTA_PROFILE.name}</span>
            <span className="text-xs font-medium" style={{ color: 'var(--gold)' }}>Specialty Coffee Barista • Doha, Qatar</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
          <p>© {new Date().getFullYear()} Abdul Rahman Mohammed Sajan. All rights reserved.</p>
        </div>

        {/* Actions & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href="/Sajan_Mohammed_CV.pdf"
            download="Sajan_Mohammed_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-xl border text-xs font-bold transition-all hover:scale-105 flex items-center gap-1.5"
            style={{
              background: 'rgba(200, 157, 102, 0.15)',
              borderColor: 'var(--gold)',
              color: 'var(--gold-bright)',
            }}
            title="Download Official CV PDF"
          >
            <Download className="w-3.5 h-3.5" />
            CV PDF
          </a>

          <a
            href={BARISTA_PROFILE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border transition-all hover:opacity-80"
            style={{ background: 'var(--bg-card-solid)', borderColor: 'var(--border-default)', color: 'var(--text-accent)' }}
            title="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${BARISTA_PROFILE.email}`}
            className="p-2.5 rounded-xl border transition-all hover:opacity-80"
            style={{ background: 'var(--bg-card-solid)', borderColor: 'var(--border-default)', color: 'var(--text-accent)' }}
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border transition-all hover:opacity-80 flex items-center gap-1.5 text-xs font-bold"
            style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border-default)', color: 'var(--text-accent)' }}
          >
            <ArrowUp className="w-4 h-4" />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
