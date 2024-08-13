import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import QueryProvider from "./providers/QueryClientProvider";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });


export const metadata: Metadata = {
  title: "Bingo",
  description: "Engage your team with online bingo!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-primary`}>
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            {children}
          </QueryProvider>
      </NextIntlClientProvider></body>

    </html>
  );
}
