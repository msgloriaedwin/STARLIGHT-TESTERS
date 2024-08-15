"use client"

import { ArrowLeft, ChevronDown, User } from "lucide-react";
import CustomButton from "../shared/button/custombutton";
import { useRouter} from "next/navigation";

export default function SettingsHeader () {
  const router = useRouter()

  return (
  <header className="hidden fixed w-full text-[#00658B] text-sm py-4 px-8 md:px-20 md:flex z-50 items-center justify-between "style={{ background: 'linear-gradient(181deg, #F7EEE7 0.47%, #F9E9A3 277.67%, #FD0 438.32%)'}}>
      <CustomButton variant='outline' className="text-foreground !bg-transparent !border-[#00658B] !text-[#00658B] font-normal flex items-center justify-center gap-x-1 !px-3"><ArrowLeft size={16} onClick={() => router.back()} />Back</CustomButton>
      <ul className="flex items-center gap-x-7">
        <li>How to play</li>
        <div className="flex items-center gap-x-4">
        <button style={{boxShadow: '2px 2px 0px 0px rgba(255, 255, 255, 0.40) inset, -4px -4px 0px 0px rgba(0, 0, 0, 0.32) inset'}} className="!bg-[#00658B] !text-sm rounded-lg h-10 px-2 text-white   flex items-center gap-x-2"><User size={16}/>Friends <ChevronDown size={16} /></button>

         <CustomButton variant='outline'>
           ?
        </CustomButton></div>
      </ul>
    </header>
  )
}