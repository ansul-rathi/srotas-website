import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Header from "@components/components/layout/header";
import { Poppins } from "next/font/google";
import Footer from "@components/components/layout/footer";
import { CSPostHogProvider } from './posthog-provider'
import CookieBanner from "./cookie-banner";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Srotas Health",
  description: "Srotas health app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          className={poppins.className}
        >
          <Header />
          <main>{children}</main>
          <CookieBanner />

          <Footer />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
