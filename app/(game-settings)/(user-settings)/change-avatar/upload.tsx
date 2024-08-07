import React, { useRef, ChangeEvent } from "react";

const CustomUploadContainer: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // handlefile upload when server is ready.
    }
  };

  return (
    <div
      className="w-[80px] h-[80px] border border-primary-700 flex justify-center items-center rounded-lg hover:bg-primary-200 cursor-pointer"
      onClick={() => fileInputRef.current?.click()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <path
          d="M16.9658 54.2287H42.5836C49.3303 54.2287 52.0192 50.0976 52.3369 45.0621L53.6081 24.871C53.9503 19.591 49.7458 15.1176 44.4414 15.1176C42.9503 15.1176 41.5814 14.2621 40.8969 12.9421L39.1369 9.39762C38.0125 7.17318 35.0792 5.33984 32.5858 5.33984H26.9881C24.4703 5.33984 21.5369 7.17318 20.4125 9.39762L18.6525 12.9421C17.968 14.2621 16.5992 15.1176 15.108 15.1176C9.8036 15.1176 5.59916 19.591 5.94138 24.871L7.21249 45.0621C7.50583 50.0976 10.2192 54.2287 16.9658 54.2287Z"
          stroke="#00658B"
          strokeWidth="2.29167"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.1094 20.0068H33.4427"
          stroke="#00658B"
          strokeWidth="2.29167"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M29.7804 44.4514C34.1559 44.4514 37.7248 40.8825 37.7248 36.5069C37.7248 32.1314 34.1559 28.5625 29.7804 28.5625C25.4048 28.5625 21.8359 32.1314 21.8359 36.5069C21.8359 40.8825 25.4048 44.4514 29.7804 44.4514Z"
          stroke="#00658B"
          strokeWidth="2.29167"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleUpload}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default CustomUploadContainer;