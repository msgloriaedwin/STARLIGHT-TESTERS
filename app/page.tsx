'use client'

import Layout from "./components/shared/layout";
import React, { useState } from "react";
import LandingPageNavbar from "./components/shared/navbars/custom-navbars/LandingPageNavbar";
import Footer from "./components/shared/footer/footer"
import Hero from "./components/home/hero";
import Navbar from "./components/shared/navbars/Navbar";


export default function HomeHero() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSignUp = () => {
    setIsModalOpen(false);
  };
  const onLogin = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div>
      

      <Layout>
        <main className="bg-body">
          <Navbar />
          <Hero />
          <Footer />
        </main>
      </Layout>

    </div>
  )
}