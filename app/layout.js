import { asap } from "./fonts";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserProvider } from "../context/UserContext";

export const metadata = {
  title: "Investment Site",
  description: "created by coolhands",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={asap.className}>
          <UserProvider>
            <Navbar />
            {children}
            <Footer />
          </UserProvider>
        </body>
    </html>
  );
}
