export default function ServicesPreview() {
  return (
    <section id="services" className="py-20 border-t border-slate-800">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Core Services
      </h2>

      <p className="text-slate-300 text-sm md:text-base max-w-2xl mb-10">
        We specialise in custom platform development, seamless integrations,
        security & compliance, and long-term operational support tailored
        for licensed sports betting operators.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        
        <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
          <h3 className="text-lg font-semibold mb-2 text-sky-400">Platform Development</h3>
          <p className="text-sm text-slate-300">
            Tailored platform solutions designed for performance and growth.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
          <h3 className="text-lg font-semibold mb-2 text-sky-400">Integrations</h3>
          <p className="text-sm text-slate-300">
            Connect payment providers, games, trading tools and external services.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
          <h3 className="text-lg font-semibold mb-2 text-sky-400">Compliance & Security</h3>
          <p className="text-sm text-slate-300">
            Protect your operations with modern security and regulatory compliance.
          </p>
        </div>

      </div>
    </section>
  );
}
