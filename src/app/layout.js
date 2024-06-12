import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "MARKET_CS2",
  description:
    "Маркет в котором вы можете купить и осмотреть любые скины (кейсы, капсулы и т.д.)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  );
}
