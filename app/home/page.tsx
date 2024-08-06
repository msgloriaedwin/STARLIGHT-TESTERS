"use client";

import Layout from "../components/layout";
import React, { useState } from "react";
import LandingPageNavbar from "../components/navbars/custom-navbars/LandingPageNavbar";
import Footer from "../components/footer/footer";
import Hero from "../components/hero";

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
       <LandingPageNavbar onLogin={onLogin} onSignup={onSignUp} />
      <Hero/>
      <Footer />
           </main>
        </Layout>
    </div>
  );
}
