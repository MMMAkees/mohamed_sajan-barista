'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Coffee, MapPin, Award, ArrowRight, Download, Sparkles, Mail, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { BARISTA_PROFILE } from '@/data/baristaData';
import CoffeeCupCanvas from '@/components/3d/CoffeeCupCanvas';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glows & Beams */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#C89D66]/15 via-[#784A28]/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#E6C594]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#2E1E16]/40 rounded-full blur-[150px]" />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'radial-gradient(#C89D66 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Profile Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#18100C]/80 border border-[#C89D66]/40 backdrop-blur-md shadow-lg shadow-[#C89D66]/10">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-[#E6C594] tracking-wide flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C89D66]" />
              Currently Barista at F-Mart Boutique (Pearl-Qatar, Doha)
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              <span className="block text-stone-200">{BARISTA_PROFILE.name}</span>
              <span className="block text-gradient-amber mt-1">{BARISTA_PROFILE.title}</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#C89D66] font-medium tracking-wide">
              {BARISTA_PROFILE.tagline}
            </p>
          </div>

          {/* Short Bio snippet */}
          <p className="text-stone-300 text-base leading-relaxed max-w-2xl">
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
                className="glass-panel p-3.5 rounded-2xl border border-[#C89D66]/20 text-center"
              >
                <div className="text-2xl font-black text-[#E6C594]">{stat.value}</div>
                <div className="text-[11px] text-stone-400 font-medium leading-snug mt-0.5">{stat.label}</div>
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
              className="px-6 py-3.5 rounded-2xl bg-[#18100C]/80 hover:bg-[#2E1E16] text-[#E6C594] border border-[#C89D66]/40 text-sm font-semibold transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <Coffee className="w-4 h-4 text-[#C89D66]" />
              Brew Simulator
            </a>

            <a
              href={`mailto:${BARISTA_PROFILE.email}`}
              className="p-3.5 rounded-2xl bg-[#18100C]/60 hover:bg-[#C89D66]/20 border border-white/10 text-stone-300 hover:text-white transition-all"
              title="Email Sajan"
            >
              <Mail className="w-5 h-5 text-[#C89D66]" />
            </a>

            <a
              href={BARISTA_PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-[#18100C]/60 hover:bg-[#C89D66]/20 border border-white/10 text-stone-300 hover:text-white transition-all"
              title="Instagram @sajanBarista"
            >
              <InstagramIcon className="w-5 h-5 text-[#C89D66]" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Portrait Card + 3D Cup Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex flex-col items-center"
        >
          {/* Portrait Image with Luxury Frame */}
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C89D66]/50 group">
            <Image
              src={BARISTA_PROFILE.imagePath}
              alt={BARISTA_PROFILE.name}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              priority
            />

            {/* Glass Overlay Card on Image */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0B0705] via-[#0B0705]/80 to-transparent backdrop-blur-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">Abdul Rahman Sajan</span>
                <span className="text-[10px] text-[#C89D66] font-medium block">Pearl-Qatar • Porto Arabia</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#C89D66]/20 border border-[#C89D66] flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-[#E6C594]" />
              </div>
            </div>
          </div>

          {/* 3D Coffee Cup Viewer under portrait */}
          <div className="w-full max-w-sm mt-4">
            <CoffeeCupCanvas />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
