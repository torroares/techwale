export const metadata = {
  title: "About Us | Techwale Ltd",
  description: "Learn more about Techwale Ltd, our mission and our expertise in iGaming technology.",
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold mb-6">About Techwale Ltd</h1>

      <p className="text-slate-300 max-w-2xl mb-10">
        Techwale Ltd is an international technology provider specialising in 
        iGaming and sports betting platforms. We help licensed operators 
        launch modern, secure, and scalable systems designed for long-term 
        success in highly competitive markets.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-sky-400">Our Mission</h2>
      <p className="text-slate-300 max-w-2xl mb-8 text-sm md:text-base">
        Our mission is to empower iGaming operators with advanced technology 
        that enables them to grow sustainably while remaining fully compliant 
        with global regulations.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-sky-400">Industry Expertise</h2>
      <p className="text-slate-300 max-w-2xl mb-8 text-sm md:text-base">
        With extensive experience in sports betting technology, payments, 
        compliance, and platform development, our team understands both 
        the technical and regulatory challenges operators face today.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-sky-400">Why Operators Work With Us</h2>
      <ul className="text-slate-300 text-sm md:text-base space-y-2 max-w-xl">
        <li>• Deep experience in iGaming platform architecture</li>
        <li>• Advanced security & compliance frameworks</li>
        <li>• Fast, scalable, API-driven systems</li>
        <li>• Strong focus on reliability and uptime</li>
        <li>• Dedicated client support</li>
      </ul>
    </div>
  );
}
