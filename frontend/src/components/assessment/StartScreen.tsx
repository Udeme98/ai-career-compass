interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="mb-4 text-5xl font-bold">AI Career Compass</h1>

      <p className="mb-8 text-lg text-gray-600">
        Discover which tech career best aligns with your interests, skills,
        goals, and learning preferences.
      </p>

      <p className="mb-8 text-sm text-gray-500">Takes about 5 minutes.</p>

      <button
        onClick={onStart}
        className="rounded-xl bg-indigo-600 px-6 py-3 text-white"
      >
        Start Assessment
      </button>
    </div>
  );
}
