import React from "react";

const METRICS = [
  {
    label: "Manual file transfers reduced & duplicate files removed",
    value: "~90%",
    note: "Python Windows Service",
  },
  {
    label: "Provisioning time",
    value: "Hours → minutes",
    note: "PowerShell automation",
  },
  {
    label: "Operational overhead",
    value: "Lower",
    note: "Monitoring & error handling",
  },
];

export default function Metrics() {
  return (
    <section id="metrics" className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-100 sm:text-3xl">
          Metrics & Impact
        </h2>
        <p className="mb-12 text-zinc-400">
          Replace placeholders below with your real numbers for stronger impact.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {METRICS.map(({ label, value, note }) => (
            <div
              key={label}
              className="rounded-xl border border-zinc-800 bg-[var(--color-bg-elevated)] p-6 text-center"
            >
              <p className="text-2xl font-bold text-[var(--color-accent)] sm:text-3xl">
                {value}
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-300">{label}</p>
              <p className="mt-1 text-xs text-zinc-500">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
