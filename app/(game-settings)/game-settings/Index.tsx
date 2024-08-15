"use client";

import { useEffect, useState } from "react";
import { ToggleControlSettings } from "@/app/components/ToggleControl/ToggleControlSettings";
import CustomButton from "@/app/components/shared/button/custombutton";
import Modal from "@/app/components/modal/modal";
import LocaleSwitcher from "./switcher";
import { useTranslations } from "next-intl";
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

interface GameSettings {
  is_notification: boolean;
  is_sound: boolean;
}

const Index: React.FC = () => {
  const t = useTranslations("gameSettings");
  const { user } = useAuthContext();
  const [settings, setSettings] = useState<GameSettings>({
    is_notification: true,
    is_sound: true,
  });
  const [localSettings, setLocalSettings] = useState<GameSettings>({
    is_notification: true,
    is_sound: true,
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!user.access_token) {
      router.push("/auth/login");
    } else {
      fetchGameSettings();
    }
  }, [user.access_token, router]);

  const fetchGameSettings = async () => {
    try {
      const response = await axios.get(`${baseUrl}game-settings/me`, {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      });
      const fetchedSettings = response.data.data.game_settings;
      console.log("Fetched settings:", fetchedSettings);
      setSettings(fetchedSettings);
      setLocalSettings(fetchedSettings);
    } catch (error) {
      console.error("Failed to fetch game settings:", error);
    }
  };

  const handleSettingChange = (key: keyof GameSettings, value: boolean) => {
    setLocalSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
 
    try {
      const response = await axios.patch(
        `${baseUrl}game-settings/me`,
        localSettings,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );
      console.log("Form submission response:", response.data);
      setSettings(localSettings);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Failed to update game settings:", error);
    }
  };
  
  return (
    <div className="px-6 pt-16 bg-[#F7EEE7]">
      <div className="max-w-[411px]">
        <h1 className="text-4xl text-primary-700">{t("title")}</h1>

        <form onSubmit={handleFormSubmit} className="mt-16">
          <div className="flex items-center justify-between">
            <p className="text-xl font-medium text-primary-700">
              {t("notificationsLabel")}
            </p>
            <ToggleControlSettings
              className="data-[state=checked]:bg-primary-200 h-9"
              thumbClassName="data-[state=checked]:bg-[#fff] h-8"
              checked={localSettings.is_notification}
              onCheckedChange={(checked) => handleSettingChange("is_notification", checked)}
            />
          </div>

          <div className="flex items-center justify-between my-6">
            <p className="text-xl font-medium text-primary-700">
              {t("soundEffectsLabel")}
            </p>
            <ToggleControlSettings
              className="data-[state=checked]:bg-primary-200 h-9"
              thumbClassName="data-[state=checked]:bg-[#fff] h-8"
              checked={localSettings.is_sound}
              onCheckedChange={(checked) => handleSettingChange("is_sound", checked)}
            />
          </div>

          <CustomButton
            type="submit"
            variant="default"
            size="lg"
            className="w-36 h-14 mt-12 text-base font-normal text-primary-B900"          
            ariaLabel="Save changes"
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