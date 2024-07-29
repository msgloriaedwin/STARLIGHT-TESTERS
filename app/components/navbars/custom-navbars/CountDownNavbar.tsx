import Image from 'next/image'
import logo from '../asset/bingo_logo.png'
import bell from '../asset/notification-bing.png'
import user from '../asset/user.png'
import { ChevronDown, Menu, UserRound } from 'lucide-react'
import Navbar from '../Navbar'


const CountDownNavbar = () => {
  return (
    <Navbar className='flex items-center justify-between w-full bg-[#fffdfd] px-6 md:px-20 py-6'>
      <div className='flex md:hidden'>
        <Image src={user} alt='user' />
      </div>
      <div>
        <Image className='w-[131px] h-[46.48px]' src={logo} alt='Remote Bingo' />
      </div>
      <div className='hidden gap-6 items-center md:flex'>
        <p className='text-[#2196F3] hidden md:flex'>How to play</p>
        <div className='flex items-center flex-row-reverse gap-4'>
          <button className='flex items-center border rounded-[8px] gap-[.5em] border-[#00658B] text-[#00658B] justify-center p-2 outline-1'>
            <Image src={bell} alt='bell' />
          </button>
          <button className='flex items-center gap-1 bg-[#00658B] rounded-[8px] gap[.5em] text-[#D5F3FF] justify-center py-[10px] px-4 outline-1'>
            <span><UserRound /></span>
            <span>User101</span>
            <span><ChevronDown /></span>
          </button>
        </div>
      </div>
      <button className='flex md:hidden items-center bg-[#00658B] border rounded-[8px] gap-[.5em] border-[#00658B] text-white justify-center p-2 outline-1'>
        <Menu />
      </button>
    </Navbar>
  )
}

export default CountDownNavbar
