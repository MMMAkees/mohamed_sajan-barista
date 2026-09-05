'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WORK_EXPERIENCES } from '@/data/baristaData';
import { Briefcase, MapPin, Calendar, CheckCircle, Sparkles, Building2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18100C] border border-[#C89D66]/30 text-xs font-bold text-[#E6C594]">
            <Briefcase className="w-3.5 h-3.5 text-[#C89D66]" />
            CAREER TIMELINE & SPECIALTY ROLES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Professional <span className="text-gradient-amber">Experience</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Proven track record of managing high-volume coffee counters, maintaining equipment precision, and delivering exceptional customer experiences.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-10 relative before:absolute before:inset-0 before:left-8 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-gradient-to-b before:from-[#C89D66] before:via-[#784A28]/40 before:to-transparent">
          {WORK_EXPERIENCES.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Dot Icon */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-[#0B0705] border-2 border-[#C89D66] flex items-center justify-center text-[#E6C594] z-20 shadow-xl shadow-[#C89D66]/20">
                  <Building2 className="w-5 h-5" />
                </div>

                {/* Content Card */}
                <div className="w-full sm:w-[calc(50%-3rem)] pl-20 sm:pl-0">
                  <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#C89D66]/25 space-y-5 glass-panel-hover">
                    {/* Role Header */}
                    <div className="space-y-2 border-b border-white/10 pb-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#C89D66]/20 text-[#E6C594] border border-[#C89D66]/40 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-[#C89D66]" />
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/40">
                            Present Position
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                      <h4 className="text-base font-bold text-[#E6C594] flex items-center gap-2">
                        {exp.company}
                      </h4>
                      <div className="text-xs text-stone-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C89D66]" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs text-[#E6C594] italic bg-[#18100C] p-3 rounded-xl border border-[#C89D66]/20">
                      "{exp.tagline}"
                    </p>

                    {/* Key Responsibilities List */}
                    <div className="space-y-2.5">
                      <h5 className="text-xs font-bold text-stone-300 uppercase tracking-wider">Key Impact & Duties:</h5>
                      <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle className="w-4 h-4 text-[#C89D66] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skill Tags */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                      {exp.skillsUsed.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-[#2E1E16] text-[#E6C594] text-[11px] font-medium border border-[#C89D66]/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
