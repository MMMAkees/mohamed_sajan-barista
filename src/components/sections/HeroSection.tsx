'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Coffee, MapPin, ArrowRight, Sparkles, Mail, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { BARISTA_PROFILE } from '@/data/baristaData';
import CoffeeCupCanvas from '@/components/3d/CoffeeCupCanvas';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#C89D66]/15 via-[#784A28]/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#E6C594]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#2E1E16]/40 rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(var(--gold) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md shadow-lg"
            style={{ background: 'var(--glass-bg)', border: '1px solid var(--border-default)' }}
          >
            <span className="text-xs font-semibold tracking-wide flex items-center gap-1.5"
              style={{ color: 'var(--text-accent)' }}
            >
              <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
              Currently Barista at F-Mart Boutique (Pearl-Qatar, Doha)
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="block" style={{ color: 'var(--text-primary)' }}>{BARISTA_PROFILE.name}</span>
              <span className="block text-gradient-amber mt-1">{BARISTA_PROFILE.title}</span>
            </h1>
            <p className="text-lg sm:text-xl font-medium tracking-wide" style={{ color: 'var(--gold)' }}>
              {BARISTA_PROFILE.tagline}
            </p>
          </div>

          {/* Short Bio */}
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Passionate specialty coffee professional with experience across Sri Lanka and Qatar. Mastering espresso extraction, microfoam latte art, manual brewing methods, and high-footfall cafe hospitality.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {BARISTA_PROFILE.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-panel p-3.5 rounded-2xl text-center"
              >
                <div className="text-2xl font-black" style={{ color: 'var(--text-accent)' }}>{stat.value}</div>
                <div className="text-[11px] font-medium leading-snug mt-0.5" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button Group */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#E6C594] via-[#C89D66] to-[#A07440] text-[#0B0705] font-bold text-sm tracking-wide shadow-xl shadow-[#C89D66]/25 hover:brightness-110 hover:scale-[1.02] transition-all flex items-center gap-2 group"
            >
              Hire / Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#brew-simulator"
              className="px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all flex items-center gap-2 backdrop-blur-md border"
              style={{
                background: 'var(--glass-bg)',
                color: 'var(--text-accent)',
                borderColor: 'var(--border-default)',
              }}
            >
              <Coffee className="w-4 h-4" style={{ color: 'var(--gold)' }} />
              Brew Simulator
            </a>

            <a
              href={`mailto:${BARISTA_PROFILE.email}`}
              className="p-3.5 rounded-2xl border transition-all hover:opacity-80"
              style={{ background: 'var(--glass-bg)', borderColor: 'var(--border-default)' }}
              title="Email Sajan"
            >
              <Mail className="w-5 h-5" style={{ color: 'var(--gold)' }} />
            </a>

            <a
              href={BARISTA_PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl border transition-all hover:opacity-80"
              style={{ background: 'var(--glass-bg)', borderColor: 'var(--border-default)' }}
              title={`Instagram @${BARISTA_PROFILE.instagramHandle}`}
            >
              <InstagramIcon className="w-5 h-5" style={{ color: 'var(--gold)' }} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Portrait + 3D Cup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex flex-col items-center"
        >
          {/* Portrait Image */}
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl group"
            style={{ border: '2px solid var(--border-accent)' }}
          >
            <Image
              src={BARISTA_PROFILE.imagePath}
              alt={BARISTA_PROFILE.name}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              priority
            />

            {/* MS Monogram Badge overlay */}
            <div className="absolute top-3 right-3 w-10 h-10 rounded-full border-2 overflow-hidden shadow-lg p-0.5"
              style={{ borderColor: 'var(--gold)', background: 'var(--bg-primary)' }}
            >
              <Image
                src="/logo.png"
                alt="MS Monogram Logo"
                fill
                className="object-cover"
              />
            </div>

            {/* Glass Overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0B0705] via-[#0B0705]/80 to-transparent flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">Abdul Rahman Sajan</span>
                <span className="text-[10px] font-medium block" style={{ color: 'var(--gold)' }}>Pearl-Qatar • Porto Arabia</span>
              </div>
              <div className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(200, 157, 102, 0.2)', border: '1px solid var(--gold)' }}
              >
                <ShieldCheck className="w-4 h-4" style={{ color: 'var(--gold-bright)' }} />
              </div>
            </div>
          </div>

          {/* 3D Cup Canvas */}
          <div className="w-full max-w-sm mt-2">
            <CoffeeCupCanvas />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
