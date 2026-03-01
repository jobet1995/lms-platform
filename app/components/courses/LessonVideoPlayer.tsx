'use client';

import React, { useState } from 'react';
import { Play, CheckCircle2, Volume2, Maximize, Settings } from 'lucide-react';

interface LessonVideoPlayerProps {
  videoTitle: string;
  thumbnailUrl?: string;
  isCompleted?: boolean;
  onComplete?: () => void;
}

const LessonVideoPlayer: React.FC<LessonVideoPlayerProps> = ({
  videoTitle,
  thumbnailUrl,
  isCompleted = false,
  onComplete,
}) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate progress when "playing"
  const handlePlay = () => {
    setPlaying(true);
    // Animate progress bar
    let p = 0;
    const iv = setInterval(() => {
      p += 0.5;
      setProgress(p);
      if (p >= 100) {
        clearInterval(iv);
        setPlaying(false);
        onComplete?.();
      }
    }, 100);
  };

  return (
    <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden group shadow-2xl">
      {/* Thumbnail / poster */}
      {thumbnailUrl && !playing && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnailUrl}
          alt={videoTitle}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Dark overlay when not playing */}
      {!playing && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <button
            onClick={handlePlay}
            aria-label="Play lesson"
            className="flex items-center justify-center w-20 h-20 rounded-full bg-white/95 text-primary shadow-2xl hover:scale-110 transition-transform"
          >
            <Play className="h-9 w-9 fill-current ml-1" />
          </button>
        </div>
      )}

      {/* Playing state: dark bg + simulated animation */}
      {playing && (
        <div className="absolute inset-0 bg-gradient-to-br from-neutral via-neutral/90 to-primary/20 flex items-center justify-center">
          <div className="text-white/30 text-center">
            <div className="text-6xl mb-3 animate-pulse">▶</div>
            <p className="text-sm font-medium">{videoTitle}</p>
          </div>
        </div>
      )}

      {/* Completion badge */}
      {isCompleted && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/90 text-white text-xs font-bold backdrop-blur-sm">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Completed
        </div>
      )}

      {/* Controls bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Progress */}
        <div className="w-full h-1 bg-white/20 rounded-full mb-3 cursor-pointer">
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        {/* Buttons row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={playing ? undefined : handlePlay}
              className="text-white hover:text-primary transition-colors"
              aria-label={playing ? 'Pause' : 'Play'}
            >
              <Play className="h-4 w-4 fill-current" />
            </button>
            <Volume2 className="h-4 w-4 text-white/70" />
            <span className="text-white/60 text-xs">0:00</span>
          </div>
          <div className="flex items-center gap-3">
            <Settings className="h-4 w-4 text-white/70" />
            <Maximize className="h-4 w-4 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonVideoPlayer;
