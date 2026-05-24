import React from "react";

const STUDIES = [
  {
    id: "python-service",
    title: "Python Windows Service — File Monitoring & Copy",
    problem:
      "Manual, error-prone file handling between systems; no audit trail or retry logic.",
    solution:
      "Custom Python Windows Service (managed via NSSM) that monitors configured directories, validates files, copies to destination with retries, and writes structured logs for audit and troubleshooting.",
    architecture: [
      "Watch folder (configurable paths) → detect new/changed files",
      "Validate (type, size, naming) → copy engine with retry logic",
      "Log success/failure and optional dead-letter or alert on failure",
    ],
    diagramNote: "Flow: [Watch Folder] → [Validate] → [Copy Engine] → [Log / Alert]. Managed as Windows Service via NSSM.",
    impact: "Reduced manual transfers, fewer failed copies, full audit trail.",
  },
  {
    id: "powershell",
    title: "PowerShell Automation for Windows",
    problem:
      "Repetitive, time-consuming tasks across Windows servers and workstations; inconsistent configurations.",
    solution:
      "Reusable, parameterized PowerShell scripts for provisioning, configuration management, and scheduled maintenance. Idempotent where possible and documented for team reuse.",
    architecture: [
      "Input: parameters and config (e.g. JSON or CLI args)",
      "Core logic: idempotent operations (user/group, registry, files)",
      "Output: logs and optional reports; optional Task Scheduler integration",
    ],
    diagramNote: "Flow: [Input/Config] → [PowerShell Scripts] → [Target Systems]. Run on-demand or scheduled.",
    impact: "Faster provisioning, consistent environments, fewer human errors.",
  },
  {
    id: "azure-functions",
    title: "Azure Function Apps — Serverless Backend",
    problem:
      "Need for scalable, event-driven backend without managing servers or paying for idle capacity.",
    solution:
      "Azure Function Apps for HTTP APIs, queue- and timer-triggered workflows. Implemented error handling, retries, and logging; integrated with Azure Storage and external APIs.",
    architecture: [
      "Triggers: HTTP, Queue, Timer",
      "Function App: business logic and bindings",
      "Outputs: Azure Storage, databases, external APIs; monitoring and retry policies",
    ],
    diagramNote: "Flow: [Trigger] → [Azure Function App] → [Storage / API]. Serverless, auto-scale.",
    impact: "Lower operational overhead, pay-per-execution, built-in scalability.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-zinc-800/80 bg-[var(--color-bg-elevated)] py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-100 sm:text-3xl">
          Case Studies
        </h2>
        <p className="mb-12 text-zinc-400">
          Real-world system design and production automation.
        </p>
        <div className="space-y-14">
          {STUDIES.map((study) => (
            <article
              key={study.id}
              className="rounded-xl border border-zinc-800 bg-[var(--color-bg)] p-6 sm:p-8"
            >
              <h3 className="mb-4 text-xl font-semibold text-zinc-100">
                {study.title}
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-medium text-zinc-400">Problem — </span>
                  <span className="text-zinc-400">{study.problem}</span>
                </div>
                <div>
                  <span className="font-medium text-zinc-400">Solution — </span>
                  <span className="text-zinc-400">{study.solution}</span>
                </div>
                <div>
                  <span className="font-medium text-zinc-400">Architecture — </span>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-400">
                    {study.architecture.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
                <p className="rounded-md bg-zinc-800/50 px-3 py-2 font-mono text-xs text-zinc-500">
                  {study.diagramNote}
                </p>
                <div>
                  <span className="font-medium text-zinc-400">Impact — </span>
                  <span className="text-zinc-400">{study.impact}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
