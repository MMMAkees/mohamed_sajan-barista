'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LATTE_ART_GALLERY } from '@/data/baristaData';
import { Feather, Coffee, Sparkles, CheckCircle2 } from 'lucide-react';

export default function LatteArtGallery() {
  return (
    <section id="latte-art" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18100C] border border-[#C89D66]/30 text-xs font-bold text-[#E6C594]">
            <Feather className="w-3.5 h-3.5 text-[#C89D66]" />
            MICROFOAM ARTISTRY & PRESENTATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Latte Art & <span className="text-gradient-amber">Craft Gallery</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Silky milk texturing at 62°C combined with precise free-hand pours for memorable customer visual presentation.
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LATTE_ART_GALLERY.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-3xl overflow-hidden border border-[#C89D66]/20 glass-panel-hover flex flex-col justify-between group"
            >
              {/* Graphic Visual Header */}
              <div className={`h-48 bg-gradient-to-br ${item.accentColor} relative p-6 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/10 blur-xl group-hover:scale-150 transition-transform duration-700" />
                <div className="flex justify-between items-start relative z-10">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-black/40 text-[#E6C594] border border-[#C89D66]/30">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-[#E6C594]">
                    <Coffee className="w-4 h-4" />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-black text-white group-hover:text-[#E6C594] transition-colors">{item.title}</h3>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 space-y-4">
                <p className="text-xs text-stone-300 leading-relaxed">{item.description}</p>
                <div className="flex items-center gap-2 text-[11px] text-[#E6C594] font-semibold pt-2 border-t border-white/10">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C89D66]" />
                  Microfoam Temp: 60°C - 65°C
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
