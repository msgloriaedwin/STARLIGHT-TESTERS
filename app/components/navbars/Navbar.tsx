import React from "react";

type NavbarProp = {
  className?: string;
  // userImageUrl?: string,
  children: React.ReactNode;
};

const Navbar = ({ className, children }: NavbarProp) => {
  return (
    <nav
      className={`${className} flex items-center py-4 w-full bg-transparent md:bg-navbar`}
    >
      {children}
    </nav>
  );
};

export default Navbar;
