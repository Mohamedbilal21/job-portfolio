import React, { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Impact", href: "#metrics" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-[var(--color-bg)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-lg font-semibold text-zinc-100 transition hover:text-[var(--color-accent)]"
        >
          Portfolio
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-zinc-400 transition hover:text-zinc-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden rounded p-2 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
          <span className="mt-1 block h-0.5 w-5 bg-current" />
        </button>
      </nav>
      {open && (
        <div className="border-t border-zinc-800 bg-[var(--color-bg-elevated)] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-zinc-400 hover:text-zinc-100"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
