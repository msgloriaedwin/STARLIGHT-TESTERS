"use client";
import { Link, Plus } from "lucide-react";
import CustomButton from "./custombutton";

export default function SampleButtons() {
  //create the following functions
  //onLogin, onSignup, handleHowToPlayClick, handleShowMenu
  const onLogin = () => {
  };
  const onSignup = () => {
  };
  const handleHowToPlayClick = () => {
  };
  const handleShowMenu = () => {
  };

  return (
    <>
      <h1 className="text-2xl !text-left font-bold mt-8 mb-4"> Buttons </h1>

      <div
        className="grid w-full grid-cols-5 items-start gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
      >
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Default Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton>Button CTA</CustomButton>
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Secondary Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="secondary">Button CTA</CustomButton>
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Destructive Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="destructive">Button CTA</CustomButton>
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Outline Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="outline">Button CTA</CustomButton>
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Outline Icon Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="outline"
              size="icon"
              isIconOnly={true}
              icon={<Plus />}
            />
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Yellow Icon Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="subtle"
              isLeftIconVisible={true}
              icon={<Link />}
            >
              Button CTA
            </CustomButton>
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Right Icon Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="subtle"
              isRightIconVisible={true}
              icon={<Link />}
            >
              Button CTA
            </CustomButton>
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Loading Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="loading" isLoading={true} />
          </div>
        </div>

        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Link Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="link" size="link">
              Button CTA
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
}
