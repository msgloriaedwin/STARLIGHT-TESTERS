import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown, User } from "lucide-react";
import Image from 'next/image'

export default function SettingsHeader () {
  return (
  <header className="hidden w-full text-[#00658B] text-sm py-4 px-8 lg:px-16 md:flex items-center justify-between "style={{ background: 'linear-gradient(181deg, #F7EEE7 0.47%, #F9E9A3 277.67%, #FD0 438.32%)'}}>
      <Button variant='outline' className="text-foreground !bg-transparent !border-[#00658B] !text-[#00658B] font-normal flex items-center justify-center gap-x-1 !px-3"><ArrowLeft size={16} />Back</Button>
      <ul className="flex items-center gap-x-7">
        <li>How to play</li>
        <div className="flex items-center gap-x-4">
        <button style={{boxShadow: '2px 2px 0px 0px rgba(255, 255, 255, 0.40) inset, -4px -4px 0px 0px rgba(0, 0, 0, 0.32) inset'}} className="!bg-[#00658B] !text-sm rounded-lg h-10 px-2 text-white   flex items-center gap-x-2"><User size={16}/>Friends <ChevronDown size={16} /></button>

         <Button variant='outline' className="text-foreground !bg-transparent !border-[#00658B] !text-[#00658B]  !px-2">
         <Image src='/icons/notification.svg' width={20} height={20} alt='notification' className="object-contain w-5 h-5"/></Button></div>
      </ul>
    </header>
  )
}