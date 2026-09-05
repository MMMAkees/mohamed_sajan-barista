'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BARISTA_PROFILE } from '@/data/baristaData';
import { Award, Globe, Heart, Shield, CheckCircle2, Sparkles, MapPin, Coffee } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18100C] border border-[#C89D66]/30 text-xs font-bold text-[#E6C594]">
            <Coffee className="w-3.5 h-3.5 text-[#C89D66]" />
            ARTISANAL CRAFT & PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="text-gradient-amber">{BARISTA_PROFILE.shortName}</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Bridging international cafe cultures from Sri Lanka to the luxury shores of Pearl-Qatar. Dedicated to making every cup a harmonious balance of science, art, and genuine hospitality.
          </p>
        </div>

        {/* 2 Column Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Bio Story Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-[#C89D66]/20 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#E6C594] flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-[#C89D66]" />
                The Coffee Artisan's Journey
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {BARISTA_PROFILE.summary}
              </p>
              <p className="text-stone-400 text-sm leading-relaxed">
                Starting at <span className="text-white font-medium">Grind in Colombo</span>, I perfected foundational espresso dial-in techniques, microfoam milk texturing, and fast-paced neighborhood service that earned high acclaim from customers. Moving to <span className="text-white font-medium">F-Mart Boutique Supermarket at Pearl-Qatar, Doha</span>, I now elevate the coffee experience for a high-end international clientele.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#2E1E16] border border-[#C89D66]/40 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#E6C594]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Espresso Dial-In</h4>
                  <p className="text-xs text-stone-400">Calibrating grind, dose & yield every morning for peak flavor extraction.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#2E1E16] border border-[#C89D66]/40 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-[#E6C594]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Velvety Microfoam</h4>
                  <p className="text-xs text-stone-400">Pouring clean Rosetta, Tulip, & Swan motifs with silky 62°C milk texture.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#2E1E16] border border-[#C89D66]/40 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-[#E6C594]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">HACCP Hygiene</h4>
                  <p className="text-xs text-stone-400">Strict machine purging, surface sanitization & food safety compliance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#2E1E16] border border-[#C89D66]/40 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-[#E6C594]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Multicultural Service</h4>
                  <p className="text-xs text-stone-400">Welcoming guests in English, Tamil, and Sinhala with warm enthusiasm.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages & Quick Facts Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-[#C89D66]/20 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#E6C594] flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#C89D66]" />
                Languages Spoken
              </h3>

              <div className="space-y-4">
                {BARISTA_PROFILE.languages.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-white">{lang.name}</span>
                      <span className="text-xs text-[#C89D66] font-medium">{lang.level}</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[#18100C] overflow-hidden p-0.5 border border-[#C89D66]/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-[#C89D66] to-[#E6C594]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability & Location Callout Box */}
            <div className="p-4 rounded-2xl bg-[#18100C]/80 border border-[#C89D66]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#E6C594]">
                <MapPin className="w-4 h-4 text-[#C89D66]" />
                Location & Relocation
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Currently based in <span className="text-white font-medium">Doha, Qatar</span>. Flexible for shift work including weekends, early mornings & holidays. Open to relocation for premium specialty coffee roles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
