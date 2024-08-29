import { asap } from "./fonts";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Investment Site",
  description: "created by coolhands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={asap.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
