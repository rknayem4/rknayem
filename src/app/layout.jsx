import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "R.K.Nayem | MERN Stack Developer Portfolio",
  description: "I build robust, scalable, and high-performance full-stack applications with a focus on modern user experiences and clean engineering practices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-body-md selection:bg-primary-container selection:text-on-primary-container`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
