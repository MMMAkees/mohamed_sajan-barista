'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BARISTA_SKILLS } from '@/data/baristaData';
import { Award, Flame, Feather, Coffee, HeartHandshake, ShieldCheck, CreditCard, Clock, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-5 h-5 text-[#C89D66]" />,
  Feather: <Feather className="w-5 h-5 text-[#C89D66]" />,
  Coffee: <Coffee className="w-5 h-5 text-[#C89D66]" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#C89D66]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#C89D66]" />,
  CreditCard: <CreditCard className="w-5 h-5 text-[#C89D66]" />,
  Clock: <Clock className="w-5 h-5 text-[#C89D66]" />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 relative z-10 bg-[#0F0906]/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18100C] border border-[#C89D66]/30 text-xs font-bold text-[#E6C594]">
            <Award className="w-3.5 h-3.5 text-[#C89D66]" />
            BARISTA CORE COMPETENCIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Specialty Skills & <span className="text-gradient-amber">Craftsmanship</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Engineered through relentless practice, daily calibration, and high-volume cafe operations.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BARISTA_SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-[#C89D66]/20 glass-panel-hover flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#2E1E16] border border-[#C89D66]/40 flex items-center justify-center">
                    {iconMap[skill.iconName] || <Sparkles className="w-5 h-5 text-[#C89D66]" />}
                  </div>
                  <span className="text-lg font-black text-[#E6C594]">{skill.percentage}%</span>
                </div>

                <h3 className="text-lg font-bold text-white leading-snug">{skill.name}</h3>
                <p className="text-xs text-stone-300 leading-relaxed">{skill.description}</p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1 pt-2">
                <div className="w-full h-2 rounded-full bg-[#18100C] overflow-hidden p-0.5 border border-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-[#C89D66] via-[#E6C594] to-yellow-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
