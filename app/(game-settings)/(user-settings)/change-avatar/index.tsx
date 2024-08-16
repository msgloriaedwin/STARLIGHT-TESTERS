"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Modal from "@/app/components/modal/modal";
import { useTranslations } from 'next-intl';
import useAvatars from "@/utils/getAvatars";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

function Index() {
  const { avatars, loading } = useAvatars();
  const route = useRouter();
  const { toast } = useToast()
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [imageError, setImageError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations('changeAvatar');

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (selectedImage === null) {
      setImageError(t('imageError'));
    } else {
      setImageError('');
      const avatarUrl = avatars[selectedImage] as string;
      localStorage.setItem('selectedAvatar', selectedImage);
      toast({
        title: "Image updated Successfully!"
      })
      console.log(selectedImage)
      window.location.reload()
    }
    }
  return (
    <div className="px-6 pt-16 bg-[#F7EEE7]">
      <div className="max-w-[340px]"> 
        <h1 className="text-4xl text-primary-700 mb-8">{t('title')}</h1>

        <div className="grid grid-cols-4 gap-1 mb-8 cursor-pointer">
          {avatars?.length > 0 && avatars?.slice(7, 27).map((avatar, index) => (
            <div
              key={index}
              className={`w-[80px] h-[80px] border border-primary-700 flex justify-center items-center rounded-lg hover:bg-primary-200 relative ${
                selectedImage === index ? "bg-primary-200" : ""
              }`}
              onClick={() => setSelectedImage(avatar)}
            >
              <Image
                width={60}
                height={60}
                src={`https://api.staging.remote.bingo/avatars/${avatar}`}
                alt={`${t('altTextPrefix')} ${index + 1}`}
                className="h-[60px] w-[60px] object-contain rounded-full"
              />
              {selectedImage === avatar && (
                <div className="absolute top-2 right-1.5 bg-[#FFFDFD] rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-primary-700 border border-primary-700 rounded-full"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {imageError && (
          <div className="text-red-500 text-sm mt-2">{imageError}</div>
        )}

        <div className="w-full">
          <Button
            variant="default"
            onClick={handleFormSubmit}
            className="w-full border-x-primary-B800 bg-primary-yellow text-primary-B900 hover:bg-primary-yellow-400 hover:text-primary-B900"
            disabled={isLoading}
          >
            {isLoading ? t('savingChangesButton') : t('saveChangesButton')}
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Index;
