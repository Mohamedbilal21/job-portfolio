import React from "react";

const EMAIL = "mdbilal212002@example.com"; // Replace with your email

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-100 sm:text-3xl">
          Contact
        </h2>
        
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center rounded-lg border border-zinc-600 px-6 py-3 text-zinc-300 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          {EMAIL}
        </a>
      </div>
    </section>
  );
}
