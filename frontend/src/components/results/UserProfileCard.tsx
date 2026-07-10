import type { UserProfile } from "../../types/career";

interface UserProfileCardProps {
  profile: UserProfile;
}

export default function UserProfileCard({ profile }: UserProfileCardProps) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm">
      <h2 className="mb-4 text-2xl font-bold">👤 Your AI Profile</h2>
      <h3 className="font-semibold">Summary</h3>
      <p>{profile.summary}</p>

      <h3 className="font-semibold">Strengths</h3>
      <ul className="list-none pl-5">
        {profile.strengths.map((strength) => (
          <li key={strength}>✓ {strength}</li>
        ))}
      </ul>
      <h3 className="font-semibold">Growth Areas</h3>
      <ul className="list-none pl-5">
        {profile.growthAreas.map((area) => (
          <li key={area}>⚠ {area}</li>
        ))}
      </ul>

      <h3 className="font-semibold">Learning Style</h3>
      <p>{profile.learningStyle}</p>

      <h3 className="font-semibold">Recommended Environment</h3>
      <p>{profile.recommendedEnvironment}</p>
    </div>
  );
}
