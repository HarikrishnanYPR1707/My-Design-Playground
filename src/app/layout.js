import "./globals.css";
import HomeButton from "@/components/Home/index";

export const metadata = {
  title: "My Design Playground",
  description:
    "Page where you guys can see all the design created and replicated from other websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HomeButton />
        {children}
      </body>
    </html>
  );
}
