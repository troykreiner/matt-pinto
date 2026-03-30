import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Matt Pinto",
  description:
    "Matt Pinto is a guitarist, songwriter, and performer focused on original songs and music lessons.",
  metadataBase: new URL("https://matt-pinto.vercel.app"),
  keywords: [
    "Matt Pinto",
    "guitarist",
    "songwriter",
    "blues guitar",
    "rock guitar",
    "soul music",
    "original music",
  ],
  openGraph: {
    title: "Matt Pinto",
    description:
      "Matt Pinto plays guitar with a focus on original songs and also teaches music lessons.",
    type: "website",
    siteName: "Matt Pinto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Pinto",
    description:
      "Matt Pinto plays guitar with a focus on original songs and also teaches music lessons.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
