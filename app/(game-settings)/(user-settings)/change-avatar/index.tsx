"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CustomUploadContainer from "./upload";

function Index() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div>
      <div className="max-w-[411px] max-h-[682px]">
        <h1 className="text-4xl text-primary-700 mb-8">Change Avatar</h1>

        <div className="grid grid-cols-4 gap-2 p-2 mb-8 cursor-pointer">
          {[...Array(15)].map((_, index) => (
            <div
              key={index}
              className={`w-[80px] h-[80px] border border-primary-700 flex justify-center items-center rounded-lg hover:bg-primary-200 relative ${
                selectedImage === index ? "bg-primary-200" : ""
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                width={73}
                height={73}
                src={`/pfp${index + 1}.jpeg`}
                alt={`Profile ${index + 1}`}
                className="h-[73px] rounded-full"
              />
              {selectedImage === index && (
                <div className="absolute top-2 right-2 bg-[#FFFDFD] rounded-full ">
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

          <div className="w-[80px] h-[80px] border border-primary-700 flex justify-center items-center rounded-lg  hover:bg-primary-200">
            <CustomUploadContainer />
          </div>
        </div>

        <div className="flex items-center justify-between md:w-full w-[148px]">
          <Button
            variant="default"
            className=" w-full border-x-primary-B800 bg-primary-yellow text-primary-B900 hover:bg-primary-yellow-400 hover:text-primary-B900"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Index;
