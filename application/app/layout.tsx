import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "./structured-data";
import { Toaster } from 'react-hot-toast';

const font = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lyarimp.com/"),
  title: {
    default: "Lyari Medical Psychiatric Care",
    template: "%s | Lyari Medical Psychiatric Care",
  },
  description:
    "Lyari Medical & Psychiatric Care provides professional psychiatric and mental health services with compassion and evidence-based treatment.",
  keywords: [
    "psychiatrist",
    "mental health clinic",
    "therapy",
    "psychiatric care",
    "Lyari Medical and Psychiatric Care",
    "best psychiatric services",
    "best mental health services"
  ],
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    type: "website",
    url: "https://www.lyarimp.com/",
    title: "Lyari Medical & Psychiatric Care",
    description:
      "Trusted mental health and psychiatric services — expert care for your wellbeing.",
    siteName: "Lyari Medical & Psychiatric Care",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Lyari Medical & Psychiatric Care",
      },
    ],
  },
  alternates: {
    canonical: "https://www.lyarimp.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body
        className={`${font.className} w-full flex flex-col justify-between items-center`}
      >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}