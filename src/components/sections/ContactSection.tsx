'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Sparkles, Coffee } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/InstagramIcon';
import { BARISTA_PROFILE } from '@/data/baristaData';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Barista Hiring Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Trigger golden confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C89D66', '#E6C594', '#F4D09A', '#ffffff'],
      });
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10 bg-[#0F0906]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18100C] border border-[#C89D66]/30 text-xs font-bold text-[#E6C594]">
            <Mail className="w-3.5 h-3.5 text-[#C89D66]" />
            GET IN TOUCH FOR CAFE ROLES & COLLABORATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Hire <span className="text-gradient-amber">{BARISTA_PROFILE.shortName}</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Currently available in Doha, Qatar. Open to full-time barista roles, shift coverages, and specialty coffee consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Direct Contact Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-[#C89D66]/25 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Coffee className="w-6 h-6 text-[#C89D66]" />
                Direct Communication
              </h3>

              <div className="space-y-4">
                {/* Phone Link */}
                <a
                  href={`tel:${BARISTA_PROFILE.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#18100C]/80 border border-[#C89D66]/30 hover:border-[#C89D66] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2E1E16] border border-[#C89D66]/40 flex items-center justify-center text-[#E6C594] shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-[#C89D66]" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-medium block">Phone / Mobile</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#E6C594] transition-colors">
                      {BARISTA_PROFILE.phone}
                    </span>
                  </div>
                </a>

                {/* Email Link */}
                <a
                  href={`mailto:${BARISTA_PROFILE.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#18100C]/80 border border-[#C89D66]/30 hover:border-[#C89D66] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2E1E16] border border-[#C89D66]/40 flex items-center justify-center text-[#E6C594] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-[#C89D66]" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-stone-400 font-medium block">Direct Email</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#E6C594] transition-colors truncate block">
                      {BARISTA_PROFILE.email}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/${BARISTA_PROFILE.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#18100C]/80 border border-[#C89D66]/30 hover:border-[#C89D66] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2E1E16] border border-[#C89D66]/40 flex items-center justify-center text-[#E6C594] shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5 text-[#C89D66]" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-medium block">WhatsApp Chat</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#E6C594] transition-colors">
                      Message Sajan Directly
                    </span>
                  </div>
                </a>

                {/* Instagram Handle */}
                <a
                  href={BARISTA_PROFILE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#18100C]/80 border border-[#C89D66]/30 hover:border-[#C89D66] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2E1E16] border border-[#C89D66]/40 flex items-center justify-center text-[#E6C594] shrink-0 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5 text-[#C89D66]" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-medium block">Instagram Handle</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#E6C594] transition-colors">
                      @{BARISTA_PROFILE.instagramHandle}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Location Tag */}
            <div className="p-4 rounded-2xl bg-[#18100C] border border-[#C89D66]/30 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#C89D66] shrink-0" />
              <div className="text-xs text-stone-300">
                <span className="font-bold text-white block">Based in Doha, Qatar</span>
                Pearl-Qatar • Porto Arabia Counter Operations
              </div>
            </div>
          </motion.div>

          {/* Interactive Email Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-[#C89D66]/25 flex flex-col justify-between"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-stone-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out. Sajan will respond to your message shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#2E1E16] text-[#E6C594] font-bold text-xs border border-[#C89D66]/40 hover:bg-[#C89D66] hover:text-[#0B0705] transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Send a Direct Message</h3>
                  <p className="text-xs text-stone-400">Recruiters, cafe owners, and hospitality partners are welcome.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-300">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Cafe Manager / Hiring Lead"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#18100C] border border-[#C89D66]/30 text-white placeholder-stone-600 text-sm focus:border-[#E6C594] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-300">Your Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@cafe.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#18100C] border border-[#C89D66]/30 text-white placeholder-stone-600 text-sm focus:border-[#E6C594] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-300">Subject</label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#18100C] border border-[#C89D66]/30 text-white placeholder-stone-600 text-sm focus:border-[#E6C594] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-300">Message / Shift Inquiry</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Sajan, we would love to discuss a Barista opportunity with our specialty coffee team..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#18100C] border border-[#C89D66]/30 text-white placeholder-stone-600 text-sm focus:border-[#E6C594] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#E6C594] via-[#C89D66] to-[#A07440] text-[#0B0705] font-bold text-sm shadow-xl shadow-[#C89D66]/25 hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry Now
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
