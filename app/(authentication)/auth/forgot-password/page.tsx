"use client"

import CustomButton from '@/app/components/shared/button/custombutton'
import FormCard from '@/app/components/shared/formcard/formCard'
import RBInput from '@/app/components/shared/input'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/components/shared/navbars/Navbar'
import { useTranslations } from 'next-intl';


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();
    const t = useTranslations('forgotPassword');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) {
            setError(true);
            return;
        }
        localStorage.setItem('resetEmail', email);
        router.push('/auth/forgot-password/otp');
    };

    return (
        <>
        <Navbar />
        <div className="bg-body flex flex-col h-screen justify-center items-center">
            <div className="mb-6">
                <p className='text-2xl md:text-4xl mb-3'>{t('title')}</p>
                <p className='text-sm md:text-lg'>{t('description')}</p>
            </div>
            <FormCard size='lg'>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <RBInput
                    label={t('enterEmailLabel')}
                    placeholder={t('enterEmailPlaceholder')}
                    type="email" 
                    value={email} 
                    onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
                        setEmail(e.target.value);
                        setError(false);
                    }} 
                    className={`border p-5 ${error ? 'border-red-500' : 'border-[#C5C5C5]'}`}
                />
                <CustomButton size={"lg"} className='w-full p-6 text-base md:text-lg' type='submit'>
                {t('resetPasswordButton')}
                </CustomButton>
                </form>
                <Link href={'/auth/login'} className='text-[#00222E] text-base md:text-lg underline flex justify-center mt-10'>{t('backToSignIn')}</Link>
            </FormCard>
        </div>
        </>
    )
}

export default ForgotPassword
