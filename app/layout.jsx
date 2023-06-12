import Nav from "../components/Nav";
import "./globals.css";

export const metadata = {
  title: "First Next App",
  description: "Generated by create next app",
  keywords: "first,next,app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}