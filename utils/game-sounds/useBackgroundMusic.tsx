import { useState, useEffect, useCallback, useRef } from 'react';
import { Howl } from 'howler';

interface UseBackgroundSoundProps {
  soundSrc: string;
  enabled: boolean;
}

export const useBackgroundSound = ({ soundSrc }: { soundSrc: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    const gameSettings = JSON.parse(localStorage.getItem('gameSettings') || '{}');
    const enabled = gameSettings.is_sound;
    if (enabled && !soundRef.current) {
      soundRef.current = new Howl({
        src: [soundSrc],
        loop: true,
        volume: 1.0,
        autoplay: false,
      });
    }
    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current = null;
      }
    };
  }, [soundSrc]);

  const playSound = useCallback(() => {
    const gameSettings = JSON.parse(localStorage.getItem('gameSettings') || '{}');
    const enabled = gameSettings.is_sound;
    if (enabled && soundRef.current && !isPlaying) {
      soundRef.current.play();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const stopSound = useCallback(() => {
    if (soundRef.current && isPlaying) {
      soundRef.current.pause();
      setIsPlaying(false);
    }
  }, [isPlaying]);

  return { isPlaying, playSound, stopSound };
};