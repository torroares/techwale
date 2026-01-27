export const metadata = {
  title: "Services | Techwale Ltd",
  description: "Professional iGaming and sports betting platform services.",
};

export default function ServicesPage() {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-slate-300 max-w-2xl mb-12">
        Techwale Ltd provides a full suite of technology solutions designed 
        specifically for licensed sports betting operators. From platform 
        development to integrations and long-term operational support, 
        we deliver everything you need to run a successful iGaming operation.
      </p>

      <div className="grid gap-10 md:grid-cols-2">

        {/* Service 1 */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
          <h2 className="text-2xl font-semibold text-sky-400 mb-3">
            Custom Platform Development
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            We design and build fully customisable sports betting platforms 
            tailored to your operational needs. Every solution is developed 
            for performance, scalability, and regulatory compliance.
          </p>
        </div>

        {/* Service 2 */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
          <h2 className="text-2xl font-semibold text-sky-400 mb-3">
            Third-Party Integrations
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Connect seamlessly with payment providers, game suppliers, risk 
            management tools, identity verification services and other critical 
            systems required in iGaming environments.
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
          <h2 className="text-2xl font-semibold text-sky-400 mb-3">
            Compliance & Security
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Techwale ensures your platform is fully compliant with international 
            regulations including KYC, AML, GDPR, and gaming-specific 
            jurisdiction requirements. We also implement industry-leading 
            cybersecurity standards.
          </p>
        </div>

        {/* Service 4 */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40">
          <h2 className="text-2xl font-semibold text-sky-400 mb-3">
            Operational Support & Monitoring
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Our 24/7 technical support and monitoring services ensure your 
            operations run smoothly at all times. We actively maintain system 
            performance, uptime and security.
          </p>
        </div>

      </div>
    </div>
  );
}
