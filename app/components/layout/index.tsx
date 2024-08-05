import React, { useEffect, useState } from "react";
import SplashScreen from "../splashScreen";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Duration of splash screen

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div
          className={`transition-opacity duration-1000 ${
            showSplash ? "opacity-0" : "opacity-100"
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
