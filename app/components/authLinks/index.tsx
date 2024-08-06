import { useEffect, useState, FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface AuthLinkProps {
  href: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

const AuthLink = ({ href, src, alt, children }: AuthLinkProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Link
      href={href}
      className="w-full flex justify-center p-4 border rounded-md border-[#C5C5C5] text-[var(--Neutral-800,#404040)] font-dm-sans font-medium leading-[16px] text-[14px] md:text-[var(--Neutral-800,#404040)] md:font-dm-sans md:text-[14px] md:font-normal md:leading-[25.137px]"
    >
      <Image
        src={src}
        alt={alt}
        width={isMobile ? 18.853 : 24}
        height={isMobile ? 18.853 : 24}
        className="mr-3 flex-shrink-0"
      />
      {children}
    </Link>
  );
};

export default AuthLink;
