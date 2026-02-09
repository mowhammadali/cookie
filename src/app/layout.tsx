import { type Metadata } from "next";
import { Geist, Roboto } from "next/font/google";
import "@/styles/colors.css";
import "./globals.css";
import { type ReactNode } from "react";
import clsx from "clsx";
import Main from "@/components/main/main.component";
import Sidebar from "@/components/sidebar/sidebar.component";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cookie - Delicious Recipes for Every Occasion",
  description:
    "Discover a variety of tasty cookie recipes, baking tips, and sweet treats ideas to make every occasion special.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode {
  return (
    <html lang="en">
      <body className={clsx(roboto.variable, geistSans.variable)}>
        <Sidebar />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
