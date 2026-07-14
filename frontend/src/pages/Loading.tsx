import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { analyzeCareer } from "../api/careerApi";

const STATUS_MESSAGES = [
  "Analyzing your profile...",
  "Matching careers to your strengths...",
  "Building your learning roadmap...",
  "Projecting your career outlook...",
];

export default function Loading() {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers;

  const [statusIndex, setStatusIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!answers) {
      navigate("/", { replace: true });
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const results = await analyzeCareer(answers);

        if (!cancelled) {
          navigate("/results", {
            replace: true,
            state: { results },
          });
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setError(
            "Something went wrong while analyzing your answers. Please try again.",
          );
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [answers, navigate, attempt]);

  useEffect(() => {
    if (error || !answers) return;

    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [error, answers, attempt]);

  const handleRetry = () => {
    setError(null);
    setStatusIndex(0);
    setAttempt((prev) => prev + 1);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#030408] px-6 text-zinc-300 overflow-hidden font-roboto selection:bg-teal-500/20 selection:text-teal-200">
      <div className="absolute top-[-15%] left-[-15%] w-[65%] h-[60%] rounded-full bg-teal-950/15 blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-15%] w-[60%] h-[55%] rounded-full bg-cyan-950/15 blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        {error ? (
          <div className="w-full rounded-xl border border-white/[0.08] bg-white/[0.02] p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl">
            <h2 className="font-inter text-2xl font-semibold text-white">
              Analysis failed
            </h2>
            <p className="mt-3 text-zinc-400 leading-relaxed">{error}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={handleRetry}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 font-bold text-zinc-950 shadow-[0_0_25px_rgba(20,184,166,0.25)] transition-all hover:from-teal-400 hover:to-cyan-400"
              >
                Try again
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] px-6 py-3 text-zinc-300 transition-all hover:border-white/[0.14] hover:bg-white/[0.04]"
              >
                Back to start
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="relative flex h-16 w-16 items-center justify-center">
              <div className="absolute h-16 w-16 animate-spin rounded-full border-2 border-teal-500/20 border-t-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.25)]" />
              <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
            </div>

            <h2 className="mt-8 font-inter text-2xl font-semibold text-white md:text-3xl">
              {STATUS_MESSAGES[statusIndex]}
            </h2>

            <p className="mt-3 max-w-sm text-zinc-400 leading-relaxed">
              Finding the best tech career matches for your skills and goals.
            </p>

            <p className="mt-6 text-sm font-semibold tracking-wider text-teal-500/60 uppercase">
              This usually takes a few moments
            </p>
          </>
        )}
      </div>
    </div>
  );
}
