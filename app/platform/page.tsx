export const metadata = {
  title: "Platform Features | Techwale Ltd",
  description: "Discover the full capabilities of the Techwale sports betting platform.",
};

export default function PlatformPage() {
  return (
    <main className="relative z-0">

      {/* BACKGROUND IMAGE FOR THE ENTIRE PAGE */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/platform-bg.jpg')",
        }}
      ></div>

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 -z-0 bg-black/45 backdrop-blur-[2px]"></div>

      {/* PAGE CONTENT */}
      <div className="relative z-10 py-20">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold mb-6">Platform Features</h1>
        <p className="text-slate-300 max-w-2xl mb-12">
          The Techwale platform is designed to deliver everything a licensed 
          sports betting operator needs — from real-time betting capabilities 
          to secure player management, risk tools, integrations, and full 
          operational control.
        </p>

        {/* GRID START */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* Feature 1 */}
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h2 className="text-2xl font-semibold text-sky-400 mb-3">
              Real-Time Betting Engine
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Fast, scalable, and built to handle high-volume betting events. 
              Designed for stable odds, instant bet acceptance, and smooth 
              performance even under peak traffic.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h2 className="text-2xl font-semibold text-sky-400 mb-3">
              Player Account Management (PAM)
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Complete control over player accounts, wallets, limits, bonus 
              settings and verification flows — fully compliant with 
              jurisdictional requirements.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h2 className="text-2xl font-semibold text-sky-400 mb-3">
              Risk & Trading Tools
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Automated risk monitoring, bet limits, odds adjustments, fraud 
              detection and trading tools to maintain a safe and profitable 
              betting environment.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h2 className="text-2xl font-semibold text-sky-400 mb-3">
              Payment Gateway Integrations
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Seamlessly integrate global payment providers including cards, 
              e-wallets, bank transfers, APMs and crypto — all with high security 
              and multi-currency support.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h2 className="text-2xl font-semibold text-sky-400 mb-3">
              Bonus & Loyalty Systems
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Create personalised bonuses, free bets, cashback campaigns and 
              player loyalty systems that boost engagement and retention.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h2 className="text-2xl font-semibold text-sky-400 mb-3">
              Reporting & Analytics
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Access detailed dashboards and real-time reporting for player 
              activity, finances, risk, compliance and operational performance.
            </p>
          </div>

          {/* Feature 7 */}
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h2 className="text-2xl font-semibold text-sky-400 mb-3">
              API-First Modular Architecture
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              A fully modular, API-driven architecture allows operators to 
              integrate, extend or customise platform components effortlessly.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
            <h2 className="text-2xl font-semibold text-sky-400 mb-3">
              Security & Compliance
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Built with encryption, fraud protection, responsible gaming 
              tools, and compliance frameworks aligned with global regulations.
            </p>
          </div>

        </div>
        {/* GRID END */}

      </div>
    </main>
  );
}
