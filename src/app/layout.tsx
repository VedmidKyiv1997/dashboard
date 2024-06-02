import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Toaster } from "~/components/ui/sonner";
import { TokenContextProvider } from "~/context/tokenContext";

export const metadata = {
  title: "Nexudus Dashboard",
  description: "Test task",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-[url(https://img.freepik.com/premium-vector/seamless-pattern-with-lines-that-are-drawn-by-hand_686000-354.jpg?w=740)]">
        <TokenContextProvider>
          <main>{children}</main>
        </TokenContextProvider>

        <Toaster />
      </body>
    </html>
  );
}
