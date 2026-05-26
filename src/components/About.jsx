import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-zinc-800/80 bg-[var(--color-bg-elevated)] py-20 px-6"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-2xl font-semibold text-zinc-100 sm:text-3xl">
          About
        </h2>
        <p className="mb-4 text-zinc-400 leading-relaxed">
          I’m an <strong className="text-zinc-300">
            {" "}
            IT Support and Application Support Engineer
          </strong>{" "}  with experience
          supporting international clients across UAE, Malaysia, and Bahrain. My
          work focuses on troubleshooting enterprise systems, automating
          operational workflows, supporting Windows environments, and improving
          system reliability through scripting and backend automation. I work with<strong className="text-zinc-300">
          {" "} Python, Azure Functions, SQL Server, Windows Services, and
          workflow-based systems to reduce manual operations and streamline
          technical support processes.</strong> <br/><br/>Currently, I’m expanding deeper into
          <strong className="text-zinc-300"> {" "}software development and production-grade automation</strong> while continuing to<strong className="text-zinc-300">
            {" "} strengthen my expertise in IT operational support, enterprise systems, and workflow automation.</strong></p>
        <p className="text-zinc-400 leading-relaxed">
          I care about system design, monitoring, and measurable impact.
        </p>
      </div>
    </section>
  );
}
