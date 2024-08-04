import React from 'react'
import Image from 'next/image'
import logo from '../asset/bingo_logo.png'
import user from '../asset/user.png'
import Navbar from '../Navbar'
import { Menu } from 'lucide-react'

type PageProps = {
    onLogin: () => void;
    onSignup: () => void;
    handleHowToPlayClick: () => void;
    handleShowMenu: () => void;
}

const LandingPageNavbar = ({onLogin, onSignup, handleHowToPlayClick, handleShowMenu}: PageProps) => {
    return (
        <Navbar className='justify-between py-6 md:px-20 px-4 flex items-center w-full md:bg-[#fffdfd]'>
            <div className=' hidden md:hidden justify-between items-center w-full bg-transparent md:bg-[#fffdfd] px-6 md:px-20 py-6'>
                <Image src={user} alt='user' />
            </div>
            <div>
                <Image className='w-[131px] h-[46.48px]' src={logo} alt='Remote Bingo' />
            </div>
            <div className='md:flex hidden gap-6 items-center'>
                <p onClick={handleHowToPlayClick} className='text-textColor-main cursor-pointer hidden md:flex'>How to play</p>
                <div className='flex gap-4 items-center'>
                    <button onClick={() => onLogin()} className='bg-[#FAD02C] shadow-custom-inset text-white py-2 px-4 rounded-[8px]'>Login</button>
                    <button onClick={() => onSignup()} className='bg-[#00658B] shadow-custom-inset text-white py-2 px-4 rounded-[8px]'>Signup</button>
                </div>
            </div>
            <button onClick={() => handleShowMenu()} className='flex md:hidden items-center bg-button-dark-blue shadow-custom-inset border rounded-[8px] gap-[.5em] text-white justify-center py-[10px] px-4 outline-1'>
                <Menu />
            </button>
        </Navbar>
    )
}



export default LandingPageNavbar