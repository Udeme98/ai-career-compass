import CareerCard from "../components/results/CareerCard";
import RoadmapTimeline from "../components/results/RoadmapTimeline";
import { useLocation, Link } from "react-router-dom";
import UserProfileCard from "../components/results/UserProfileCard";
import FutureProjectionCard from "../components/results/FutureProjectionCard";
import WarningsCard from "../components/results/WarningsCard";

export default function Results() {
  const location = useLocation();
  const results = location.state?.results;

  if (!results) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#030408] px-6 text-zinc-300 font-roboto">
        <div className="absolute top-[-15%] left-[-15%] w-[65%] h-[60%] rounded-full bg-teal-950/15 blur-[160px] pointer-events-none"></div>
        <div className="relative z-10 text-center space-y-4">
          <p className="text-lg text-zinc-400">No results available.</p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 font-bold text-zinc-950 shadow-[0_0_25px_rgba(20,184,166,0.25)] transition-all hover:from-teal-400 hover:to-cyan-400"
          >
            Start Assessment
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#030408] text-zinc-300 overflow-x-hidden font-roboto selection:bg-teal-500/20 selection:text-teal-200">
      <div className="absolute top-[-15%] left-[-15%] w-[65%] h-[60%] rounded-full bg-teal-950/15 blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-15%] w-[60%] h-[55%] rounded-full bg-cyan-950/15 blur-[160px] pointer-events-none"></div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-10 md:py-14">
        <div className="mb-6 flex justify-center md:justify-start">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-200 transition-all hover:border-teal-300/60 hover:bg-teal-500/20"
          >
            ← Back to Home
          </Link>
        </div>

        <h1 className="mb-10 text-center font-inter text-3xl font-bold tracking-tight text-white md:text-4xl">
          Your Career{" "}
          <span className="bg-gradient-to-r from-teal-200 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
            Results
          </span>
        </h1>

        <div className="space-y-8">
          <UserProfileCard profile={results.userProfile} />

          <div>
            <h2 className="mb-4 font-inter text-2xl font-bold tracking-tight text-white">
              Top Career{" "}
              <span className="bg-gradient-to-r from-teal-200 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                Matches
              </span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {results.topCareerMatches?.map((career: any) => (
                <CareerCard key={career.career} career={career} />
              ))}
            </div>
          </div>

          {results.learningRoadmap && (
            <RoadmapTimeline roadmap={results.learningRoadmap} />
          )}

          {results.futureProjection && (
            <FutureProjectionCard projection={results.futureProjection} />
          )}

          {results.warnings && <WarningsCard warnings={results.warnings} />}
        </div>
      </main>
    </div>
  );
}
