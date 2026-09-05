'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Coffee, Download, FileText, Loader2, AlertCircle } from 'lucide-react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${BARISTA_PROFILE.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _subject: `[Barista Portfolio] ${formState.subject}`,
          message: formState.message,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (response.ok) {
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
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMsg(data.message || 'Form submit service unavailable. Please click below to send via your email client.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setErrorMsg('Could not reach form server. Please send directly using your email app below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
            style={{ background: 'var(--bg-card-solid)', border: '1px solid var(--border-default)', color: 'var(--text-accent)' }}
          >
            <Mail className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
            GET IN TOUCH FOR CAFE ROLES & COLLABORATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            Hire <span className="text-gradient-amber">{BARISTA_PROFILE.shortName}</span>
          </h2>
          <p className="text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>
            Currently available in Doha, Qatar. Open to full-time barista roles, shift coverages, and specialty coffee consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel p-8 rounded-3xl flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <Coffee className="w-6 h-6" style={{ color: 'var(--gold)' }} />
                Direct Communication
              </h3>

              {/* Featured CV Download Card */}
              <a
                href="/Sajan_Mohammed_CV.pdf"
                download="Sajan_Mohammed_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl border-2 transition-all hover:scale-[1.02] shadow-xl group"
                style={{
                  background: 'linear-gradient(135deg, rgba(200, 157, 102, 0.2), rgba(120, 74, 40, 0.15))',
                  borderColor: 'var(--gold)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#0B0705] bg-gradient-to-r from-[#E6C594] to-[#C89D66] font-bold shadow-md">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider block" style={{ color: 'var(--gold-bright)' }}>
                      Official Curriculum Vitae
                    </span>
                    <span className="text-sm font-bold block" style={{ color: 'var(--text-primary)' }}>
                      Download CV (PDF Format)
                    </span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:translate-y-0.5"
                  style={{ background: 'var(--gold)', color: '#0B0705' }}
                >
                  <Download className="w-4 h-4" />
                </div>
              </a>

              <div className="space-y-4">
                {[
                  { href: `tel:${BARISTA_PROFILE.phone}`, icon: <Phone className="w-5 h-5" />, label: 'Phone / Mobile', value: BARISTA_PROFILE.phone },
                  { href: `mailto:${BARISTA_PROFILE.email}`, icon: <Mail className="w-5 h-5" />, label: 'Direct Email', value: BARISTA_PROFILE.email },
                  { href: `https://wa.me/${BARISTA_PROFILE.phone.replace(/[^0-9]/g, '')}`, icon: <MessageSquare className="w-5 h-5" />, label: 'WhatsApp Chat', value: 'Message Sajan Directly', external: true },
                  { href: BARISTA_PROFILE.instagramUrl, icon: <InstagramIcon className="w-5 h-5" />, label: 'Instagram Handle', value: `@${BARISTA_PROFILE.instagramHandle}`, external: true },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all group hover:opacity-80"
                    style={{ background: 'var(--bg-card-solid)', border: '1px solid var(--border-default)' }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform"
                      style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', color: 'var(--gold)' }}
                    >
                      {item.icon}
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-xs font-medium block" style={{ color: 'var(--text-muted)' }}>{item.label}</span>
                      <span className="text-sm font-bold truncate block" style={{ color: 'var(--text-primary)' }}>
                        {item.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl flex items-center gap-3"
              style={{ background: 'var(--bg-card-solid)', border: '1px solid var(--border-default)' }}
            >
              <MapPin className="w-5 h-5 shrink-0" style={{ color: 'var(--gold)' }} />
              <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                <span className="font-bold block" style={{ color: 'var(--text-primary)' }}>Based in Doha, Qatar</span>
                Pearl-Qatar • Porto Arabia Counter Operations
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl flex flex-col justify-between"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: 'rgba(200, 157, 102, 0.15)', border: '2px solid var(--gold)', color: 'var(--gold)' }}
                >
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Message Sent Successfully!</h3>
                <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Thank you for reaching out. Sajan will respond to your message shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs transition-all hover:opacity-80"
                  style={{ background: 'var(--bg-elevated)', color: 'var(--text-accent)', border: '1px solid var(--border-default)' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Send a Direct Message</h3>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Recruiters, cafe owners, and hospitality partners are welcome.</p>
                </div>

                {errorMsg && (
                  <div className="p-4 rounded-xl text-xs space-y-2 border border-red-500/30 bg-red-500/10 text-red-300">
                    <div className="flex items-center gap-2 font-bold text-red-400">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                    <a
                      href={`mailto:${BARISTA_PROFILE.email}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-xs font-bold transition-all"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Click here to send via Email App directly
                    </a>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold" style={{ color: 'var(--text-secondary)' }}>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Cafe Manager"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
                      style={{ background: 'var(--input-bg)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold" style={{ color: 'var(--text-secondary)' }}>Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@cafe.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
                      style={{ background: 'var(--input-bg)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold" style={{ color: 'var(--text-secondary)' }}>Subject</label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
                    style={{ background: 'var(--input-bg)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold" style={{ color: 'var(--text-secondary)' }}>Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Sajan, we would love to discuss a Barista opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-colors"
                    style={{ background: 'var(--input-bg)', border: '1px solid var(--border-default)', color: 'var(--text-primary)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#E6C594] via-[#C89D66] to-[#A07440] text-[#0B0705] font-bold text-sm shadow-xl shadow-[#C89D66]/25 hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Inquiry Now
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
