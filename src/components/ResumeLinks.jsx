import React from "react";

const RESUME_PDF = "./resume/Mohamed_Bilal_udated.docx"; // Place your resume at public/resume.pdf or use external URL
const GITHUB_URL = "https://github.com/Mohamedbilal21"; // Your GitHub
const LINKEDIN_URL = "https://www.linkedin.com/in/mohamedbilal21"; // Your LinkedIn

export default function ResumeLinks() {
  return (
    <section
      id="resume"
      className="border-t border-zinc-800/80 bg-[var(--color-bg-elevated)] py-20 px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-100 sm:text-3xl">
          Resume & Links
        </h2>
        <p className="mb-10 text-zinc-400">
          One-click download and profiles for recruiters.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={RESUME_PDF}
            download
            className="inline-flex items-center rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--color-accent-hover)]"
          >
            Download Resume (PDF)
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-zinc-600 px-6 py-3 text-sm text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800/50"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-zinc-600 px-6 py-3 text-sm text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800/50"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-6 text-xs text-zinc-500">
          Download my resume or explore my professional profiles.
        </p>
      </div>
    </section>
  );
}
