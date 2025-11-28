import type { Metadata } from "next";
import Innerpage from './Components/Layout/Innerpage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import localFont from 'next/font/local';
import "./globals.css";

const sofiaPro = localFont({
  src: [
    {
      path: '../public/fonts/SofiaPro-Black.otf',
      weight: '800',
      style: 'normal,'
    },
    {
      path: '../public/fonts/SofiaPro-Bold.otf',
      weight: '700',
      style: 'normal,'
    },
    {
      path: '../public/fonts/SofiaPro-SemiBold.otf',
      weight: '600',
      style: 'normal,'
    },
    {
      path: '../public/fonts/SofiaPro-SemiBoldItalic.otf',
      weight: '600',
      style: 'italic,'
    },
    {
      path: '../public/fonts/SofiaPro-Medium.otf',
      weight: '500',
      style: 'normal,'
    },
    {
      path: '../public/fonts/SofiaPro-MediumItalic.otf',
      weight: '500',
      style: 'italic,'
    },
    {
      path: '../public/fonts/SofiaPro-Light.otf',
      weight: '400',
      style: 'normal,'
    },
        {
      path: '../public/fonts/SofiaPro-Italic.otf',
      weight: '400',
      style: 'italic,'
    },
  ]
})

export const metadata: Metadata = {
  title: "U-Studio Digital Portfolio",
  description: "TBA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sofiaPro} antialiased`}
      >
        <Header/>
          <main id="content">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
