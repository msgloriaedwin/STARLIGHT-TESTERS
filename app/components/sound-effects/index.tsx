import React, { useState, useEffect } from 'react';
import {Volume2,VolumeX} from 'lucide-react';



const BackgroundMusic = ({ toggleMusic = true, handleToggleMusic }: { toggleMusic: boolean; handleToggleMusic: () => void }) => {
 
  return (

     <div className='text-primary-700' onClick={handleToggleMusic}>{toggleMusic ? <Volume2 /> : <VolumeX />}</div>
  );
};

export default BackgroundMusic;
