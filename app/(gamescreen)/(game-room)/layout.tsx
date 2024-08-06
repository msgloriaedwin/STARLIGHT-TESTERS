"use client";
import JoinGameNavbar from "@/app/components/navbars/custom-navbars/JoinGameNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className="bg-bo">
          <JoinGameNavbar
            handleShareGameLink={() => {}}
            handleGoBack={() => {}}
          />
        </section>
        {children}
      </body>
    </html>
  );
}
