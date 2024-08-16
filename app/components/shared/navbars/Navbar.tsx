"use client";
import { usePathname } from "next/navigation";
import LandingPageNavbar from "./custom-navbars/LandingPageNavbar";
import { useState } from "react";
import JoinGameNavbar from "./custom-navbars/JoinGameNavbar";
import ForgotPasswordNavbar from "./custom-navbars/ForgotPasswordNavbar";
import DeleteLogoutNavbar from "./custom-navbars/DeleteLogoutNavbar";
import SettingsHeader from "../../settings/header";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathName = usePathname();
  const mainRoutes = ["/", "/join-as-guest"];
  const settingsRoutes = [
    "/game-settings",
    "/profile-settings",
    "/terms-and-privacy",
  ];
  const gameRoutes = [
    "/waiting-room",
    "/join-game",
    "/room/game",
    "/lobby/alphabets",
    "/lobby/numbers",
    "/create-game",
  ];
  const logoutRoutes = ["/auth/logout-confirmation", "/auth/logout-success"];
  const authRoutes = [
    "/auth/login",
    "/auth/signup",
    "/auth/forgot-password/new-password",
    "/auth/forgot-password",
    "/auth/forgot-password/otp",
    "/auth/forgot-password/success",
  ];
  const onSignUp: () => void = () => {
    setIsModalOpen(false);
  };

  const onLogin = () => {
    setIsModalOpen(false);
  };

  const isMainRoute = mainRoutes.some(
    (route) => pathName === route || pathName.startsWith(route)
  );
  const isSettingsRoute = settingsRoutes.some(
    (route) => pathName === route || pathName.startsWith(route)
  );
  const isGameRoute = gameRoutes.some(
    (route) => pathName === route || pathName.startsWith(route)
  );
  const isAuthRoute = authRoutes.some(
    (route) => pathName === route || pathName.startsWith(route)
  );
  const isLogoutRoute = logoutRoutes.some(
    (route) => pathName === route || pathName.startsWith(route)
  );

  return (
    <div className="w-full">
      {isMainRoute && (
        <LandingPageNavbar onLogin={onLogin} onSignup={onSignUp} />
      )}
      {isSettingsRoute && <SettingsHeader />}
      {isGameRoute && <JoinGameNavbar isCopied />}
      {isAuthRoute && <ForgotPasswordNavbar />}
      {isLogoutRoute && <DeleteLogoutNavbar />}
    </div>
  );
};

export default Navbar;
