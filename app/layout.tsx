import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/index";
import "./globals.css";

export const metadata = {
  title: "O'W Restaurant",
  description: "Restaurant Italien",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
