import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "NeX Agency Homepage",
    template: "%s | NeX Agency",
  },
  description: "A NeX level creative agency",
  icons: [
    { rel: 'icon', url: '/favicon.ico' }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
