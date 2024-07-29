import { ArrowLeft, ChevronDown, UserRound } from 'lucide-react'
import React from 'react'
import Navbar from '../Navbar'

const CardSelectionNavbar = () => {
    return (
        <Navbar className='justify-between'>
            <div className='flex items-center gap-4'>
                <button className='flex items-center border rounded-[8px] gap-[.5em] border-black justify-center py-2 px-4 outline-1'>
                    <span><ArrowLeft /></span>
                    <span>Back</span>
                </button>
            </div>
            <h3 className='text-2xl font-bold'>889-234</h3>
            <div className='flex items-center gap-4'>
                <button className='flex items-center bg-[#00658B] rounded-[8px] gap[.5em] text-white justify-center py-[10px] px-4 outline-1'>
                    <span>Copy Link</span>
                    <span></span>
                </button>
                <button className='flex items-center bg-[#00A8E8] rounded-[8px] gap[.5em] text-white justify-center py-[10px] px-4 outline-1'>
                    <span><UserRound /></span>
                    <span>User101</span>
                    <span><ChevronDown /></span>
                </button>
            </div>
        </Navbar>
    )
}

export default CardSelectionNavbar
