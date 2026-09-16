'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BARISTA_VIDEOS, BaristaVideoItem } from '@/data/baristaData';
import { Video, Play, Pause, Maximize2, X, Sparkles, MapPin, Film } from 'lucide-react';

export default function BaristaVideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<BaristaVideoItem | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      // Pause all other videos
      Object.keys(videoRefs.current).forEach((vId) => {
        if (vId !== id && videoRefs.current[vId]) {
          videoRefs.current[vId]?.pause();
        }
      });
      video.play();
      setPlayingVideoId(id);
    } else {
      video.pause();
      setPlayingVideoId(null);
    }
  };

  return (
    <section id="video-showcase" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
            style={{
              background: 'var(--bg-card-solid)',
              border: '1px solid var(--border-default)',
              color: 'var(--text-accent)',
            }}
          >
            <Film className="w-3.5 h-3.5" style={{ color: 'var(--gold)' }} />
            LIVE BARISTA ACTION & MOTION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            Video <span className="text-gradient-amber">Craft Showcase</span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Watch Sajan live in action behind the specialty coffee bar at F-Mart Boutique Supermarket (Pearl-Qatar, Doha).
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BARISTA_VIDEOS.map((videoItem, index) => {
            const isPlaying = playingVideoId === videoItem.id;
            return (
              <motion.div
                key={videoItem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-panel rounded-3xl overflow-hidden glass-panel-hover flex flex-col justify-between border-2 group shadow-2xl"
                style={{ borderColor: 'var(--border-accent)' }}
              >
                {/* Video Player Container */}
                <div className="relative w-full aspect-video bg-black overflow-hidden group">
                  <video
                    ref={(el) => {
                      videoRefs.current[videoItem.id] = el;
                    }}
                    src={videoItem.videoPath}
                    poster={videoItem.poster}
                    playsInline
                    loop
                    muted
                    preload="metadata"
                    onPlay={() => setPlayingVideoId(videoItem.id)}
                    onPause={() => {
                      if (playingVideoId === videoItem.id) {
                        setPlayingVideoId(null);
                      }
                    }}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Category Badge & Fullscreen Button */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                    <span className="text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#E6C594] border border-[#C89D66]/40 shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#C89D66]" />
                      {videoItem.category}
                    </span>
                    <button
                      onClick={() => setActiveVideo(videoItem)}
                      className="w-9 h-9 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition-transform border border-white/20"
                      title="Fullscreen Video Modal"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Center Custom Play / Pause Button Overlay */}
                  <button
                    onClick={() => togglePlay(videoItem.id)}
                    className="absolute inset-0 flex items-center justify-center z-10 group/btn"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#E6C594] via-[#C89D66] to-[#A07440] text-[#0B0705] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/btn:scale-115">
                      {isPlaying ? (
                        <Pause className="w-7 h-7 fill-current" />
                      ) : (
                        <Play className="w-7 h-7 fill-current ml-1" />
                      )}
                    </div>
                  </button>
                </div>

                {/* Info Content Footer */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: 'var(--gold)' }}>
                      <MapPin className="w-3.5 h-3.5" />
                      {videoItem.location}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#E6C594] transition-colors">
                      {videoItem.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {videoItem.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                    style={{ borderColor: 'var(--border-default)', color: 'var(--text-accent)' }}
                  >
                    <span className="flex items-center gap-1.5">
                      <Video className="w-4 h-4 text-[#C89D66]" />
                      Full HD Barista Reel
                    </span>
                    <button
                      onClick={() => setActiveVideo(videoItem)}
                      className="text-xs font-bold transition-all hover:underline"
                      style={{ color: 'var(--gold-bright)' }}
                    >
                      Watch Theater Mode →
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Theater Mode Fullscreen Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden shadow-2xl border-2"
              style={{ borderColor: 'var(--border-accent)' }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-black transition-colors border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Video Player */}
              <div className="relative w-full aspect-video bg-black">
                <video
                  src={activeVideo.videoPath}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Video Info Bar */}
              <div className="p-6 bg-[#120B08] space-y-2 border-t border-[#C89D66]/30">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-extrabold tracking-wider px-3 py-0.5 rounded-full bg-[#C89D66]/20 text-[#E6C594]">
                    {activeVideo.category}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">• {activeVideo.location}</span>
                </div>
                <h4 className="text-2xl font-bold text-white">{activeVideo.title}</h4>
                <p className="text-xs text-[#C4B8AB] leading-relaxed">{activeVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
