"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("sent");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-20 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6">Contact Techwale</h1>

      <p className="text-slate-300 max-w-2xl mb-10">
        Interested in learning more about our platform or requesting a demo?
        Use the form below to get in touch with us.
      </p>

      {status === "sent" ? (
        <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800">
          <h2 className="text-xl font-semibold text-sky-400 mb-2">
            Message Sent
          </h2>
          <p className="text-slate-300 text-sm">
            Thank you! We will respond shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-6">

          <div>
            <label className="block text-sm mb-2 text-slate-300">Full Name</label>
            <input
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-slate-300">Email Address</label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-slate-300">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-sky-400"
            />
          </div>

          <button
            type="submit"
            className="w-fit rounded-full px-8 py-4 bg-sky-500 hover:bg-sky-400 text-sm font-semibold transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
