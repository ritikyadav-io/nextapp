"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

export default function BgmPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.15); // low volume by default to prevent ear blast
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const schedulerTimerRef = useRef<number | null>(null);
  const currentBeatRef = useRef(0);
  const nextNoteTimeRef = useRef(0.0);

  // Synthwave track settings
  const tempo = 112; // BPM
  const secondsPerBeat = 60.0 / tempo;
  const tickLength = secondsPerBeat / 2; // 8th notes

  // Synthwave harmonic chords (G minor, Eb major, Bb major, F major)
  const padChords = [
    [98.0, 116.54, 146.83, 196.0], // Gm
    [77.78, 116.54, 155.56, 196.0], // Eb
    [116.54, 146.83, 174.61, 233.08], // Bb
    [87.31, 130.81, 174.61, 261.63], // F
  ];

  // Synthwave bassline notes (8th notes)
  const bassNotes = [
    49.0, 49.0, 49.0, 49.0, 49.0, 49.0, 49.0, 49.0, // G1
    38.89, 38.89, 38.89, 38.89, 38.89, 38.89, 38.89, 38.89, // Eb1
    58.27, 58.27, 58.27, 58.27, 58.27, 58.27, 58.27, 58.27, // Bb1
    43.65, 43.65, 43.65, 43.65, 43.65, 43.65, 43.65, 43.65  // F1
  ];

  const initializeAudio = () => {
    if (audioCtxRef.current) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContextClass();
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(volume, ctx.currentTime);
    masterGain.connect(ctx.destination);
    
    audioCtxRef.current = ctx;
    masterGainRef.current = masterGain;
  };

  const playBassNote = (freq: number, time: number) => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    
    // Fat analog sub oscillator
    const osc = audioCtxRef.current.createOscillator();
    const gain = audioCtxRef.current.createGain();
    
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(freq, time);
    
    // Low pass filter to make it fat and warm, not buzzy
    const lp = audioCtxRef.current.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.setValueAtTime(180, time);
    
    // Sharp synth decay envelope
    gain.gain.setValueAtTime(0.3, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + tickLength * 0.95);
    
    osc.connect(lp);
    lp.connect(gain);
    gain.connect(masterGainRef.current);
    
    osc.start(time);
    osc.stop(time + tickLength);
  };

  const playHiHat = (time: number) => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    
    // White noise generator for analog hi-hat
    const bufferSize = audioCtxRef.current.sampleRate * 0.05;
    const buffer = audioCtxRef.current.createBuffer(1, bufferSize, audioCtxRef.current.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioCtxRef.current.createBufferSource();
    noise.buffer = buffer;
    
    const hp = audioCtxRef.current.createBiquadFilter();
    hp.type = "highpass";
    hp.frequency.setValueAtTime(8000, time);
    
    const gain = audioCtxRef.current.createGain();
    gain.gain.setValueAtTime(0.04, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.04);
    
    noise.connect(hp);
    hp.connect(gain);
    gain.connect(masterGainRef.current);
    
    noise.start(time);
    noise.stop(time + 0.05);
  };

  const playPadChords = (frequencies: number[], time: number, duration: number) => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    
    // Swept pad voices
    frequencies.forEach((freq) => {
      const osc = audioCtxRef.current!.createOscillator();
      const gain = audioCtxRef.current!.createGain();
      const filter = audioCtxRef.current!.createBiquadFilter();
      
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, time);
      
      // Slow sweeps
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(300, time);
      filter.frequency.exponentialRampToValueAtTime(800, time + duration / 2);
      filter.frequency.exponentialRampToValueAtTime(300, time + duration);
      
      // Slow release pad envelope
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.08, time + 0.5);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGainRef.current!);
      
      osc.start(time);
      osc.stop(time + duration);
    });
  };

  const scheduleNextNotes = () => {
    if (!audioCtxRef.current) return;
    
    while (nextNoteTimeRef.current < audioCtxRef.current.currentTime + 0.1) {
      const currentBeat = currentBeatRef.current;
      const time = nextNoteTimeRef.current;
      
      // 1. Play active 8th notes bassline
      const bassFreq = bassNotes[currentBeat % bassNotes.length];
      playBassNote(bassFreq, time);
      
      // 2. Play offbeat tech hihat (odd beats)
      if (currentBeat % 2 === 1) {
        playHiHat(time);
      }
      
      // 3. Play deep chords at the start of every bar (16 beats)
      if (currentBeat % 16 === 0) {
        const chordIndex = Math.floor(currentBeat / 16) % padChords.length;
        playPadChords(padChords[chordIndex], time, secondsPerBeat * 8);
      }
      
      nextNoteTimeRef.current += tickLength;
      currentBeatRef.current++;
    }
  };

  const startLoop = () => {
    initializeAudio();
    if (audioCtxRef.current?.state === "suspended") {
      audioCtxRef.current.resume();
    }
    
    nextNoteTimeRef.current = audioCtxRef.current!.currentTime + 0.05;
    
    const interval = 50; // ms
    const runScheduler = () => {
      scheduleNextNotes();
      schedulerTimerRef.current = window.setTimeout(runScheduler, interval);
    };
    runScheduler();
  };

  const stopLoop = () => {
    if (schedulerTimerRef.current) {
      clearTimeout(schedulerTimerRef.current);
      schedulerTimerRef.current = null;
    }
  };

  const toggleSoundtrack = () => {
    if (isPlaying) {
      stopLoop();
      setIsPlaying(false);
    } else {
      startLoop();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      stopLoop();
    };
  }, []);

  return (
    <div className="flex items-center gap-4 bg-luxury-charcoal/80 backdrop-blur-md px-4 py-2 border border-luxury-gold/10 pointer-events-auto rounded-none shadow-[0_4px_20px_rgba(255,255,255,0.05)]">
      {/* Equalizer animation */}
      <div className="flex gap-1.5 items-end h-4 w-7">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`w-[3px] bg-luxury-gold transition-all duration-300 ${
              isPlaying 
                ? "animate-pulse" 
                : "h-[3px]"
            }`}
            style={{
              height: isPlaying ? `${Math.floor(Math.random() * 12) + 4}px` : "3px",
              animationDelay: `${i * 0.1}s`,
              animationDuration: "0.5s"
            }}
          />
        ))}
      </div>

      <button
        onClick={toggleSoundtrack}
        className="flex items-center gap-2 font-barlow text-xs font-black tracking-normal text-luxury-gold hover:text-luxury-ivory transition-colors duration-200 uppercase"
        aria-label={isPlaying ? "Pause ambient soundtrack" : "Play ambient soundtrack"}
      >
        {isPlaying ? (
          <>
            <Pause className="w-3.5 h-3.5" />
            <span>SOUNDTRACK ACTIVE</span>
          </>
        ) : (
          <>
            <Play className="w-3.5 h-3.5" />
            <span>PLAY SOUNDTRACK</span>
          </>
        )}
      </button>

      {/* Basic Volume Trigger */}
      {isPlaying && (
        <button
          onClick={() => setVolume(volume === 0 ? 0.15 : 0)}
          className="text-luxury-gold/60 hover:text-luxury-gold transition-colors duration-200"
          aria-label="Toggle mute"
        >
          {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      )}
    </div>
  );
}
