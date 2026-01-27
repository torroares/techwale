export default function PlatformSnapshot() {
  return (
    <section id="platform" className="py-20 border-t border-slate-800">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Platform Features
      </h2>

      <p className="text-slate-300 text-sm md:text-base max-w-2xl mb-10">
        Our modular sports betting platform provides all the tools you need 
        to operate efficiently — from risk management to player engagement.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
          <h3 className="text-lg font-semibold text-sky-400 mb-2">Real-Time Betting</h3>
          <p className="text-sm text-slate-300">Fast, reliable and scalable betting engine.</p>
        </div>

        <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
          <h3 className="text-lg font-semibold text-sky-400 mb-2">PAM System</h3>
          <p className="text-sm text-slate-300">Comprehensive player account management.</p>
        </div>

        <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
          <h3 className="text-lg font-semibold text-sky-400 mb-2">Risk Tools</h3>
          <p className="text-sm text-slate-300">Trading, odds, limit management and more.</p>
        </div>
      </div>
    </section>
  );
}
