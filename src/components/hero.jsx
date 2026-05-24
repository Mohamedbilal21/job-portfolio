import React from "react";

const RESUME_URL = "#resume"; // Replace with your resume PDF URL or path
const GITHUB_URL = "https://github.com/Mohamedbilal21"; // Replace with your GitHub profile

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-left justify-center px-6 pt-24 pb-16"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--color-accent)]">
          IT Support Specialist & Software Engineer Trainee
        </p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl">
          Building reliable, production-grade automation 
        </h1>
        <p className="mb-10 text-lg text-zinc-400 sm:text-xl">
          Solving operational problems using automation, scripting,
support engineering, and backend systems.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={RESUME_URL}
            className="inline-flex items-center rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-accent-hover)]"
          >
            Download Resume
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-zinc-600 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800/50"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
