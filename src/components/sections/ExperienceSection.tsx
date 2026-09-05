'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WORK_EXPERIENCES } from '@/data/baristaData';
import { Briefcase, MapPin, Calendar, CheckCircle, Building2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
            style={{ background: 'var(--bg-card-solid)', border: '1px solid var(--border-default)', color: 'var(--text-accent)' }}
          >
            <Briefcase className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
            CAREER TIMELINE & SPECIALTY ROLES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            Professional <span className="text-gradient-amber">Experience</span>
          </h2>
          <p className="text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>
            Proven track record of managing high-volume coffee counters and delivering exceptional customer experiences.
          </p>
        </div>

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
                className={`relative flex flex-col sm:flex-row items-center gap-8 ${isEven ? 'sm:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl flex items-center justify-center z-20 shadow-xl"
                  style={{ background: 'var(--bg-primary)', border: '2px solid var(--gold)', color: 'var(--text-accent)' }}
                >
                  <Building2 className="w-5 h-5" />
                </div>

                <div className="w-full sm:w-[calc(50%-3rem)] pl-20 sm:pl-0">
                  <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl space-y-5">
                    <div className="space-y-2 pb-4" style={{ borderBottom: '1px solid var(--border-default)' }}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-extrabold px-3 py-1 rounded-full flex items-center gap-1.5"
                          style={{ background: 'rgba(200, 157, 102, 0.15)', color: 'var(--text-accent)', border: '1px solid var(--border-default)' }}
                        >
                          <Calendar className="w-3 h-3" style={{ color: 'var(--gold)' }} />
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                            style={{ background: 'rgba(200, 157, 102, 0.15)', color: 'var(--gold)', border: '1px solid var(--border-default)' }}
                          >
                            Present Position
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-black" style={{ color: 'var(--text-primary)' }}>{exp.role}</h3>
                      <h4 className="text-base font-bold" style={{ color: 'var(--text-accent)' }}>{exp.company}</h4>
                      <div className="text-xs flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                        <MapPin className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-xs italic p-3 rounded-xl"
                      style={{ color: 'var(--text-accent)', background: 'var(--bg-card-solid)', border: '1px solid var(--border-default)' }}
                    >
                      &ldquo;{exp.tagline}&rdquo;
                    </p>

                    <div className="space-y-2.5">
                      <h5 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>Key Impact & Duties:</h5>
                      <ul className="space-y-2 text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-2" style={{ borderTop: '1px solid var(--border-default)' }}>
                      {exp.skillsUsed.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-1 rounded-lg text-[11px] font-medium"
                          style={{ background: 'var(--bg-elevated)', color: 'var(--text-accent)', border: '1px solid var(--border-default)' }}
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
