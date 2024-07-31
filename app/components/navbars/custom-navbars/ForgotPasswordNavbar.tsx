import React from 'react'
import Image from 'next/image'
import logo from '../asset/bingo_logo.png'
import user from '../asset/user.png'
import Navbar from '../Navbar'
import { Menu } from 'lucide-react'

type ForgotPasswordNavbarProps = {
    className?: string,
    onLogin: () => void,
    handleShowMenu: () => void;
}
//NB: You can pass a className prop to this component to customize it so it serves use purpose for both forgot and rest password
//You can center the items with justify-content to whichever position u want
const ForgotPasswordNavbar = ({ className, onLogin, handleShowMenu }: ForgotPasswordNavbarProps) => {
    return (
        <div className='w-full'>
            <Navbar className={`${className} md:flex hidden items-center  justify-between gap-6 w-full md:px-20 px-6 py-6 bg-[#fffdfd]`}>
                <span className='text-textColor-main'>How to play</span>
                <button onClick={() => onLogin()} className='bg-button-main shadow-custom-inset px-4 py-2 rounded-[8px] text-white'>Login</button>
            </Navbar>
            <Navbar className='flex md:hidden items-center justify-between w-full bg-[#fffdfd] px-6 md:px-20 py-6'>
                <div className='flex md:hidden'>
                    <Image src={user} alt='user' />
                </div>
                <div>
                    <Image className='w-[131px] h-[46.48px]' src={logo} alt='Remote Bingo' />
                </div>
                <div className='flex gap-6 items-center'>
                    <p className='text-textColor-main cursor-pointer hidden md:flex'>How to play</p>
                    <button onClick={() => handleShowMenu()} className='bg-button-dark-blue shadow-custom-inset px-4 py-[10px] rounded-[8px] text-white'>
                        <Menu />
                    </button>
                </div>
            </Navbar>
        </div>

    )
}

export default ForgotPasswordNavbar