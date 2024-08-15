import React, { useEffect, useState } from "react";
import SplashScreen from "../splashScreen";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const splashShown = localStorage.getItem("splashShown");

    if (!splashShown) {
      setShowSplash(true);
      const timer = setTimeout(() => {
        setShowSplash(false);
        localStorage.setItem("splashShown", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
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
