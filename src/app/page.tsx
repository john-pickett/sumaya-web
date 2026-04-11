import Image from "next/image";
import type { Metadata } from "next";
import DownloadButtons from "@/components/DownloadButtons";

export const metadata: Metadata = {
  title: "Sumaya — Your Pocket of Peace",
  description:
    "Sumaya is a free meditation and breathing exercise app for iOS and Android. Five science-backed techniques matched to how you feel, a meditation timer, and a journey calendar to track your habit.",
};

const BREATHING_EXERCISES = [
  {
    name: "Box Breathing",
    emotion: "Feeling stressed or overwhelmed?",
    description:
      "Equal 4-count inhale, hold, exhale, and hold — a Navy SEAL favorite for staying calm under pressure.",
    color: "#5B8DB8",
    bg: "#EBF3F9",
  },
  {
    name: "4-7-8 Breathing",
    emotion: "Feeling anxious or restless?",
    description:
      "Inhale 4, hold 7, exhale 8 — activates your parasympathetic nervous system to quiet a racing mind.",
    color: "#7B68B5",
    bg: "#F0EDFB",
  },
  {
    name: "Coherent Breathing",
    emotion: "Feeling sad or low?",
    description:
      "A slow, balanced 5-5 breath pattern that stabilizes your heart rate and lifts your baseline mood.",
    color: "#6BAE8E",
    bg: "#EAF5EF",
  },
  {
    name: "Physiological Sigh",
    emotion: "Feeling panicked?",
    description:
      "A double-inhale followed by a long exhale — scientifically shown to reduce acute stress in seconds.",
    color: "#E07B5A",
    bg: "#FAF0EB",
  },
  {
    name: "Energizing Breath",
    emotion: "Feeling tired or foggy?",
    description:
      "Rapid rhythmic breathing that increases oxygen flow and gives you a natural energy boost.",
    color: "#C49A10",
    bg: "#FDF8E7",
  },
];

