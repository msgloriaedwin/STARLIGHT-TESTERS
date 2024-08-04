import Image from 'next/image'
import logo from '../asset/bingo_logo.png'
import bell from '../asset/notification-bing.png'
import user from '../asset/user.png'
import { ArrowLeft, ChevronDown, ChevronUp, Link, Menu, UserRound } from 'lucide-react'
import Navbar from '../Navbar'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const AlphabethGameScreenNavbar = ({ handleShareGameLink }: { handleShareGameLink: () => void }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [showFriends, setShowFriends] = useState(false);
  const router = useRouter()
  const handleShowMenu = () => {
    menuIsOpen === false ? setMenuIsOpen(true) : setMenuIsOpen(false);
  };
  const handleHowToPlayClick = () => {
    //handle form display
    console.log('clicked how to play');
  }
  const handleDisplayFriends = () => {
    setShowFriends(!showFriends);
  }
  return (
    <div className='w-full'>
      <Navbar className='flex fixed top-0 left-0 z-[999] bg-body justify-between'>
        <div className='flex md:hidden justify-between items-center bg-transparent md:bg-[#fffdfd]'>
          <Image src={user} alt='user' />
        </div>
        {menuIsOpen === false ? <button onClick={() => handleShareGameLink()} className='flex md:hidden items-center shadow-custom-inset bg-button-light-main rounded-[8px] gap-2 text-extra-small text-black justify-center py-[12px] px-4'>
          <span>Share game link</span>
          <span><Link size={'14px'} /></span>
        </button> : ''}
        <div className='md:flex hidden items-center gap-4'>
          <button onClick={() => router.back()} className='flex items-center border rounded-[8px] gap-[.5em] border-textColor-main justify-center py-2 px-4 outline-1'>
            <span><ArrowLeft color='#00658b ' /></span>
            <span className='text-textColor-main'>Back</span>
          </button>
        </div>
        <div className='md:flex hidden gap-6 items-center'>
          <button onClick={() => handleShareGameLink()} className='md:flex hidden items-center shadow-custom-inset bg-button-light-main rounded-[8px] gap-2 text-small text-black justify-center py-2 px-4'>
            <span>Share game link</span>
            <span><Link size={'14px'} /></span>
          </button>
          <div className='flex flex-col gap-1 relative'>
            <button onClick={handleDisplayFriends} className='flex relative items-center gap-1 bg-[#00658B] shadow-custom-inset rounded-[8px] gap[.5em] text-[#D5F3FF] justify-center py-[10px] px-4 outline-1'>
              <span><UserRound /></span>
              <span>Friends</span>
              <span>{showFriends === true ? <ChevronUp /> : <ChevronDown />}</span>
            </button>
            {showFriends ? <ul className='flex absolute -bottom-[360%] z-[1000] w-[200%] bg-white rounded-xl right-0 flex-col p-4 gap-4'>
              <li className='text-textColor-main'>Friend 1</li>
              <li className='text-textColor-main'>Friend 2</li>
              <li className='text-textColor-main'>Friend 3</li>
            </ul> : ''}
          </div>
        </div>
        <button onClick={(e) => {
          e.preventDefault()
          handleShowMenu()
        }} className='flex md:hidden shadow-custom-inset items-center bg-[#00658B] border rounded-[8px] gap-[.5em] border-[#00658B] text-white justify-center py-[12px] md:py-[10px] px-4 outline-1'>
          <Menu />
        </button>
      </Navbar>
      {menuIsOpen === true ? <ul className='w-[100%] z-[995] md:hidden fixed top-[85px] flex gap-4 pt-[50px] flex-col min-h-[90vh] bg-white p-4 rounded-lg'>
        <div className='flex flex-col gap-4'>
          <p onClick={handleHowToPlayClick} className='text-textColor-main self-center cursor-pointer flex'>How to play</p>
          <div className='flex flex-col gap-4 relative'>
            <button onClick={handleDisplayFriends} className='flex relative items-center gap-1 bg-[#00658B] shadow-custom-inset rounded-[8px] gap[.5em] text-[#D5F3FF] justify-center py-[10px] px-4 outline-1'>
              <span><UserRound /></span>
              <span>Friends</span>
              <span>{showFriends === true ? <ChevronUp /> : <ChevronDown />}</span>
            </button>
            {showFriends ? <ul className='flex w-[100%] shadow-md bg-white rounded-lg right-0 flex-col p-4 gap-4'>
              <li className='text-textColor-main'>Friend 1</li>
              <li className='text-textColor-main'>Friend 2</li>
              <li className='text-textColor-main'>Friend 3</li>
            </ul> : ''}
          </div>
          <button onClick={() => router.push('/game-settings')} className='flex items-center shadow-custom-inset bg-button-light-main rounded-[8px] gap-2 text-small text-black justify-center py-2 px-4'>
            Settings
          </button>
          <button onClick={() => handleShareGameLink()} className='flex items-center shadow-custom-inset bg-button-light-main rounded-[8px] gap-2 text-small text-black justify-center py-2 px-4'>
            <span>Share game link</span>
            <span><Link size={'14px'} /></span>
          </button>
        </div>
      </ul> : ''}
    </div>
  )
}

export default AlphabethGameScreenNavbar
