import type { CareerMatch } from "../../types/career";

interface CareerCardProps {
  career: CareerMatch;
}

export default function CareerCard({ career }: CareerCardProps) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold">{career.career}</h3>

        <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium">
          {career.matchScore}%
        </span>
      </div>

      <p className="mb-4 text-gray-600">{career.fitReason}</p>

      <div className="mb-4">
        <h4 className="font-medium">Advantages</h4>

        <ul className="mt-2 list-disc pl-5">
          {career.pros.map((pro) => (
            <li key={pro}>{pro}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-medium">Considerations</h4>

        <ul className="mt-2 list-disc pl-5">
          {career.cons.map((con) => (
            <li key={con}>{con}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