const FEATURES = [
  {
    emoji: "🧘",
    title: "Meditate",
    description:
      "Sit for 2 to 30 minutes. A gentle timer with a soothing chime marks the end of your session. Track your streak and build a daily habit.",
  },
  {
    emoji: "🌬️",
    title: "Breathe",
    description:
      "Five science-backed breathing techniques, each matched to a specific emotion. Just tell Sumaya how you feel and it guides the rest.",
  },
  {
    emoji: "🗺️",
    title: "Journey",
    description:
      "A calendar of your practice. See every meditation and breathing session, your longest streak, and how your mood tends to shift after each session.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="bg-[#F7F5F2] py-20 md:py-28 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-[#7B68B5]/10 text-[#7B68B5] text-sm font-semibold px-3 py-1.5 rounded-full w-fit">
              <span>Free · No account required</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A2E] leading-tight tracking-tight">
              Your pocket{" "}
              <span className="text-[#7B68B5]">of peace.</span>
            </h1>
            <p className="text-lg text-[#6F6B66] leading-relaxed max-w-md">
              Meditation and breathing exercises for everyday life. Find calm
              anywhere — whether you have 2 minutes or 30.
            </p>
            <DownloadButtons size="lg" />
          </div>

          {/* App screenshot */}
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-[#7B68B5]/10 rounded-full blur-3xl scale-110" />
            <Image
              src="/app-screens/meditate.png"
              alt="Sumaya meditation timer screen"
              width={260}
              height={560}
              className="relative rounded-[40px] shadow-2xl border border-[#E7E1D8]"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Features Overview ───────────────────────────────────── */}
      <section className="bg-[#FFFDF9] py-20 border-y border-[#E7E1D8]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Everything you need to feel better
            </h2>
            <p className="text-[#6F6B66] text-lg max-w-xl mx-auto">
              Three tools, one simple app. No subscriptions, no sign-ups, no
              clutter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-[#F7F5F2] rounded-2xl p-7 border border-[#E7E1D8]"
              >
                <div className="text-4xl mb-4">{f.emoji}</div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                  {f.title}
                </h3>
                <p className="text-[#6F6B66] text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Breathing Exercises ─────────────────────────────────── */}
      <section className="bg-[#1A1A2E] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Breathe through what you feel
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Each technique is matched to an emotional state. Tell Sumaya how
              you feel — it guides the rest.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            {BREATHING_EXERCISES.map((ex) => (
              <div
                key={ex.name}
                className="rounded-2xl p-6 border"
                style={{
                  backgroundColor: ex.bg,
                  borderColor: ex.color + "33",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full mb-4"
                  style={{ backgroundColor: ex.color }}
                />
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-1"
                  style={{ color: ex.color }}
                >
                  {ex.emotion}
                </p>
                <h3 className="text-base font-bold text-[#1A1A2E] mb-2">
                  {ex.name}
                </h3>
                <p className="text-sm text-[#6F6B66] leading-relaxed">
                  {ex.description}
                </p>
              </div>
            ))}

            {/* App screenshot card */}
            <div className="rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center bg-[#7B68B5]/20 py-8">
              <Image
                src="/app-screens/breathing.png"
                alt="Breathing exercise selection screen"
                width={200}
                height={400}
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Journey Tracking ────────────────────────────────────── */}
      <section className="bg-[#F7F5F2] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Screenshot */}
            <div className="flex-shrink-0">
              <Image
                src="/app-screens/history.png"
                alt="Journey calendar screen showing session history"
                width={260}
                height={540}
                className="rounded-[40px] shadow-2xl border border-[#E7E1D8]"
              />
            </div>

            <div className="flex flex-col gap-6 flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] leading-tight">
                Watch your habit grow
              </h2>
              <p className="text-[#6F6B66] text-lg leading-relaxed">
                The Journey tab is a full picture of your practice. Every
                session leaves a mark on the calendar — green for meditation,
                amber for breathing.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: "🔥",
                    label: "Streak tracking",
                    detail:
                      "Current and best streak, so you can keep the momentum going.",
                  },
                  {
                    icon: "📅",
                    label: "Session calendar",
                    detail:
                      "A month-view calendar with color-coded dots for every session.",
                  },
                  {
                    icon: "😊",
                    label: "Mood trends",
                    detail:
                      "Log how you feel after each session and see your most common post-practice mood.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#FFFDF9] border border-[#E7E1D8] rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A1A2E]">
                        {item.label}
                      </p>
                      <p className="text-sm text-[#6F6B66] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Meditate teaser ──────────────────────────────── */}
      <section className="bg-[#FFFDF9] border-y border-[#E7E1D8] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-[#7B68B5] text-sm font-semibold uppercase tracking-widest mb-3">
                Built-in guide
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4 leading-tight">
                New to meditation?
                <br />
                We&apos;ve got you.
              </h2>
              <p className="text-[#6F6B66] text-lg leading-relaxed max-w-md">
                Sumaya includes a plain-language guide that explains exactly
                what to do — from how to sit, to what to focus on, to why your
                mind wandering is actually a feature, not a bug.
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-3">
              {[
                "Getting Comfortable",
                "What to Focus On",
                "When Your Mind Wanders",
                "Dealing With Interruptions",
                "How Long to Sit",
                "A Few Other Things Worth Knowing",
              ].map((topic, i) => (
                <div
                  key={topic}
                  className="flex items-center gap-3 bg-[#F7F5F2] rounded-xl px-4 py-3 border border-[#E7E1D8]"
                >
                  <span className="w-6 h-6 rounded-full bg-[#7B68B5]/10 text-[#7B68B5] text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-[#1A1A2E]">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Download CTA ────────────────────────────────────────── */}
      <section className="bg-[#1A1A2E] py-24">
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <Image
            src="/icon.png"
            alt="Sumaya"
            width={80}
            height={80}
            className="rounded-2xl shadow-xl"
          />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Meditate. Breathe. Reset.
            </h2>
            <p className="text-white/60 text-xl max-w-md mx-auto">
              Free on iOS and Android. No account, no subscription, no catch.
            </p>
          </div>
          <DownloadButtons variant="dark" size="lg" />
        </div>
      </section>
    </>
  );
}
