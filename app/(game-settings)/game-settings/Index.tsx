"use client"

import { useState } from 'react';
import { ToggleControl } from '@/app/components/ToggleControl/ToggleControl';
import RadioButton from '@/app/components/radio-button/radio-button';
import CustomButton from '@/app/components/button/custombutton';
import Modal from '@/app/components/modal/modal';

const Index: React.FC = () => {
    const [difficulty, setDifficulty] = useState<string>('easy');
    const [notifications, setNotifications] = useState<boolean>(true);
    const [soundEffects, setSoundEffects] = useState<boolean>(true);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleDifficultyChange = (value: string) => {
        setDifficulty(value);
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsModalOpen(true)
    };

    return (
        <div className="px-6 pt-16 bg-[#F7EEE7] max-h-[682px]">
            <div className="max-w-[411px]">
                <h1 className="text-4xl text-primary-700">Game Settings</h1>

                <form onSubmit={handleFormSubmit} className="mt-16">
                    <div className="flex items-center justify-between">
                        <p className="text-xl font-medium text-primary-700">Notifications</p>
                        <ToggleControl
                            className="data-[state=checked]:bg-primary-200"
                            thumbClassName="data-[state=checked]:bg-[#fff]"
                            checked={notifications}
                            onCheckedChange={(checked) => setNotifications(checked)}
                        />
                    </div>

                    <div className="flex items-center justify-between my-6">
                        <p className="text-xl font-medium text-primary-700">Sound Effects</p>
                        <ToggleControl
                            className="data-[state=checked]:bg-primary-200"
                            thumbClassName="data-[state=checked]:bg-[#fff]"
                            checked={soundEffects}
                            onCheckedChange={(checked) => setSoundEffects(checked)}
                        />
                    </div>

                    <div className="">
                        <p className="text-xl font-medium text-neutral-600">Set difficulty level</p>
                        <div className="flex gap-4 mt-3">
                            <RadioButton
                                id="difficulty-easy"
                                value="easy"
                                selectedValue={difficulty}
                                onSelect={handleDifficultyChange}
                                label="Easy"
                            />
                            <RadioButton
                                id="difficulty-medium"
                                value="medium"
                                selectedValue={difficulty}
                                onSelect={handleDifficultyChange}
                                label="Medium"
                            />
                            <RadioButton
                                id="difficulty-hard"
                                value="hard"
                                selectedValue={difficulty}
                                onSelect={handleDifficultyChange}
                                label="Hard"
                            />
                        </div>
                    </div>

                    <CustomButton
                        type="submit"
                        variant="default"
                        size="lg"
                        className="w-36 h-14 mt-16 text-base font-normal text-primary-B900"
                        isLoading={false}
                        ariaLabel="Save changes"
                    >
                        Save Changes
                    </CustomButton>
                </form>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default Index;
