import React from 'react'
import Image from 'next/image'
import logo from '../asset/bingo_logo.png'
import user from '../asset/user.png'
import Navbar from '../Navbar'


const SignUpNavbar = () => {
  
  return (
    <Navbar className='justify-between'>
      <div className='flex md:hidden'>
        <Image src={user} alt='user' />
      </div>
      <div>
        <Image className='w-[131px] h-[46.48px]' src={logo} alt='Remote Bingo' />
      </div>
      <div className='flex gap-6 items-center'>
       <p className='text-[#2196F3] hidden md:flex'>How to play</p>
       <button>Login</button>
      </div>
    </Navbar>
  )
}



export default SignUpNavbar