// import { mockResults } from "../data/mockResults";
import CareerCard from "../components/results/CareerCard";
import RoadmapTimeline from "../components/results/RoadmapTimeline";
import { useLocation } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  const results = location.state?.results;

  if (!results) {
    return <div className="p-8">No results available.</div>;
  }

  console.log(results.marketAnalysis);

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-8 text-4xl font-bold">Your Career Results</h1>
      <pre className="mb-8 rounded bg-gray-100 p-4">
        {JSON.stringify(results, null, 2)}
      </pre>

      <div className="grid gap-6 md:grid-cols-2">
        {results.topCareerMatches?.map((career: any) => (
          <CareerCard key={career.career} career={career} />
        ))}
      </div>

      <div className="mt-8">
        {results.learningRoadmap && (
          <div className="mt-8">
            <RoadmapTimeline roadmap={results.learningRoadmap} />
          </div>
        )}
      </div>
    </div>
  );
}
