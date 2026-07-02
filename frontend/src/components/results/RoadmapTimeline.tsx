import type { LearningRoadmap } from "../../types/career";

interface Props {
  roadmap: LearningRoadmap;
}

export default function RoadmapTimeline({ roadmap }: Props) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold">90-Day Learning Roadmap</h2>

      {roadmap.phases.map((phase) => (
        <div key={phase.title} className="mb-6">
          <h3 className="font-semibold">{phase.title}</h3>

          <p className="text-sm text-gray-500">{phase.duration}</p>

          <ul className="mt-2 list-disc pl-5">
            {phase.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
