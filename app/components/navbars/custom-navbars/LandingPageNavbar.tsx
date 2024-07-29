import React from 'react'
import Image from 'next/image'
import logo from '../asset/bingo_logo.png'
import user from '../asset/user.png'
import Navbar from '../Navbar'
import { Menu } from 'lucide-react'


const LandingPageNavbar = () => {
    return (
        <div className='justify-between py-6 md:px-20 px-6 flex items-center w-full md:bg-[#fffdfd]'>
            <div className=' hidden md:hidden justify-between items-center w-full bg-transparent md:bg-[#fffdfd] px-6 md:px-20 py-6'>
                <Image src={user} alt='user' />
            </div>
            <div>
                <Image className='w-[131px] h-[46.48px]' src={logo} alt='Remote Bingo' />
            </div>
            <div className='md:flex hidden gap-6 items-center'>
                <p className='text-[#2196F3] hidden md:flex'>How to play</p>
                <div className='flex gap-4 items-center'>
                    <button className='bg-[#FAD02C] text-white py-2 px-4 rounded-[8px]'>Login</button>
                    <button className='bg-[#00658B] text-white py-2 px-4 rounded-[8px]'>Signup</button>
                </div>
            </div>
            <button className='flex md:hidden items-center bg-[#00658B] border rounded-[8px] gap-[.5em] border-[#00658B] text-white justify-center p-2 outline-1'>
                <Menu />
            </button>
        </div>
    )
}



export default LandingPageNavbar