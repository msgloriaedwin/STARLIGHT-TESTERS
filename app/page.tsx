import Image from "next/image";
import Navbar from "./components/navbars/Navbar";
import { Menu } from "lucide-react";
import logo from "../app/components/navbars/asset/bingo_logo.png"
import SignUpNavbar from "./components/navbars/custom-navbars/signUpNavbar";
import LandingPageNavbar from "./components/navbars/custom-navbars/LandingPageNavbar";

export default function Home() {
  return (
    <main className="bg-[#F7EEE7]">
      <LandingPageNavbar />
      
    </main>
  )
}
