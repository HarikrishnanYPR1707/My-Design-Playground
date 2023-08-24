import "./globals.css";
import { Inter } from "next/font/google";
import HomeButton from "@/components/Home/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Design Playground",
  description:
    "Page where you guys can see all the design created and replicated from other websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeButton />
        {children}
      </body>
    </html>
  );
}
