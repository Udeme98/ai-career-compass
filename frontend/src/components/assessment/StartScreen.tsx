import { ArrowRight, Cpu, Target, Layers } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative min-h-screen bg-[#030408] text-zinc-300 overflow-x-hidden font-roboto selection:bg-teal-500/20 selection:text-teal-200 flex flex-col">
      <div className="absolute top-[-15%] left-[-15%] w-[65%] h-[60%] rounded-full bg-teal-950/15 blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-15%] w-[60%] h-[55%] rounded-full bg-cyan-950/15 blur-[160px] pointer-events-none"></div>
      <main className="relative z-10 max-w-5xl w-full mx-auto px-6 flex flex-col justify-center items-center flex-1 pt-12 md:pt-0">
        <div className="w-full flex flex-col items-center">
          {/* Main Title Header (Subdued dark text with soft transitions) */}
          <div className="max-w-4xl text-center space-y-6 mb-16">
            <h1 className="font-inter text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
              AI-Powered Career Guidance
              <br />
              <span className="bg-gradient-to-r from-teal-200 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                for Future Tech Professionals
              </span>
            </h1>

            <p className="max-w-xl mx-auto text-sm md:text-lg text-zinc-400 leading-relaxed font-light">
              Discover which tech career best aligns with your interests,
              skills, goals, and learning preferences. Step into the future of
              engineering, design, and analysis.
            </p>

            {/* Sophisticated Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <button
                onClick={onStart}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 px-6 py-3 text-zinc-950 font-bold font-roboto text-base transition-all shadow-[0_0_25px_rgba(20,184,166,0.25)] hover:shadow-[0_0_35px_rgba(20,184,166,0.35)]"
              >
                Start Assessment
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <p className="text-[15px] text-teal-500/60 font-semibold tracking-wider uppercase">
              ⏱️ Takes about 3 minutes
            </p>
          </div>

          {/* Matrix Card Grid layout from image_0e5efa.png with high glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl mt-4">
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <Cpu className="h-4 w-4" />
                </div>
                <h3 className="font-inter font-semibold text-white text-base">
                  Interactive
                </h3>
              </div>
              <p className="text-base text-zinc-500 leading-relaxed">
                Calibrate your natural style against real modern industry
                parameters and requirements.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <Target className="h-4 w-4" />
                </div>
                <h3 className="font-inter font-semibold text-white text-base">
                  Guided Roadmaps
                </h3>
              </div>
              <p className="text-base text-zinc-500 leading-relaxed">
                Obtain step-by-step career path guides with real technologies to
                conquer next.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <Layers className="h-4 w-4" />
                </div>
                <h3 className="font-inter font-semibold text-white text-base">
                  Alignment Matrix
                </h3>
              </div>
              <p className="text-base text-zinc-500 leading-relaxed">
                Analyze compatibility parameters visualized with real-time
                vector charts.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
