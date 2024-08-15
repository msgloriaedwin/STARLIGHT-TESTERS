"use client";

import { useEffect, useState } from "react";
import { ToggleControlSettings } from "@/app/components/ToggleControl/ToggleControlSettings";
import CustomButton from "@/app/components/shared/button/custombutton";
import Modal from "@/app/components/modal/modal";
import { useTranslations } from "next-intl";
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

interface GameSettings {
  is_notification: boolean;
  is_sound: boolean;
}

const defaultSettings: GameSettings = {
  is_notification: false,
  is_sound: false,
};

const Index: React.FC = () => {
  const t = useTranslations("gameSettings");
  const { user } = useAuthContext();
  const [settings, setSettings] = useState<GameSettings>(defaultSettings);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const storedSettings = localStorage.getItem("gameSettings");
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    }
    if (user && user.access_token) {
      fetchGameSettings();
    } else {
      setIsLoading(false);
    }
  }, [user]);

  const fetchGameSettings = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${baseUrl}game-settings/me`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      });
      const fetchedSettings = response.data.data.game_settings;
      setSettings(fetchedSettings);
      localStorage.setItem("gameSettings", JSON.stringify(fetchedSettings));
    } catch (error) {
      console.error("Failed to fetch game settings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSettingChange = (key: keyof GameSettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem("gameSettings", JSON.stringify(newSettings));
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const payload = {
      is_notification: settings.is_notification,
      is_sound: settings.is_sound,
    };

    try {
      await axios.patch(`${baseUrl}game-settings/me`, payload, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
          "Content-Type": "application/json",
        },
      });
      setIsModalOpen(true);
    } catch (error) {
      console.error("Failed to update settings:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='px-6 pt-16 bg-[#F7EEE7]'>
      <div className='max-w-[411px]'>
        <h1 className='text-4xl text-primary-700'>{t("title")}</h1>

        <form onSubmit={handleFormSubmit} className='mt-16'>
          <div className='flex items-center justify-between'>
            <p className='text-xl font-medium text-primary-700'>
              {t("notificationsLabel")}
            </p>
            <ToggleControlSettings
              className='data-[state=checked]:bg-primary-200 h-9'
              thumbClassName='data-[state=checked]:bg-[#fff] h-8'
              checked={settings.is_notification}
              onCheckedChange={(checked) =>
                handleSettingChange("is_notification", checked)
              }
            />
          </div>

          <div className='flex items-center justify-between my-6'>
            <p className='text-xl font-medium text-primary-700'>
              {t("soundEffectsLabel")}
            </p>
            <ToggleControlSettings
              className='data-[state=checked]:bg-primary-200 h-9'
              thumbClassName='data-[state=checked]:bg-[#fff] h-8'
              checked={settings.is_sound}
              onCheckedChange={(checked) =>
                handleSettingChange("is_sound", checked)
              }
            />
          </div>

          <CustomButton
            type='submit'
            variant='default'
            size='lg'
            className='w-36 h-14 mt-12 text-base font-normal text-primary-B900'
            ariaLabel='Save changes'
          >
            {t("saveChangesButton")}
          </CustomButton>
        </form>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;
