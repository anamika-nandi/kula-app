import type { Metadata } from "next";

import localFont from "next/font/local";
import { ChakraClientProvider } from "@/providers/ChakraClientProvider";

export const metadata: Metadata = {
  title: "Kula",
  description: "Kula App",
};

const sfDisplay = localFont({
  src: [
    {
      path: "../fonts/sf/display/SF-Pro-Display-Semibold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/sf/display/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

const sfText = localFont({
  src: [
    {
      path: "../fonts/sf/text/SF-Pro-Text-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/sf/text/SF-Pro-Text-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
});

const sp = localFont({
  src: [
    {
      path: "../fonts/sofia-pro/sofia_pro_bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sp.className} ${sfDisplay.className} ${sfText.className}`}
      >
        <ChakraClientProvider>{children}</ChakraClientProvider>
      </body>
    </html>
  );
}
