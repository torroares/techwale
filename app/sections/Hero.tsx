import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        {/* LEFT SIDE – TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Next-Generation iGaming &{" "}
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

        {/* RIGHT SIDE – IMAGE */}
        <div className="relative w-full h-72 md:h-96">
          <Image
            src="/images/hero-techwale1.png"
            alt="Techwale iGaming platform illustration"
            fill
            className="object-cover rounded-3xl border border-slate-800 shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
