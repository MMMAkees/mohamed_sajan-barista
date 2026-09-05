'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BARISTA_SKILLS } from '@/data/baristaData';
import { Award, Flame, Feather, Coffee, HeartHandshake, ShieldCheck, CreditCard, Clock, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-5 h-5" />,
  Feather: <Feather className="w-5 h-5" />,
  Coffee: <Coffee className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  CreditCard: <CreditCard className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 relative z-10" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
            style={{ background: 'var(--bg-card-solid)', border: '1px solid var(--border-default)', color: 'var(--text-accent)' }}
          >
            <Award className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
            BARISTA CORE COMPETENCIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            Specialty Skills & <span className="text-gradient-amber">Craftsmanship</span>
          </h2>
          <p className="text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>
            Engineered through relentless practice, daily calibration, and high-volume cafe operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BARISTA_SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                    style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', color: 'var(--gold)' }}
                  >
                    {iconMap[skill.iconName] || <Sparkles className="w-5 h-5" />}
                  </div>
                  <span className="text-lg font-black" style={{ color: 'var(--text-accent)' }}>{skill.percentage}%</span>
                </div>
                <h3 className="text-lg font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>{skill.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{skill.description}</p>
              </div>

              <div className="space-y-1 pt-2">
                <div className="w-full h-2 rounded-full overflow-hidden p-0.5"
                  style={{ background: 'var(--bg-card-solid)', border: '1px solid var(--border-default)' }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-[#C89D66] via-[#E6C594] to-[#F4D09A]"
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
