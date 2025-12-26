import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.scss";
import Navbar from "@/widgets/navbar/Navbar";
import "aos/dist/aos.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Starbucks New Cafe",
  description: "New cafe experience by Starbucks with special offers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main style={{ paddingTop: "80px" }}>{children}</main>
        {/* <Footer /> — раскомментируй когда добавишь */}
      </body>
    </html>
  );
}
