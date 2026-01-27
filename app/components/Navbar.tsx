import MobileMenu from "./MobileMenu";
export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="text-2xl font-bold tracking-tight">
        Techwale <span className="text-sky-400">Ltd</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden gap-6 text-sm md:flex">
        <a href="/" className="hover:text-sky-400 transition">Home</a>
        <a href="/services" className="hover:text-sky-400 transition">Services</a>
        <a href="/platform" className="hover:text-sky-400 transition">Platform</a>
        <a href="/about" className="hover:text-sky-400 transition">About</a>
        <a href="/contact" className="hover:text-sky-400 transition">Contact</a>
      </nav>

      {/* Mobile Navigation */}
      <MobileMenu />
    </header>
  );
}
