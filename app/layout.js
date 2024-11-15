import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Seasonal Events Bangladesh",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50">
        <Navbar />
        <main className="mx-auto max-w-screen-xl min-h-[calc(100vh-2.5rem)] pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
