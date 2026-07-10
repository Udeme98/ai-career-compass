import type { Warning } from "../../types/career";

interface WarningsCardProps {
  warnings: Warning[];
}

function getSeverityColor(severity: Warning["severity"]) {
  switch (severity) {
    case "High":
      return "text-red-600";

    case "Medium":
      return "text-yellow-600";

    default:
      return "text-green-600";
  }
}

export default function WarningsCard({ warnings }: WarningsCardProps) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">⚠️ Reality Checks</h2>

      <div className="space-y-4">
        {warnings.map((warning) => (
          <div key={warning.title}>
            <h3 className={`font-semibold ${getSeverityColor(warning.severity)}`}>
              {warning.title}
            </h3>
            <p>{warning.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
