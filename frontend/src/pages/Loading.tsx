export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />

      <h2 className="mt-6 text-2xl font-semibold">Analyzing your profile...</h2>

      <p className="mt-2 text-gray-600">
        Finding the best tech career matches.
      </p>
    </div>
  );
}
