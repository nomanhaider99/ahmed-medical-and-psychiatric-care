import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";

const font = PT_Sans(
  {
    subsets: ['latin'],
    weight: ['400','700']
  }
);

export const metadata: Metadata = {
  title: "Ahmed Medical and Psychiatric Care",
  description: "Learn about Ahmed Medical and Psychiatric Care – providing trusted mental health and psychiatric services with experienced specialists.",
  keywords: ["psychiatrist", "mental health", "therapy", "Ahmed Medical and Psychiatric Care"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} w-full`}
      >
        {children}
      </body>
    </html>
  );
}
