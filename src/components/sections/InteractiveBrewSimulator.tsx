'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Flame, Sliders, Volume2, VolumeX, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';
import { SIGNATURE_BREWS, SignatureBrew } from '@/data/baristaData';

export default function InteractiveBrewSimulator() {
  const [selectedBrew, setSelectedBrew] = useState<SignatureBrew>(SIGNATURE_BREWS[0]);
  const [dose, setDose] = useState<number>(18.5);
  const [yieldAmount, setYieldAmount] = useState<number>(37);
  const [temperature, setTemperature] = useState<number>(93);
  const [audioPlaying, setAudioPlaying] = useState<boolean>(false);

  // Audio Synth for ambient espresso extraction sound
  useEffect(() => {
    let audioCtx: AudioContext | null = null;
    let noiseNode: AudioNode | null = null;

    if (audioPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtx = new AudioContextClass();
        const bufferSize = audioCtx.sampleRate * 2;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = audioCtx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 800;
        filter.Q.value = 3;

        const gain = audioCtx.createGain();
        gain.gain.value = 0.05;

        whiteNoise.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        whiteNoise.start();
        noiseNode = whiteNoise;
      } catch (err) {
        console.error('Audio initialization error:', err);
      }
    }

    return () => {
      if (audioCtx) {
        audioCtx.close();
      }
    };
  }, [audioPlaying]);

  // Extraction math ratios
  const ratio = (yieldAmount / (dose || 1)).toFixed(2);
  let statusText = 'Perfect Golden Balance';
  let statusColor = 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40';

  const numRatio = parseFloat(ratio);
  if (numRatio < 1.7) {
    statusText = 'Under-Extracted (Intense Sourness)';
    statusColor = 'text-amber-400 border-amber-500/40 bg-amber-950/40';
  } else if (numRatio > 2.3) {
    statusText = 'Over-Extracted (Astringent Bitterness)';
    statusColor = 'text-rose-400 border-rose-500/40 bg-rose-950/40';
  }

  // Calculate dynamic flavor bars
  const sweetness = Math.min(100, Math.max(30, Math.round(100 - Math.abs(numRatio - 2.0) * 80)));
  const body = Math.min(100, Math.max(20, Math.round(100 - (numRatio - 1.5) * 35)));
  const aroma = Math.min(100, Math.max(40, Math.round(temperature * 1.05 - 5)));

  return (
    <section id="brew-simulator" className="py-24 px-4 relative z-10 bg-[#0F0906]/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18100C] border border-[#C89D66]/30 text-xs font-bold text-[#E6C594]">
            <Sliders className="w-3.5 h-3.5 text-[#C89D66]" />
            INTERACTIVE EXPERIMENTAL BARISTA LAB
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Espresso Calibration <span className="text-gradient-amber">Simulator</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Adjust Sajan's real-world barista brewing parameters (Dose, Yield, Temp) and observe live flavor extraction metrics.
          </p>
        </div>

        {/* Brew Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {SIGNATURE_BREWS.map((brew) => (
            <button
              key={brew.id}
              onClick={() => {
                setSelectedBrew(brew);
                if (brew.category === 'Espresso') {
                  setDose(18.5);
                  setYieldAmount(37);
                  setTemperature(93);
                } else if (brew.category === 'Milk Coffee') {
                  setDose(19.0);
                  setYieldAmount(38);
                  setTemperature(93);
                } else {
                  setDose(15.0);
                  setYieldAmount(225);
                  setTemperature(92);
                }
              }}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                selectedBrew.id === brew.id
                  ? 'bg-gradient-to-r from-[#E6C594] to-[#C89D66] text-[#0B0705] border-[#E6C594] shadow-lg shadow-[#C89D66]/25'
                  : 'bg-[#18100C]/80 text-stone-300 border-white/10 hover:border-[#C89D66]/40 hover:text-white'
              }`}
            >
              <Coffee className="w-4 h-4" />
              {brew.name}
            </button>
          ))}
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Sliders Panel */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-[#C89D66]/20 space-y-6 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedBrew.name}</h3>
                <span className="text-xs text-[#C89D66] font-semibold">{selectedBrew.category} Calibration</span>
              </div>
              <button
                onClick={() => setAudioPlaying(!audioPlaying)}
                className={`p-3 rounded-xl border transition-all flex items-center gap-2 text-xs font-bold ${
                  audioPlaying
                    ? 'bg-[#C89D66] text-[#0B0705] border-[#E6C594]'
                    : 'bg-[#18100C] text-[#E6C594] border-[#C89D66]/30 hover:border-[#C89D66]'
                }`}
                title="Toggle Ambient Espresso Machine Sound"
              >
                {audioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                {audioPlaying ? 'Sound Active' : 'Play Barista Sound'}
              </button>
            </div>

            {/* Slider 1: Dose */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-stone-300">Coffee Dose (Grind Weight)</span>
                <span className="text-[#E6C594] font-bold">{dose} g</span>
              </div>
              <input
                type="range"
                min="12"
                max="22"
                step="0.5"
                value={dose}
                onChange={(e) => setDose(parseFloat(e.target.value))}
                className="w-full h-2 rounded-lg bg-[#18100C] accent-[#C89D66] cursor-pointer"
              />
            </div>

            {/* Slider 2: Yield */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-stone-300">Liquid Yield</span>
                <span className="text-[#E6C594] font-bold">{yieldAmount} g</span>
              </div>
              <input
                type="range"
                min="20"
                max={selectedBrew.category === 'Manual Brew' ? 300 : 60}
                step={selectedBrew.category === 'Manual Brew' ? 5 : 1}
                value={yieldAmount}
                onChange={(e) => setYieldAmount(parseFloat(e.target.value))}
                className="w-full h-2 rounded-lg bg-[#18100C] accent-[#C89D66] cursor-pointer"
              />
            </div>

            {/* Slider 3: Water Temp */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-stone-300">Water Brew Temperature</span>
                <span className="text-[#E6C594] font-bold">{temperature} °C</span>
              </div>
              <input
                type="range"
                min="88"
                max="97"
                step="0.5"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full h-2 rounded-lg bg-[#18100C] accent-[#C89D66] cursor-pointer"
              />
            </div>

            {/* Brew Details */}
            <div className="p-4 rounded-2xl bg-[#18100C]/80 border border-[#C89D66]/30 space-y-1.5 text-xs text-stone-300">
              <div className="font-bold text-[#E6C594]">Recipe Notes:</div>
              <p>{selectedBrew.description}</p>
            </div>
          </div>

          {/* Real-time Extraction Results Panel */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-[#C89D66]/20 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#C89D66]" />
                  Live Extraction Meter
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-[#C89D66]/20 text-[#E6C594] font-bold border border-[#C89D66]/40">
                  Ratio 1 : {ratio}
                </span>
              </div>

              {/* Status Badge */}
              <div className={`p-4 rounded-2xl border text-center text-sm font-bold flex items-center justify-center gap-2 ${statusColor}`}>
                <Sparkles className="w-4 h-4 shrink-0" />
                {statusText}
              </div>

              {/* Flavor Profile Bars */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-stone-300 font-semibold">
                    <span>Sweetness & Caramelization</span>
                    <span className="text-[#E6C594]">{sweetness}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#18100C] overflow-hidden p-0.5 border border-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 to-[#E6C594] transition-all duration-500"
                      style={{ width: `${sweetness}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-stone-300 font-semibold">
                    <span>Body & Mouthfeel (Tactile)</span>
                    <span className="text-[#E6C594]">{body}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#18100C] overflow-hidden p-0.5 border border-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-orange-600 to-amber-400 transition-all duration-500"
                      style={{ width: `${body}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-stone-300 font-semibold">
                    <span>Aroma & Flavor Complexity</span>
                    <span className="text-[#E6C594]">{aroma}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#18100C] overflow-hidden p-0.5 border border-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#C89D66] to-yellow-300 transition-all duration-500"
                      style={{ width: `${aroma}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tasting Notes Tags */}
            <div className="space-y-2 pt-4 border-t border-white/10">
              <span className="text-xs text-stone-400 font-semibold block">Tasting Notes Profile:</span>
              <div className="flex flex-wrap gap-2">
                {selectedBrew.tastingNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-[#2E1E16] text-[#E6C594] text-xs font-semibold border border-[#C89D66]/30 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#C89D66]" />
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
