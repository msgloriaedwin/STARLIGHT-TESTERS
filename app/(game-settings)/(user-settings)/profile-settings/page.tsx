'use client';


import { Button } from '@/components/ui/button';
import React, { useState, useEffect,useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";
import axios from 'axios';
import ChangeAvatar from '../change-avatar/page';
import { useToast } from "@/components/ui/use-toast"
import axiosInstance from '@/app/config/AxiosIntance';

interface ApiResponse<T> {
  data: T;
}

interface UserDetails {
  username: string | null;
  email: string | null;
}

interface PasswordForm {
  oldPassword: string;
  newPassword: string;
}

const UserSettings: React.FC = () => {
  const t = useTranslations('userSettings'); 
  const { toast } = useToast()
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [showChangeAvatar, setShowChangeAvatar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
   const [localImageURL, setLocalImageURL] = useState<string | null>(null);
  const imageURLRef = useRef<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<UserDetails>();

  
  const { register: registerPassword, handleSubmit: handleSubmitPassword, formState: { errors: passwordErrors } } = useForm<PasswordForm>();

  const fetchUserDetails = async () => {
    try {
      const response = await axiosInstance.get<ApiResponse<UserDetails>>('/user/settings');
      setUserDetails(response.data.data);
      reset(response?.data.data);
    // console.log('user data',response?.data)
      
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  useEffect(() => {
   
    fetchUserDetails();
  }, [reset]); 

  
const onUpdateProfile = async (data: UserDetails) => {
  setIsLoading(true); 
  try {
    
    if (data.username && data.username !== userDetails?.username) {
      const response = await axiosInstance.post('/settings/change-username', {
        newUsername: data.username,
      });
      toast({
        title: "Username updated successfully"
      })
      return response.data;
      
    }

   
    if (data.email && data.email !== userDetails?.email) {
      
      const emailChangeResponse = await axiosInstance.post('/settings/change-email', {
        newEmail: data.email,
      });
      console.log(emailChangeResponse)
      
      const token = emailChangeResponse?.data?.token;

  
      const verificationResponse = await axios.get(`https://api.staging.remote.bingo/api/v1/settings/verify-email?token=${token}`);

      if (verificationResponse.status === 201 || verificationResponse.status === 200) {
        toast({
          title: "Email verified and updated successfully"
        })
        console.log('Email verified and updated successfully:', verificationResponse);
      } else {
        toast({
          title: "Email verification failed. Please input a correct email"
        })
        
      }
    }

  } catch (error) {
    toast({
      title: "Error updating profile. Please try again"
    })
    console.error('Error updating profile:', error);
  } finally {
    setIsLoading(false); 
  }
};


  
  const onUpdatePassword = async (data: PasswordForm) => {
    try {
      const response = await axiosInstance.post('/settings/change-password', {
        currentPassword: data.oldPassword,
        newPassword: data.newPassword,
      });
      
      console.log('Password updated successfully:', response.data);
    } catch (error) {
      toast({
        title: "Password updated successfully"
      })
      console.error('Error updating password:', error);
    }
  };
  
  useEffect(() => {
    const savedAvatar = localStorage.getItem('selectedAvatar');
    if (savedAvatar) {
      imageURLRef.current = savedAvatar;
      setLocalImageURL(savedAvatar);
  
      
    }
  }, []);
  
  if (showChangeAvatar) return <ChangeAvatar />;
 

  return (
    <div className="px-6 pt-16 bg-[#F7EEE7]">
    <h1 className="text-4xl text-primary-700 mb-3">{t('title')}</h1>
    
    <Tabs defaultValue="profile" className="max-w-[800px] ">
      <TabsList className='rounded-md px-3 !py-3 bg-[#F8EDD3] text-primary-700 mt-5 mx-auto'>
        <TabsTrigger value="profile" className='data-[state=active]:!shadow-custom-inset data-[state=active]:bg-primary-700 data-[state=active]:text-primary-50'>
          Profile
        </TabsTrigger>
        <TabsTrigger value="password" className='data-[state=active]:!shadow-custom-inset data-[state=active]:bg-primary-700 data-[state=active]:text-primary-50'>
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div className="flex gap-6 items-center my-5">
        <div className="w-[94px] h-[94px] rounded-full">
          <Image
            width={94}
            height={94}
            src={`${localImageURL !== undefined ? `https://api.staging.remote.bingo/avatars/${localImageURL} ` : "/pfp1.jpeg" }` }
            alt="Remote Bingo"
            className="h-[94px] bg-primary-100 object-contain rounded-full"
          />
        </div>
        <Button
          variant="secondary"
          onClick={() => setShowChangeAvatar(true)}
          className="border-[#00a8e8] text-primary-100 hover:bg-[#00a8e8] hover:text-white"
        >
          {t('changeAvatarButton')}
        </Button>
        </div>
       <form onSubmit={handleSubmit(onUpdateProfile)} className="max-w-[411px] mx-auto space-y-3">
          <div>
            <label>Username</label>
            <input className="shadow appearance-none bg-[#FFFDFD] border border-primary-900 rounded w-full py-2 px-3 text-neutral-600 leading-tight focus:outline-none focus:shadow-outline" {...register('username', { required: 'Username is required' })} defaultValue={userDetails?.username || ''} />
            {errors?.username && <span className="text-red-500 text-sm p-0 m-0">{errors?.username?.message}</span>}
          </div>
          <div>
            <label>Email</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Invalid email format',
                },
              })}
              className="shadow appearance-none bg-[#FFFDFD] border border-primary-900 rounded w-full py-2 px-3 text-neutral-600 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue={userDetails?.email || ''}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <Button type="submit" className='!mt-6'>{isLoading ? 'Updating...' : 'Update Profile'}</Button>
        </form>
      </TabsContent>

      <TabsContent value="password">
        <div className="flex gap-6 items-center my-5">
        <div className="w-[94px] h-[94px] rounded-full">
          <Image
            width={94}
            height={94}
            src={`${localImageURL !== undefined ? `https://api.staging.remote.bingo/avatars/${localImageURL} ` : "/pfp1.jpeg" }` }
            alt="Remote Bingo"
            className="h-[94px] bg-primary-100 object-contain rounded-full"
          />
        </div>
        <Button
          variant="secondary"
          onClick={() => setShowChangeAvatar(true)}
          className="border-[#00a8e8] text-primary-100 hover:bg-[#00a8e8] hover:text-white"
        >
          {t('changeAvatarButton')}
        </Button>
        </div>
       <form onSubmit={handleSubmitPassword(onUpdatePassword)} className="max-w-[411px] mx-auto space-y-3">
          <div>
            <label>Old Password</label>
            <input type="password" className="shadow appearance-none bg-[#FFFDFD] border border-primary-900 rounded w-full py-2 px-3 text-neutral-600 leading-tight focus:outline-none focus:shadow-outline" {...registerPassword('oldPassword', { required: 'Old password is required' })} />
            {passwordErrors.oldPassword && <span>{passwordErrors.oldPassword.message}</span>}
          </div>
          <div>
            <label>New Password</label>
            <input type="password" className="shadow appearance-none bg-[#FFFDFD] border border-primary-900 rounded w-full py-2 px-3 text-neutral-600 leading-tight focus:outline-none focus:shadow-outline" {...registerPassword('newPassword', { required: 'New password is required' })} />
            {passwordErrors.newPassword && <span>{passwordErrors.newPassword.message}</span>}
          </div>
          <Button type="submit" className='!mt-6'>Update Password</Button>
       
        </form>
      </TabsContent>
     
      </Tabs>
    </div>
  );
};

export default UserSettings;
