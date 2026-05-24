import React from "react";

const STACK = [
  {
    title: "Languages & scripting",
    items: ["Python", "React JS", "Powershell", "SQL"],
  },
  {
    title: "Cloud & backend",
    items: ["Azure Function Apps", "Windows Server"],
  },
  {
    title: "Automation & tooling",
    items: ["NSSM", "Windows Services", "File monitoring", "Scheduled tasks"],
  },
  {
    title: "Remote & Ticketing",
    items: ["TeamViewer", "Quick Assist", "RDP", "Jira", "Incident Management",
"SLA Tracking", "Helpdesk Documentation"],
  },
  {
    title: "AI & Productivity",
    items: ["AI Prompt Engineering", "ChatGPT", "Microsoft Copilot"],
  },
  {
    title: "Concepts",
    items: ["System design", "Reliability", "Monitoring", "Error handling"],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-2xl font-semibold text-zinc-100 sm:text-3xl">
          Technical Stack
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {STACK.map(({ title, items }) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-800 bg-[var(--color-bg-elevated)] p-6"
            >
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--color-accent)]">
                {title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-zinc-800/80 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
