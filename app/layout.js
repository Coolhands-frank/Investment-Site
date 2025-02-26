import { asap } from "./fonts";
import "./globals.css";
import { UserProvider } from "../context/UserContext";
import PageLayout from "@/components/PageLayout"; // Client Component for layout logic

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
            <PageLayout>{children}</PageLayout>
          </UserProvider>
        </body>
    </html>
  );
}
