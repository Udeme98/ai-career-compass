import type { CareerMatch } from "../../types/career";

interface CareerCardProps {
  career: CareerMatch;
}

export default function CareerCard({ career }: CareerCardProps) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="font-inter text-xl font-semibold text-white">
          {career.career}
        </h3>

        <span className="shrink-0 rounded-lg border border-teal-500/20 bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-400">
          {career.matchScore}%
        </span>
      </div>

      <p className="mb-5 text-zinc-400 leading-relaxed">{career.fitReason}</p>

      <div className="mb-4">
        <h4 className="mb-2 text-sm font-semibold tracking-wide text-teal-400/80 uppercase">
          Advantages
        </h4>

        <ul className="space-y-1.5 text-zinc-300">
          {career.pros.map((pro) => (
            <li key={pro} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
              {pro}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-2 text-sm font-semibold tracking-wide text-zinc-500 uppercase">
          Considerations
        </h4>

        <ul className="space-y-1.5 text-zinc-400">
          {career.cons.map((con) => (
            <li key={con} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
