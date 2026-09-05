'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_LIST, CERTIFICATIONS_LIST } from '@/data/baristaData';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
            style={{
              background: 'var(--bg-card-solid)',
              border: '1px solid var(--border-default)',
              color: 'var(--text-accent)',
            }}
          >
            <GraduationCap className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
            QUALIFICATIONS & VERIFIED CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            Education & <span className="text-gradient-amber">Certifications</span>
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Formally certified in specialty barista skills, HACCP / ISO 22000 food safety standards, and secondary academic education.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
            <Award className="w-5 h-5" style={{ color: 'var(--gold)' }} />
            Professional Certifications
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS_LIST.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl space-y-5 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Badge */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shrink-0"
                    style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', color: 'var(--gold)' }}
                  >
                    {cert.id === 'haccp-cert' ? (
                      <ShieldCheck className="w-6 h-6 text-[#C89D66]" />
                    ) : (
                      <Award className="w-6 h-6 text-[#C89D66]" />
                    )}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide border uppercase"
                    style={{
                      background: 'rgba(200, 157, 102, 0.15)',
                      borderColor: 'var(--border-accent)',
                      color: 'var(--gold-bright)',
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {cert.title}
                  </h3>
                  <div className="text-sm font-semibold flex items-center gap-1.5" style={{ color: 'var(--text-accent)' }}>
                    {cert.institution}
                  </div>
                  {cert.studentNo && (
                    <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                      Student No: {cert.studentNo} • {cert.duration}
                    </div>
                  )}
                  <p className="text-xs leading-relaxed pt-1" style={{ color: 'var(--text-secondary)' }}>
                    {cert.description}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="pt-2 border-t flex flex-wrap gap-2" style={{ borderColor: 'var(--border-default)' }}>
                  {cert.skillsCovered.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-semibold flex items-center gap-1"
                      style={{ background: 'var(--bg-elevated)', color: 'var(--text-accent)' }}
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#C89D66]" />
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 text-xs font-bold font-mono opacity-20" style={{ color: 'var(--gold)' }}>
                  {cert.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Education */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-2 font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
            <GraduationCap className="w-5 h-5" style={{ color: 'var(--gold)' }} />
            Academic Education
          </div>

          <div className="grid grid-cols-1 gap-6">
            {EDUCATION_LIST.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shrink-0"
                    style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', color: 'var(--gold)' }}
                  >
                    <GraduationCap className="w-6 h-6 text-[#C89D66]" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h3>
                    <div className="text-sm font-medium flex items-center gap-2" style={{ color: 'var(--text-accent)' }}>
                      <span>{edu.institution}</span>
                      <span className="w-1 h-1 rounded-full bg-[#C89D66]" />
                      <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <MapPin className="w-3 h-3" /> {edu.location}
                      </span>
                    </div>
                    <p className="text-xs pt-1" style={{ color: 'var(--text-secondary)' }}>
                      {edu.description}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-2xl font-mono text-sm font-bold border shrink-0 flex items-center gap-1.5"
                  style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border-default)', color: 'var(--gold-bright)' }}
                >
                  <Calendar className="w-4 h-4 text-[#C89D66]" />
                  Year {edu.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
