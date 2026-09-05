'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BARISTA_PROFILE, ACTION_PHOTOS } from '@/data/baristaData';
import { Globe, Heart, Shield, CheckCircle2, Sparkles, MapPin, Coffee, Camera, Maximize2, X } from 'lucide-react';

export default function AboutSection() {
  const [activePhoto, setActivePhoto] = useState<typeof ACTION_PHOTOS[0] | null>(null);

  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
            style={{ background: 'var(--bg-card-solid)', border: '1px solid var(--border-default)', color: 'var(--text-accent)' }}
          >
            <Coffee className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
            ARTISANAL CRAFT & PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            About <span className="text-gradient-amber">{BARISTA_PROFILE.shortName}</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Bridging international cafe cultures from Sri Lanka to the luxury shores of Pearl-Qatar.
          </p>
        </div>

        {/* Real Action Photos Showcase Row */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Camera className="w-5 h-5" style={{ color: 'var(--gold)' }} />
              Live Bar Operations at F-Mart (Pearl-Qatar)
            </h3>
            <span className="text-xs font-semibold" style={{ color: 'var(--gold)' }}>
              5 Authentic Photos
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {ACTION_PHOTOS.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActivePhoto(photo)}
                className="relative h-56 rounded-2xl overflow-hidden glass-panel border-2 cursor-pointer group shadow-lg"
                style={{ borderColor: 'var(--border-accent)' }}
              >
                <Image
                  src={photo.imagePath}
                  alt={photo.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-3 inset-x-3 text-left">
                  <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-black/70 text-[#E6C594] border border-[#C89D66]/30 inline-block mb-1">
                    {photo.category}
                  </span>
                  <h4 className="text-xs font-bold text-white truncate leading-snug">
                    {photo.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Bio Story Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-3" style={{ color: 'var(--text-accent)' }}>
                <Sparkles className="w-6 h-6" style={{ color: 'var(--gold)' }} />
                The Coffee Artisan&apos;s Journey
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {BARISTA_PROFILE.summary}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Starting at <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Grind in Colombo</span>, I perfected foundational espresso dial-in techniques, microfoam milk texturing, and fast-paced neighbourhood service. Moving to <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>F-Mart Boutique Supermarket at Pearl-Qatar, Doha</span>, I now elevate the coffee experience for a high-end international clientele.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" style={{ borderTop: '1px solid var(--border-default)' }}>
              {[
                { icon: <CheckCircle2 className="w-5 h-5" />, title: "Espresso Dial-In", desc: "Calibrating grind, dose & yield every morning for peak flavor extraction." },
                { icon: <Heart className="w-5 h-5" />, title: "Velvety Microfoam", desc: "Pouring clean Rosetta, Tulip, & Swan motifs with silky 62°C milk texture." },
                { icon: <Shield className="w-5 h-5" />, title: "HACCP Hygiene", desc: "Strict machine purging, surface sanitization & food safety compliance." },
                { icon: <Globe className="w-5 h-5" />, title: "Multicultural Service", desc: "Welcoming guests in English, Tamil, and Sinhala with warm enthusiasm." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', color: 'var(--text-accent)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 glass-panel p-8 rounded-3xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-accent)' }}>
                <Globe className="w-5 h-5" style={{ color: 'var(--gold)' }} />
                Languages Spoken
              </h3>

              <div className="space-y-4">
                {BARISTA_PROFILE.languages.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{lang.name}</span>
                      <span className="text-xs font-medium" style={{ color: 'var(--gold)' }}>{lang.level}</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full overflow-hidden p-0.5"
                      style={{ background: 'var(--bg-card-solid)', border: '1px solid var(--border-default)' }}
                    >
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

            {/* Location Callout */}
            <div className="p-4 rounded-2xl space-y-2"
              style={{ background: 'var(--bg-card-solid)', border: '1px solid var(--border-default)' }}
            >
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: 'var(--text-accent)' }}>
                <MapPin className="w-4 h-4" style={{ color: 'var(--gold)' }} />
                Location & Relocation
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Currently based in <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Doha, Qatar</span>. Flexible for shift work including weekends, early mornings & holidays.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full glass-panel rounded-3xl overflow-hidden shadow-2xl border-2"
              style={{ borderColor: 'var(--border-accent)' }}
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-[65vh] bg-black">
                <Image
                  src={activePhoto.imagePath}
                  alt={activePhoto.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-[#120B08] space-y-2 border-t border-[#C89D66]/30">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-extrabold tracking-wider px-3 py-0.5 rounded-full bg-[#C89D66]/20 text-[#E6C594]">
                    {activePhoto.category}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">• {activePhoto.location}</span>
                </div>
                <h4 className="text-xl font-bold text-white">{activePhoto.title}</h4>
                <p className="text-xs text-[#C4B8AB] leading-relaxed">{activePhoto.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
