import { UserProvider } from '@auth0/nextjs-auth0/client';
import { asap } from "./fonts";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { headers } from 'next/headers';



export const metadata = {
  title: "Investment Site",
  description: "created by coolhands",
};

export default function RootLayout({ children }) {
{/*
  const headersList = headers();
  const host = headersList.get('host');
  const currentUrl = new URL(headersList.get('referer') || `http://${host}`);
  const pathname = currentUrl.pathname;
  console.log(pathname)

  // routes without the universal navbar
  const noNavRoutes = ['/dashboard', "/login"]; */}

  return (
    <html lang="en">
      <UserProvider>
        <body className={asap.className}>
        {/*  {!noNavRoutes.includes(pathname) && <Navbar />} */}
            <Navbar />
            {children}
            <Footer />
        {/*  {!noNavRoutes.includes(pathname) && <Footer />} */}
        </body>
      </UserProvider>
    </html>
  );
}
