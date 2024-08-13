"use client";

import Footer from "../components/shared/footer/footer";
import LandingPageNavbar from "../components/shared/navbars/custom-navbars/LandingPageNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <LandingPageNavbar
        onLogin={() => {}}
        onSignup={() => {}}
        hideAuthBtn={true}
      />
      <div className="bg-body">{children}</div>
      <Footer />
    </main>
  );
}
