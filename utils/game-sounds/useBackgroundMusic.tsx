'use client'
import { useState, useEffect, useCallback, useRef } from 'react';
import { Howl } from 'howler';
import { usePathname } from 'next/navigation';

interface UseBackgroundSoundProps {
  soundSrc: any;
  enabled: boolean;
}

export const useBackgroundSound = ({ soundSrc, enabled }: UseBackgroundSoundProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Howl | null>(null);
  

  useEffect(() => {
    const savedIsPlaying = localStorage.getItem('isPlaying') === 'true';
    const savedSoundSrc = localStorage.getItem('soundSrc');
 
    if (enabled && (!soundRef.current || savedSoundSrc !== soundSrc)) {
      soundRef.current = new Howl({
        src: [soundSrc],
        loop: true,
        volume: 1.0,
        autoplay: savedIsPlaying,
      });
      localStorage.setItem('soundSrc', soundSrc);
    }

    setIsPlaying(savedIsPlaying);

    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current = null;
      }
    };
  }, [enabled, soundSrc]);

  useEffect(() => {
    const savedIsPlaying = localStorage.getItem('isPlaying') === 'true';
    const savedSoundSrc = localStorage.getItem('soundSrc');

    if (enabled && (!soundRef.current || savedSoundSrc !== soundSrc)) {
      soundRef.current = new Howl({
        src: [soundSrc],
        loop: true,
        volume: 1.0,
        autoplay: savedIsPlaying,
      });
      localStorage.setItem('soundSrc', soundSrc);
    }

    setIsPlaying(savedIsPlaying);

    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current = null;
      }
    };
  }, [enabled, soundSrc]);


  const playSound = useCallback(() => {
    if (enabled && soundRef.current && !isPlaying) {
      soundRef.current.play();
      setIsPlaying(true);
      localStorage.setItem('isPlaying', 'true');
    }
  }, [enabled, isPlaying]);

  const stopSound = useCallback(() => {
    if (soundRef.current && isPlaying) {
      soundRef.current.pause(); 
      setIsPlaying(false);
      localStorage.setItem('isPlaying', 'false');
    }
  }, [isPlaying]);

  const toggleSound = useCallback(() => {
    if (isPlaying) {
      stopSound();
    } else {
      playSound();
    }
  }, [isPlaying, playSound, stopSound]);

  const changeSound = useCallback((newSoundSrc: any) => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.unload();
    }
    soundRef.current = new Howl({
      src: [newSoundSrc],
      loop: true,
      volume: 1.0,
      autoplay: isPlaying,
    });
    localStorage.setItem('soundSrc', newSoundSrc);
  }, [isPlaying]);

  return { isPlaying, playSound, stopSound, toggleSound, changeSound };
};