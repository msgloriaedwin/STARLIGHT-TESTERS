import React from "react";

type NavbarProp = {
  className?: string;
  // userImageUrl?: string,
  children: React.ReactNode;
};

const Navbar = ({ className, children }: NavbarProp) => {
  return (
    <nav
      className={`${className} flex items-center w-full py-3 bg-transparent md:bg-navbar`}
    >
      {children}
    </nav>
  );
};

export default Navbar;
