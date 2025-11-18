import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "./structured-data";

const font = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ahmedmedicalpsychiatriccare.com/"),
  title: {
    default: "Ahmed Medical Psychiatric Care",
    template: "%s | Ahmed Medical Psychiatric Care",
  },
  description:
    "Ahmed Medical & Psychiatric Care provides professional psychiatric and mental health services with compassion and evidence-based treatment.",
  keywords: [
    "psychiatrist",
    "mental health clinic",
    "therapy",
    "psychiatric care",
    "Ahmed Medical and Psychiatric Care",
    "best psychiatric services",
    "best mental health services"
  ],
  icons: {
    icon: '/assets/images/logo.png',
  },
  openGraph: {
    type: "website",
    url: "https://www.ahmedmedicalpsychiatriccare.com/",
    title: "Ahmed Medical & Psychiatric Care",
    description:
      "Trusted mental health and psychiatric services — expert care for your wellbeing.",
    siteName: "Ahmed Medical & Psychiatric Care",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Medical & Psychiatric Care",
      },
    ],
  },
  alternates: {
    canonical: "https://www.ahmedmedicalpsychiatriccare.com/",
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
      </body>
    </html>
  );
}
