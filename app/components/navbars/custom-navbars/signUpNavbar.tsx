import React from 'react'
import Image from 'next/image'
import logo from '../asset/bingo_logo.png'
import user from '../asset/user.png'
import Navbar from '../Navbar'
import { Menu } from 'lucide-react'

type PageProps = {
  onLogin: () => void;
  handleHowToPlayClick: () => void;
  handleShowMenu: () => void;
}

const SignUpNavbar = ({ onLogin, handleHowToPlayClick, handleShowMenu }: PageProps) => {

  return (
    <Navbar className='justify-between'>
      <div className='flex md:hidden'>
        <Image src={user} alt='user' />
      </div>
      <div>
        <Image className='w-[131px] h-[46.48px]' src={logo} alt='Remote Bingo' />
      </div>
      <div className='flex gap-6 items-center'>
        <p onClick={() => handleHowToPlayClick()} className='text-textColor-main cursor-pointer hidden md:flex'>How to play</p>
        <button onClick={() => onLogin()} className='bg-button-main hidden md:flex shadow-custom-inset px-4 py-2 rounded-[8px] text-white'>Login</button>
        <button onClick={() => handleShowMenu()} className='bg-button-dark-blue flex md:hidden shadow-custom-inset px-4 py-[10px] rounded-[8px] text-white'>
          <Menu />
        </button>
      </div>
    </Navbar>
  )
}



export default SignUpNavbar