import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Techwale Ltd – iGaming Platform Solutions",
  description: "Next-generation iGaming and sports betting platform technology.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
  <div className="mx-auto max-w-6xl px-4">
    <Navbar />
    {children}
    <Footer />
  </div>
</body>

    </html>
  );
}
