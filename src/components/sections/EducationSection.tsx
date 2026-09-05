'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Edit3, Sparkles } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18100C] border border-[#C89D66]/30 text-xs font-bold text-[#E6C594]">
            <GraduationCap className="w-3.5 h-3.5 text-[#C89D66]" />
            ACADEMIC BACKGROUND & CERTIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education & <span className="text-gradient-amber">Qualifications</span>
          </h2>
        </div>

        {/* Elegant Customizable Placeholder Card per User Request */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-dashed border-[#C89D66]/40 text-center space-y-4 relative overflow-hidden"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#2E1E16] border border-[#C89D66]/40 flex items-center justify-center text-[#E6C594] mx-auto shadow-lg">
            <GraduationCap className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-bold text-white">Education Details — To Be Updated</h3>
          <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
            This section is currently reserved for educational qualifications, barista certifications (SCA / Barista Guild), and training coursework.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#18100C]/80 border border-[#C89D66]/30 text-xs font-semibold text-[#E6C594]">
            <Edit3 className="w-4 h-4 text-[#C89D66]" />
            Ready for your upcoming updates!
          </div>
        </motion.div>
      </div>
    </section>
  );
}
