import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "./provider";
import { Nunito } from 'next/font/google'

const MyAppFont = Nunito({subsets: ['latin']});

export const metadata: Metadata = {
  title: "KidStories",
  description: "Create adventure stories to spark your kids comprehension",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={MyAppFont.className}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
