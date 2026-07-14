import type { LearningRoadmap } from "../../types/career";

interface Props {
  roadmap: LearningRoadmap;
}

export default function RoadmapTimeline({ roadmap }: Props) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl md:p-8">
      <h2 className="mb-6 font-inter text-2xl font-semibold text-white">
        90-Day Learning Roadmap
      </h2>

      <div className="space-y-6">
        {roadmap.phases.map((phase) => (
          <div
            key={phase.title}
            className="relative border-l border-teal-500/30 pl-5"
          >
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]" />

            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="font-inter font-semibold text-white">
                {phase.title}
              </h3>
              <span className="text-sm text-teal-400/70">{phase.duration}</span>
            </div>

            <ul className="mt-2 space-y-1.5 text-zinc-400">
              {phase.topics.map((topic) => (
                <li key={topic} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
