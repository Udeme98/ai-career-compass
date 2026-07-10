import type { FutureProjection } from "../../types/career";

interface FutureProjectionCardProps {
  projection: FutureProjection;
}

export default function FutureProjectionCard({
  projection,
}: FutureProjectionCardProps) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">🚀 Future Career Projection</h2>

      <h3 className="font-semibold">Career</h3>
      <p>{projection.career}</p>

      <h3 className="mt-4 font-semibold">📈 Outlook</h3>
      <p>{projection.outlook}</p>

      <h3 className="mt-4 font-semibold">💰 Salary Potential</h3>
      <p>{projection.salaryPotential}</p>

      <h3 className="mt-4 font-semibold">📊 Growth Potential</h3>
      <p>{projection.growthPotential}</p>

      <h3 className="mt-4 font-semibold">🏆 Possible Future Roles</h3>
      <ul className="list-disc pl-5">
        {projection.nextRoles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>

      <h3 className="mt-4 font-semibold">📚 Skills to Learn</h3>
      <ul className="list-none pl-5">
        {projection.futureSkills.map((skill) => (
          <li key={skill}>✓ {skill}</li>
        ))}
      </ul>
    </div>
  );
}
