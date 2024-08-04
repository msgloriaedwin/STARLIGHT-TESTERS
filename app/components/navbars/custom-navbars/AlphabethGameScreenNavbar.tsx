import Image from 'next/image'
import logo from '../asset/bingo_logo.png'
import bell from '../asset/notification-bing.png'
import user from '../asset/user.png'
import { ArrowLeft, ChevronDown, Link, Menu, UserRound } from 'lucide-react'
import Navbar from '../Navbar'

type PageProps = {
  handleShowMenu: () => void;
  handleGoBack: () => void;
  handleShareGameLink: () => void;
  handleDisplayFriends: () => void;
}



const AlphabethGameScreenNavbar = ({handleDisplayFriends, handleGoBack, handleShareGameLink, handleShowMenu}: PageProps) => {
  return (
    <Navbar className='flex justify-between'>
      <div className='flex md:hidden justify-between items-center bg-transparent md:bg-[#fffdfd]'>
        <Image src={user} alt='user' />
      </div>
      <button onClick={() => handleShareGameLink()} className='flex md:hidden items-center shadow-custom-inset bg-button-light-main rounded-[8px] gap-2 text-extra-small text-black justify-center py-[12px] px-4'>
        <span>Share game link</span>
        <span><Link size={'14px'} /></span>
      </button>
      <div className='md:flex hidden items-center gap-4'>
        <button onClick={() => handleShowMenu()} className='flex items-center border rounded-[8px] gap-[.5em] border-textColor-main justify-center py-2 px-4 outline-1'>
          <span><ArrowLeft color='#00658b ' /></span>
          <span className='text-textColor-main'>Back</span>
        </button>
      </div>
      <div className='md:flex hidden gap-6 items-center'>
        <button onClick={() => handleShareGameLink()} className='md:flex hidden items-center shadow-custom-inset bg-button-light-main rounded-[8px] gap-2 text-small text-black justify-center py-2 px-4'>
          <span>Share game link</span>
          <span><Link size={'14px'} /></span>
        </button>
        <button onClick={() => handleDisplayFriends()} className='flex items-center gap-1 bg-[#00658B] shadow-custom-inset rounded-[8px] gap[.5em] text-[#D5F3FF] justify-center py-[10px] px-4 outline-1'>
          <span><UserRound /></span>
          <span>Friends</span>
          <span><ChevronDown /></span>
        </button>
      </div>
      <button onClick={() => handleShowMenu()} className='flex md:hidden shadow-custom-inset items-center bg-[#00658B] border rounded-[8px] gap-[.5em] border-[#00658B] text-white justify-center py-[12px] md:py-[10px] px-4 outline-1'>
        <Menu />
      </button>
    </Navbar>
  )
}

export default AlphabethGameScreenNavbar
