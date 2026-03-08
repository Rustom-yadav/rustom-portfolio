import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vijay Yadav (Rustom) | Full Stack Developer",
  description:
    "Portfolio of Vijay Yadav (Rustom), Full stack developer in MERN stack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <div id="main">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
