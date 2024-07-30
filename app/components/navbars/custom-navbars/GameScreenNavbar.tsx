import React from 'react'
import { ArrowLeft, ChevronDown, UserRound } from 'lucide-react'
import Navbar from '../Navbar'

const GameScreenNavbar = () => {
    return (
        <Navbar className='justify-between'>
            <div className='flex items-center gap-4'>
                <button className='flex items-center border rounded-[8px] gap-[.5em] border-black justify-center py-2 px-4 outline-1'>
                    <span><ArrowLeft /></span>
                    <span>Back</span>
                </button>
            </div>
            <div className='flex items-center gap-4'>
                <button className='flex items-center bg-[#00A8E8] gap-2 rounded-[8px] gap[.5em] text-white justify-center py-[10px] px-4 outline-1'>
                    <span><UserRound /></span>
                    <span>User101</span>
                    <span><ChevronDown /></span>
                </button>
            </div>
        </Navbar>
    )
}

export default GameScreenNavbar
