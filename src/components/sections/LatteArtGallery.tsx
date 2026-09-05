'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { LATTE_ART_GALLERY } from '@/data/baristaData';
import { Feather, Coffee, CheckCircle2, Maximize2, X } from 'lucide-react';

export default function LatteArtGallery() {
  const [selectedImage, setSelectedImage] = useState<{
    title: string;
    imagePath: string;
    category: string;
    description: string;
  } | null>(null);

  return (
    <section id="latte-art" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
            style={{
              background: 'var(--bg-card-solid)',
              border: '1px solid var(--border-default)',
              color: 'var(--text-accent)',
            }}
          >
            <Feather className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
            MICROFOAM ARTISTRY & PRESENTATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            Latte Art & <span className="text-gradient-amber">Craft Gallery</span>
          </h2>
          <p className="text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>
            Silky milk texturing at 60°C–65°C combined with precise free-hand pours for memorable customer visual presentation.
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
              onClick={() => setSelectedImage(item)}
              className="glass-panel rounded-3xl overflow-hidden glass-panel-hover flex flex-col justify-between group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-black/60">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0705] via-transparent to-black/30" />

                {/* Category Badge & Expand Icon */}
                <div className="absolute top-3 inset-x-3 flex justify-between items-center z-10">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#E6C594] border border-[#C89D66]/40 shadow-lg">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-[#E6C594] group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <h3 className="text-lg font-black text-white group-hover:text-[#E6C594] transition-colors drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
                <div
                  className="flex items-center gap-2 text-[11px] font-semibold pt-2"
                  style={{ color: 'var(--text-accent)', borderTop: '1px solid var(--border-default)' }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
                  {item.category === 'Brew Technique' ? 'Pour Temp: 92°C Filtered' : 'Microfoam Temp: 60°C – 65°C'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Preview */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full glass-panel rounded-3xl overflow-hidden shadow-2xl border-2"
              style={{ borderColor: 'var(--border-accent)' }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white hover:bg-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative w-full h-[60vh] bg-black">
                <Image
                  src={selectedImage.imagePath}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Info Bar */}
              <div className="p-6 bg-[#120B08] space-y-2 border-t border-[#C89D66]/30">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-extrabold tracking-wider px-3 py-0.5 rounded-full bg-[#C89D66]/20 text-[#E6C594]">
                    {selectedImage.category}
                  </span>
                  <h4 className="text-xl font-bold text-white">{selectedImage.title}</h4>
                </div>
                <p className="text-xs text-[#C4B8AB] leading-relaxed">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
