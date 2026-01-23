"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";

const WORD_TARGETS = {
  long: 100,
  short: 50,
};

function countWords(value: string) {
  return value
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export default function YaleHackerHouseApplyPage() {
  const [problemResponse, setProblemResponse] = useState("");
  const [interestingResponse, setInterestingResponse] = useState("");
  const [progressResponse, setProgressResponse] = useState("");
  const [builderResponse, setBuilderResponse] = useState("");
  const [helpResponse, setHelpResponse] = useState("");
  const [extraResponse, setExtraResponse] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);

  const problemWordCount = useMemo(
    () => countWords(problemResponse),
    [problemResponse]
  );
  const interestingWordCount = useMemo(
    () => countWords(interestingResponse),
    [interestingResponse]
  );
  const progressWordCount = useMemo(
    () => countWords(progressResponse),
    [progressResponse]
  );
  const builderWordCount = useMemo(
    () => countWords(builderResponse),
    [builderResponse]
  );
  const helpWordCount = useMemo(() => countWords(helpResponse), [helpResponse]);
  const extraWordCount = useMemo(() => countWords(extraResponse), [extraResponse]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus("submitting");
    setSubmissionMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/hacker-house/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result?.error ?? "Unable to submit your application.");
      }

      setSubmissionStatus("success");
      setSubmissionMessage(
        "Application submitted! We'll be in touch if we need anything else."
      );
      form.reset();
      setProblemResponse("");
      setInterestingResponse("");
      setProgressResponse("");
      setBuilderResponse("");
      setHelpResponse("");
      setExtraResponse("");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to submit your application.";
      setSubmissionStatus("error");
      setSubmissionMessage(message);
    }
  };

  return (
    <section className="py-16">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-white/60">
            YALE HACKER HOUSE
          </p>
          <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Apply for Summer 2026
          </h1>
          <p className="mt-4 text-white/70">
            This on-site application mirrors the full Yale Hacker House form. All
            fields marked as required must be completed before submission.
          </p>
        </div>

        {submissionStatus === "success" ? (
          <div className="mt-10 rounded-3xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Application received
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold">
              Thanks for applying to the Yale Hacker House.
            </h2>
            <p className="mt-3 text-sm text-white/70">
              We have your submission and will follow up if we need anything else.
            </p>
          </div>
        ) : (
          <form className="mt-10 space-y-8" method="post" onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2 text-sm text-white/80">
                <span className="font-semibold">First name *</span>
                <input
                  required
                  name="firstName"
                  autoComplete="given-name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                  placeholder="Jane"
                />
              </label>
              <label className="space-y-2 text-sm text-white/80">
                <span className="font-semibold">Last name *</span>
                <input
                  required
                  name="lastName"
                  autoComplete="family-name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                  placeholder="Doe"
                />
              </label>
            </div>

            <label className="block space-y-2 text-sm text-white/80">
              <span className="font-semibold">Email *</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="jane@college.edu"
              />
            </label>

            <label className="block space-y-2 text-sm text-white/80">
              <span className="font-semibold">
                What problem are you obsessed with and why are you the best person to solve
                it? *
              </span>
              <textarea
                required
                name="problem"
                rows={5}
                value={problemResponse}
                onChange={(event) => setProblemResponse(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="Share the problem and why you are uniquely positioned to solve it."
              />
              <div className="flex flex-wrap justify-between text-xs text-white/60">
                <span>Aim for ~{WORD_TARGETS.long} words.</span>
                <span>{problemWordCount} words</span>
              </div>
            </label>

            <label className="block space-y-2 text-sm text-white/80">
              <span className="font-semibold">
                What’s the most interesting thing you’ve built? *
              </span>
              <textarea
                required
                name="interestingBuild"
                rows={5}
                value={interestingResponse}
                onChange={(event) => setInterestingResponse(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="Highlight what you built, your role, and the impact."
              />
              <div className="flex flex-wrap justify-between text-xs text-white/60">
                <span>Aim for ~{WORD_TARGETS.long} words.</span>
                <span>{interestingWordCount} words</span>
              </div>
            </label>

            <label className="block space-y-2 text-sm text-white/80">
              <span className="font-semibold">
                What concrete progress have you made in the last 3 months? *
              </span>
              <textarea
                required
                name="progress"
                rows={4}
                value={progressResponse}
                onChange={(event) => setProgressResponse(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="Share tangible milestones, product updates, or traction."
              />
              <div className="flex flex-wrap justify-between text-xs text-white/60">
                <span>Aim for ~{WORD_TARGETS.short} words.</span>
                <span>{progressWordCount} words</span>
              </div>
            </label>

            <label className="block space-y-2 text-sm text-white/80">
              <span className="font-semibold">
                Where do you want to be as a builder 12 months from now? *
              </span>
              <textarea
                required
                name="builderVision"
                rows={4}
                value={builderResponse}
                onChange={(event) => setBuilderResponse(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="Describe the future you want to build toward."
              />
              <div className="flex flex-wrap justify-between text-xs text-white/60">
                <span>Aim for ~{WORD_TARGETS.short} words.</span>
                <span>{builderWordCount} words</span>
              </div>
            </label>

            <label className="block space-y-2 text-sm text-white/80">
              <span className="font-semibold">
                What would be most helpful to you right now as a builder? *
              </span>
              <textarea
                required
                name="helpful"
                rows={4}
                value={helpResponse}
                onChange={(event) => setHelpResponse(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="Share the support, resources, or connections you need most."
              />
              <div className="flex flex-wrap justify-between text-xs text-white/60">
                <span>Aim for ~{WORD_TARGETS.short} words.</span>
                <span>{helpWordCount} words</span>
              </div>
            </label>

            <fieldset className="space-y-3 text-sm text-white/80">
              <legend className="font-semibold">
                Are you fully committed to building full-time this summer for 10 weeks? *
              </legend>
              <div className="grid gap-3">
                {["YES", "NO"].map((option) => (
                  <label key={option} className="cursor-pointer">
                    <input
                      required
                      type="radio"
                      name="fullTimeCommitment"
                      value={option}
                      className="peer sr-only"
                    />
                    <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/10 peer-checked:border-signal-cyan/60 peer-checked:bg-signal-cyan/20">
                      <span className="h-3 w-3 shrink-0 rounded-full border border-white/30 transition peer-checked:border-signal-cyan/80 peer-checked:bg-signal-cyan/70" />
                      <span className="font-semibold text-white">{option}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="space-y-3 text-sm text-white/80">
              <legend className="font-semibold">
                If accepted, are you 100% committed to joining the house? *
              </legend>
              <div className="grid gap-3">
                {["YES", "NO"].map((option) => (
                  <label key={option} className="cursor-pointer">
                    <input
                      required
                      type="radio"
                      name="houseCommitment"
                      value={option}
                      className="peer sr-only"
                    />
                    <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/10 peer-checked:border-signal-cyan/60 peer-checked:bg-signal-cyan/20">
                      <span className="h-3 w-3 shrink-0 rounded-full border border-white/30 transition peer-checked:border-signal-cyan/80 peer-checked:bg-signal-cyan/70" />
                      <span className="font-semibold text-white">{option}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="space-y-3 text-sm text-white/80">
              <legend className="font-semibold">
                Do you hope to take time off (e.g., 1-2 semesters) or drop out? (Does not
                impact your acceptance) *
              </legend>
              <div className="grid gap-3">
                {["YES", "NO"].map((option) => (
                  <label key={option} className="cursor-pointer">
                    <input
                      required
                      type="radio"
                      name="timeOff"
                      value={option}
                      className="peer sr-only"
                    />
                    <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/10 peer-checked:border-signal-cyan/60 peer-checked:bg-signal-cyan/20">
                      <span className="h-3 w-3 shrink-0 rounded-full border border-white/30 transition peer-checked:border-signal-cyan/80 peer-checked:bg-signal-cyan/70" />
                      <span className="font-semibold text-white">{option}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="space-y-3 text-sm text-white/80">
              <legend className="font-semibold">Do you prefer events that are: *</legend>
              <div className="space-y-3">
                {[
                  "Highly structured (curated panels, pitch reviews, technical workshops)",
                  "Loosely facilitated (intimate dinners, founder office hours, Q&A's)",
                  "Completely organic (mixers, open-house nights, bonding field trips)",
                ].map((option) => (
                  <label key={option} className="cursor-pointer">
                    <input
                      required
                      type="radio"
                      name="eventPreference"
                      value={option}
                      className="peer sr-only"
                    />
                    <span className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/10 peer-checked:border-signal-cyan/60 peer-checked:bg-signal-cyan/20">
                      <span className="mt-1 h-3 w-3 shrink-0 rounded-full border border-white/30 transition peer-checked:border-signal-cyan/80 peer-checked:bg-signal-cyan/70" />
                      <span className="text-white/90">{option}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="block space-y-2 text-sm text-white/80">
              <span className="font-semibold">
                Is there anything else we should know to understand your trajectory as a
                builder?
              </span>
              <textarea
                name="additionalInfo"
                rows={4}
                value={extraResponse}
                onChange={(event) => setExtraResponse(event.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="Optional additional context."
              />
              <div className="flex flex-wrap justify-between text-xs text-white/60">
                <span>Optional.</span>
                <span>{extraWordCount} words</span>
              </div>
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/60">
                By submitting, you agree to be contacted by the Yale Entrepreneurial
                Society about this program.
              </p>
              <button
                type="submit"
                disabled={submissionStatus === "submitting"}
                className="inline-flex items-center justify-center rounded-full border border-signal-cyan/40 bg-signal-cyan/10 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-signal-cyan/20"
              >
                {submissionStatus === "submitting"
                  ? "Submitting..."
                  : "Submit application"}
              </button>
            </div>
            {submissionMessage && (
              <p
                className={`text-sm ${
                  submissionStatus === "success" ? "text-emerald-300" : "text-rose-300"
                }`}
              >
                {submissionMessage}
              </p>
            )}
          </form>
        )}
      </Container>
    </section>
  );
}
