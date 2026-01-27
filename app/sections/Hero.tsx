export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Next-Generation iGaming & 
            <span className="block text-sky-400">
              Sports Betting Platform Solutions.
            </span>
          </h1>

          <p className="mt-6 text-slate-300 text-sm md:text-base max-w-lg">
            Techwale Ltd empowers licensed sports betting operators 
            with scalable, secure, and fully customizable platform 
            technology — built for performance, compliance, and growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full px-6 py-3 text-sm font-medium bg-sky-500 hover:bg-sky-400 transition"
            >
              Request a Demo
            </a>
            <a
              href="/services"
              className="rounded-full px-6 py-3 text-sm font-medium border border-slate-600 hover:border-sky-400 hover:text-sky-300 transition"
            >
              View Services
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-xl">
          <p className="text-xs font-medium text-sky-400 uppercase tracking-wide mb-3">
            Platform Snapshot
          </p>
          <ul className="space-y-3 text-sm text-slate-200">
            <li>• Real-time betting engine</li>
            <li>• Player account management (PAM)</li>
            <li>• Risk & trading tools</li>
            <li>• Payment integrations</li>
            <li>• API-first modular architecture</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
