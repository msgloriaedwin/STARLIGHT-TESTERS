"use client"

import CustomButton from '@/app/components/button/custombutton'
import FormCard from '@/app/components/formcard/formCard'
import RBInput from '@/app/components/input'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import ForgotPasswordNavbar from "@/app/components/navbars/custom-navbars/ForgotPasswordNavbar";


const ForgotPassword = () => {

    const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('resetEmail', email);
    router.push('/auth/forgot-password/otp');
  };
  return (
    <>
    <ForgotPasswordNavbar/>
    <div className="bg-body flex flex-col h-screen justify-center items-center">
        <div className="mb-6">
            <p className='text-2xl md:text-4xl mb-3'>Forgot Password?</p>
            <p className='text-sm md:text-lg'>Enter your Email to receive a code</p>
        </div>
        <FormCard size='lg'>
        <form onSubmit={handleSubmit} className='space-y-4'>
            <RBInput
              label='Enter Email'
              placeholder='Your Email'
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className='border border-[#C5C5C5] shadow-md shadow-[#C5C5C5] p-5'
            />
            <CustomButton size={"lg"} className='w-full p-6' type='submit'>
              Reset password
            </CustomButton>
          </form>
            <Link href={'/auth/login'} className='text-[#00222E] underline flex justify-center mt-10'>Back to sign in</Link>
        </FormCard>
    </div>
    </>
  )
}

export default ForgotPassword