import { Courier_Prime } from "next/font/google";
import "./globals.css";

const Courier = Courier_Prime({
  variable: "--font-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "// zero_day_terminal.exe",
  description:
    "ILLEGAL ROOT ACCESS PROTOCOL ACTIVATED - ALL ACTIVITIES LOGGED AND REPORTED TO AUTHORITIES",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Courier.variable}`}>{children}</body>
    </html>
  );
}
