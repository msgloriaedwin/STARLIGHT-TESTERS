import React from "react";

type NavbarProp = {
  className?: string;
  children: React.ReactNode;
};

const Navbar = ({ className, children }: NavbarProp) => {
  return (
    <div
      className={`${className} shadow-sm flex items-center w-full bg-transparent md:bg-navbar px-4 md:px-20 py-5`}
    >
      {children}
    </div>
  );
};

export default Navbar;
