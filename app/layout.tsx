import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[inter.className, "bg-gray-200"].join(' ')}>
        <div className="pt-11">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
