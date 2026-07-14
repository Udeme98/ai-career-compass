import type { UserProfile } from "../../types/career";

interface UserProfileCardProps {
  profile: UserProfile;
}

export default function UserProfileCard({ profile }: UserProfileCardProps) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl md:p-8">
      <h2 className="mb-6 font-inter text-2xl font-semibold text-white">
        Your AI Profile
      </h2>

      <div className="space-y-5">
        <div>
          <h3 className="mb-1.5 text-sm font-semibold tracking-wide text-teal-400/80 uppercase">
            Summary
          </h3>
          <p className="text-zinc-400 leading-relaxed">{profile.summary}</p>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold tracking-wide text-teal-400/80 uppercase">
            Strengths
          </h3>
          <ul className="space-y-1.5 text-zinc-300">
            {profile.strengths.map((strength) => (
              <li key={strength} className="flex gap-2">
                <span className="text-teal-400">✓</span>
                {strength}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold tracking-wide text-zinc-500 uppercase">
            Growth Areas
          </h3>
          <ul className="space-y-1.5 text-zinc-400">
            {profile.growthAreas.map((area) => (
              <li key={area} className="flex gap-2">
                <span className="text-amber-400/80">→</span>
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <h3 className="mb-1.5 text-sm font-semibold tracking-wide text-teal-400/80 uppercase">
              Learning Style
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              {profile.learningStyle}
            </p>
          </div>

          <div>
            <h3 className="mb-1.5 text-sm font-semibold tracking-wide text-teal-400/80 uppercase">
              Recommended Environment
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              {profile.recommendedEnvironment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
