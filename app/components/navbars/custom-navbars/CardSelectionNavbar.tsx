import { ArrowLeft, ChevronDown, Copy, Link, Menu, UserRound } from 'lucide-react'
import bell from '../asset/notification-bing.png'
import React from 'react'
import Navbar from '../Navbar'
import Image from 'next/image'
import hand from '../asset/hand.png'
import user from '../asset/user.png'


const CardSelectionNavbar = () => {
    return (
        <Navbar className='flex justify-between'>
            <div className='flex md:hidden justify-between items-center w-full bg-transparent md:bg-[#fffdfd]'>
                <Image src={user} alt='user' />
            </div>
            <div className='md:flex hidden items-center gap-4'>
                <button className='flex items-center border rounded-[8px] gap-[.5em] border-[#5F5F5F] justify-center py-2 px-4 outline-1'>
                    <span><ArrowLeft color='#5F5F5F' /></span>
                    <span className='text-[#5F5F5F]'>Back</span>
                </button>
            </div>
            <div className='lg:flex hidden gap-6 items-center'>
                <div className='flex gap-4 items-center'>
                    <div className='flex flex-col gap-2 items-center'>
                        <span className='text-[14px]'>Got friends?</span>
                        <span className='text-md'>The merrier, the more</span>
                    </div>
                    <Image src={hand} alt='hand' />
                </div>
                <button className='flex items-center shadow-[inset_2px_2px_0px_0px_rgba(255,255,255,0.4),_inset_-4px_-4px_0px_0px_rgba(0,0,0,0.32)] bg-[#FFEB66] rounded-[8px] gap-2 text-[14px] text-black justify-center py-2 px-4'>
                    <span>Share game link</span>
                    <span><Link size={'14px'} /></span>
                </button>
            </div>
            <div className='md:flex hidden items-center flex-row-reverse gap-4'>
                <button className='flex items-center border rounded-[8px] gap-[.5em] border-[#00658B] text-[#00658B] justify-center p-2 outline-1'>
                    <Image src={bell} alt='bell' />
                </button>
                <button className='flex items-center gap-1 bg-[#00658B] shadow-[inset_2px_2px_0px_0px_rgba(255,255,255,0.4),_inset_-4px_-4px_0px_0px_rgba(0,0,0,0.32)] rounded-[8px] gap[.5em] text-[#D5F3FF] justify-center py-[10px] px-4 outline-1'>
                    <span><UserRound /></span>
                    <span>User101</span>
                    <span><ChevronDown /></span>
                </button>
            </div>
            <button className='flex md:hidden shadow-[inset_2px_2px_0px_0px_rgba(255,255,255,0.4),_inset_-4px_-4px_0px_0px_rgba(0,0,0,0.32)] items-center bg-[#00658B] border rounded-[8px] gap-[.5em] border-[#00658B] text-white justify-center p-2 outline-1'>
                <Menu />
            </button>
        </Navbar>
    )
}

export default CardSelectionNavbar
