import type { Warning } from "../../types/career";

interface WarningsCardProps {
  warnings: Warning[];
}

function getSeverityStyles(severity: Warning["severity"]) {
  switch (severity) {
    case "High":
      return "border-red-500/20 bg-red-500/10 text-red-400";

    case "Medium":
      return "border-amber-500/20 bg-amber-500/10 text-amber-400";

    default:
      return "border-teal-500/20 bg-teal-500/10 text-teal-400";
  }
}

export default function WarningsCard({ warnings }: WarningsCardProps) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl md:p-8">
      <h2 className="mb-6 font-inter text-2xl font-semibold text-white">
        Reality Checks
      </h2>

      <div className="space-y-4">
        {warnings.map((warning) => (
          <div
            key={warning.title}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
          >
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h3 className="font-inter font-semibold text-white">
                {warning.title}
              </h3>
              <span
                className={`rounded-md border px-2 py-0.5 text-xs font-medium ${getSeverityStyles(warning.severity)}`}
              >
                {warning.severity}
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              {warning.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
