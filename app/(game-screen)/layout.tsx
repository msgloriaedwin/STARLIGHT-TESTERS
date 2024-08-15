'use client'

import { useEffect, useState } from 'react';
import { useBackgroundSound } from "@/utils/game-sounds/useBackgroundMusic";
import { useAuthContext } from '@/context/AuthContext';
import axios from 'axios';

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean | null>(null);
  const { user } = useAuthContext();
  const { playSound, stopSound } = useBackgroundSound({
    soundSrc: "/assets/audios/game-music.mp3",
  });
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchSoundSettings = async () => {
      if (user.access_token) {
        try {
          const response = await axios.get(`${baseUrl}game-settings/me`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
            },
          });
          const settings = response.data.data.game_settings;
          setIsSoundEnabled(settings.is_sound);
          localStorage.setItem('soundEnabled', settings.is_sound.toString());
        } catch (error) {
          console.error("Failed to fetch game settings:", error);
        }
      }
    };

    fetchSoundSettings();
  }, [user.access_token, baseUrl]);

  useEffect(() => {
    const handleUserInteraction = () => {
      const soundEnabled = localStorage.getItem('soundEnabled') === 'true';
      if (soundEnabled) {
        playSound();
      } else {
        stopSound();
      }
      window.removeEventListener('click', handleUserInteraction);
    };

    if (isSoundEnabled !== null) {
      window.addEventListener('click', handleUserInteraction);
    }

    return () => {
      window.removeEventListener('click', handleUserInteraction);
    };
  }, [isSoundEnabled, playSound, stopSound]);

  return (
    <div className="bg-body">
      {children}
    </div>
  );
}