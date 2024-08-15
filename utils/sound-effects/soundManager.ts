export const playSound = (soundFile: string) => {
    const audio = new Audio(`/sounds/${soundFile}`);
    audio.play().catch(error => {
      console.error("Error playing sound:", error);
    });
  };



