'use client'
import { useBackgroundSound } from "@/utils/game-sounds/useBackgroundMusic";
import {useEffect} from 'react';
import { usePathname } from "next/navigation";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const { playSound, stopSound } = useBackgroundSound({
    soundSrc: '/assets/audios/game-music.mp3',
    enabled: true,
  });

  useEffect(() => {

      if (pathname === '/create-game' || pathname === '/join') {
        playSound();
      } else {
        stopSound();
      }

    return () => {
      stopSound()
    };
  }, [pathname, playSound, stopSound]);
  
  return (
    <html lang="en">
      <body>
        <div className="bg-body">
          {children}
        </div>
      </body>
    </html>
  );
}
