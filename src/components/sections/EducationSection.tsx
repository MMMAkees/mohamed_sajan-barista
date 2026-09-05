'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Edit3 } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
            style={{ background: 'var(--bg-card-solid)', border: '1px solid var(--border-default)', color: 'var(--text-accent)' }}
          >
            <GraduationCap className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
            ACADEMIC BACKGROUND & CERTIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            Education & <span className="text-gradient-amber">Qualifications</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl text-center space-y-4 relative overflow-hidden"
          style={{ borderStyle: 'dashed' }}
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg"
            style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', color: 'var(--text-accent)' }}
          >
            <GraduationCap className="w-8 h-8" />
          </div>

          <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Education Details — To Be Updated</h3>
          <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            This section is currently reserved for educational qualifications, barista certifications (SCA / Barista Guild), and training coursework.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold"
            style={{ background: 'var(--bg-card-solid)', border: '1px solid var(--border-default)', color: 'var(--text-accent)' }}
          >
            <Edit3 className="w-4 h-4" style={{ color: 'var(--gold)' }} />
            Ready for your upcoming updates!
          </div>
        </motion.div>
      </div>
    </section>
  );
}
