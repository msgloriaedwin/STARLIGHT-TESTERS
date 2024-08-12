'use client'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body>
        <div className="bg-body">
          {children}
        </div>
      </body>
    </html>
  );
}