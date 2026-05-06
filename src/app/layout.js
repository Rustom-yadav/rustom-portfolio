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
  title: "Rustom Yadav| Software Engineer",
  description:
    "Portfolio of Rustom Yadav, Software Engineer and system architecture enthusiast, Building scalable web ecosystems with Generative & Agentic AI Systems",
  keywords: [
    "Software Engineer",
    "Rustom Yadav",
    "System Design",
    "Generative AI",
    "Agentic AI",
    "MERN Stack",
    "Next.js",
    "FastAPI",
    "Docker",
    "GitHub Actions",
    "Full Stack Developer",
    "Web Developer",
    "Machine Learning Engineer",
    "Developer",
    "Rustom"
  ],
  authors: [{ name: "Rustom Yadav" }],
  creator: "Rustom Yadav",
  publisher: "Rustom Yadav",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Rustom Yadav | Software Engineer",
    description:
      "Portfolio of Rustom Yadav, Software Engineer and system architecture enthusiast, Building scalable web ecosystems with Generative & Agentic AI Systems",
    type: "website",
    locale: "en_IN",
    url: "https://rustom-portfolio.vercel.app/",
    siteName: "Rustom Yadav",
    images: [
      {
        url: "/img.vijay.jpg",
        width: 1200,
        height: 630,
        alt: "Rustom Yadav",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rustom Yadav | Software Engineer",
    description:
      "Portfolio of Rustom Yadav, Software Engineer and system architecture enthusiast, Building scalable web ecosystems with Generative & Agentic AI Systems",
    images: ["/img.vijay.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          <div id="main" className="min-w-0 w-full overflow-x-hidden">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
