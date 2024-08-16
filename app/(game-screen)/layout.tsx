"use client";

import { useEffect, useState } from "react";
import { useBackgroundSound } from "@/utils/game-sounds/useBackgroundMusic";
import { useAuthContext } from "@/context/AuthContext";
import axios from "axios";

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
          localStorage.setItem("gameSettings", JSON.stringify(settings));

          if (settings.is_sound) {
            playSound();
          } else {
            stopSound();
          }
        } catch (error) {
          console.error("Failed to fetch game settings:", error);
        }
      }
    };

    fetchSoundSettings();
  }, [user.access_token, baseUrl, playSound, stopSound]);

  useEffect(() => {
    const handleUserInteraction = () => {
      const gameSettings = JSON.parse(
        localStorage.getItem("gameSettings") || "{}"
      );
      const soundEnabled = gameSettings.is_sound;
      if (soundEnabled) {
        playSound();
      } else {
        stopSound();
      }
      window.removeEventListener("click", handleUserInteraction);
    };

    if (isSoundEnabled !== null) {
      window.addEventListener("click", handleUserInteraction);
    }

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, [isSoundEnabled, playSound, stopSound]);

  useEffect(() => {
    const handleStorageChange = () => {
      const gameSettings = JSON.parse(
        localStorage.getItem("gameSettings") || "{}"
      );
      setIsSoundEnabled(gameSettings.is_sound);
      if (gameSettings.is_sound) {
        playSound();
      } else {
        stopSound();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [playSound, stopSound]);

  return <div className='bg-body'>{children}</div>;
}
