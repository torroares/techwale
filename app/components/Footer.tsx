export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 py-10 text-sm text-slate-400">
      <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">

        {/* Column 1 */}
        <div>
          <h3 className="text-slate-200 font-semibold mb-2">Techwale Ltd</h3>
          <p className="text-slate-400 text-sm">
            Next-generation iGaming & sports betting platform solutions.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-slate-200 font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-sky-400">Home</a></li>
            <li><a href="/services" className="hover:text-sky-400">Services</a></li>
            <li><a href="/platform" className="hover:text-sky-400">Platform</a></li>
            <li><a href="/about" className="hover:text-sky-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-sky-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-slate-200 font-semibold mb-2">Contact</h3>
          <p>Email: info@techwale.com</p>
          <p>Location: London, UK</p>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 mt-10">
        © {new Date().getFullYear()} Techwale Ltd — All Rights Reserved.
      </div>
    </footer>
  );
}
