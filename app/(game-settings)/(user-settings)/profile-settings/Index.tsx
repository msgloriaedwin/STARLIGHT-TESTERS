'use client'

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ChangeAvatar from '../change-avatar/page'

function Index() {
    const [showChangeAvatar, setShowChangeAvatar] = useState(false);
  
    if (showChangeAvatar) {
      return <ChangeAvatar />;
    }
    return (
      <>
        <div className="max-w-[411px] max-h-[682px]">
          <h1 className="text-4xl text-primary-700 mb-8">User Settings</h1>
  
          <div className="flex gap-6 items-center">
            <div className="w-[94px] h-[94px] rounded-full">
              <Image
                width={94}
                height={94}
                src="/pfp1.jpeg"
                alt="Remote Bingo"
                className="h-[94px] rounded-full"
              />
            </div>
            <Button
              variant="secondary"
              onClick={() => setShowChangeAvatar(true)}
              className="border-[#00a8e8] text-primary-100 hover:bg-[#00a8e8] hover:text-white"
            >
              Change Avatar
            </Button>
          </div>
  
          <form action="" className="max-w-[411px] mx-auto">
            <div className="mb-3">
              <label
                className="block text-neutral-600 text-[18px] leading-8 "
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none bg-[#FFFDFD] border border-primary-900 rounded w-full py-2 px-3 text-neutral-600 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              ></input>
            </div>
  
            <div className="mb-3">
              <label
                className="block text-neutral-600 text-[18px] leading-8"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none bg-[#FFFDFD] border border-primary-900 rounded w-full py-2 px-3 text-neutral-600 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="hng*************@hng.tech"
              ></input>
            </div>
  
            <div className="mb-8">
              <label
                className="block text-neutral-600 text-[18px] leading-8 "
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none bg-[#FFFDFD] border border-primary-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="••••••••••••"
              ></input>
            </div>
  
            <div className="flex items-center justify-between w-full">
              <Button
                variant="default"
                className=" w-full border-x-primary-B800 bg-primary-yellow text-primary-B900 hover:bg-primary-yellow-400 hover:text-primary-B900"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </>
    );
  }
  

export default Index
