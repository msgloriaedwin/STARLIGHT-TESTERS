"use client";
import JoinGameNavbar from "@/app/components/navbars/custom-navbars/JoinGameNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full ">
        <section className="">
          <JoinGameNavbar
            handleShareGameLink={() => {}}
            handleGoBack={() => {}}
          />
        </section>
        <div className="flex items-center justify-center bg-body px-4">
          {children}
        </div>
      </body>
    </html>
  );
}
