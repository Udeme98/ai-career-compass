import type { FutureProjection } from "../../types/career";

interface FutureProjectionCardProps {
  projection: FutureProjection;
}

export default function FutureProjectionCard({
  projection,
}: FutureProjectionCardProps) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl md:p-8">
      <h2 className="mb-6 font-inter text-2xl font-semibold text-white">
        Future Career Projection
      </h2>

      <div className="space-y-5">
        <div>
          <h3 className="mb-1.5 text-sm font-semibold tracking-wide text-teal-400/80 uppercase">
            Career
          </h3>
          <p className="text-zinc-300">{projection.career}</p>
        </div>

        <div>
          <h3 className="mb-1.5 text-sm font-semibold tracking-wide text-teal-400/80 uppercase">
            Outlook
          </h3>
          <p className="text-zinc-400 leading-relaxed">{projection.outlook}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <h3 className="mb-1.5 text-sm font-semibold tracking-wide text-teal-400/80 uppercase">
              Salary Potential
            </h3>
            <p className="text-zinc-300">{projection.salaryPotential}</p>
          </div>

          <div>
            <h3 className="mb-1.5 text-sm font-semibold tracking-wide text-teal-400/80 uppercase">
              Growth Potential
            </h3>
            <p className="text-zinc-300">{projection.growthPotential}</p>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold tracking-wide text-teal-400/80 uppercase">
            Possible Future Roles
          </h3>
          <ul className="space-y-1.5 text-zinc-400">
            {projection.nextRoles.map((role) => (
              <li key={role} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                {role}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold tracking-wide text-teal-400/80 uppercase">
            Skills to Learn
          </h3>
          <ul className="space-y-1.5 text-zinc-300">
            {projection.futureSkills.map((skill) => (
              <li key={skill} className="flex gap-2">
                <span className="text-teal-400">✓</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
