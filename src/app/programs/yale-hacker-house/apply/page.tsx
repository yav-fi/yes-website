"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";

const WORD_TARGETS = {
  build: 50,
  why: 100,
};

function countWords(value: string) {
  return value
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export default function YaleHackerHouseApplyPage() {
  const [buildResponse, setBuildResponse] = useState("");
  const [whyResponse, setWhyResponse] = useState("");

  const buildWordCount = useMemo(() => countWords(buildResponse), [buildResponse]);
  const whyWordCount = useMemo(() => countWords(whyResponse), [whyResponse]);

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

        <form className="mt-10 space-y-8" method="post">
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

          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-white/80">
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
            <label className="space-y-2 text-sm text-white/80">
              <span className="font-semibold">Phone number *</span>
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="+1 (555) 555-5555"
              />
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <label className="space-y-2 text-sm text-white/80">
              <span className="font-semibold">Yale affiliation *</span>
              <select
                required
                name="affiliation"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
              >
                <option className="bg-black" value="">
                  Select one
                </option>
                <option className="bg-black" value="yale-college">
                  Yale College
                </option>
                <option className="bg-black" value="graduate">
                  Graduate/Professional School
                </option>
                <option className="bg-black" value="alumni">
                  Alumni
                </option>
                <option className="bg-black" value="other">
                  Other Yale affiliation
                </option>
              </select>
            </label>
            <label className="space-y-2 text-sm text-white/80">
              <span className="font-semibold">Graduation year *</span>
              <input
                required
                type="number"
                name="gradYear"
                min="2025"
                max="2032"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="2027"
              />
            </label>
            <label className="space-y-2 text-sm text-white/80">
              <span className="font-semibold">Major / department *</span>
              <input
                required
                name="major"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="Computer Science"
              />
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-white/80">
              <span className="font-semibold">Current location *</span>
              <input
                required
                name="location"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="New Haven, CT"
              />
            </label>
            <label className="space-y-2 text-sm text-white/80">
              <span className="font-semibold">Technical focus *</span>
              <input
                required
                name="technicalFocus"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="AI/ML, full-stack, systems, etc."
              />
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-white/80">
              <span className="font-semibold">Project / company name *</span>
              <input
                required
                name="projectName"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="Project Atlas"
              />
            </label>
            <label className="space-y-2 text-sm text-white/80">
              <span className="font-semibold">Co-founders / team *</span>
              <input
                required
                name="team"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="Names, roles, and affiliations"
              />
            </label>
          </div>

          <label className="block space-y-2 text-sm text-white/80">
            <span className="font-semibold">Are you building full-time this summer? *</span>
            <select
              required
              name="fullTime"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
            >
              <option className="bg-black" value="">
                Select one
              </option>
              <option className="bg-black" value="yes">
                Yes, full-time
              </option>
              <option className="bg-black" value="part-time">
                Part-time
              </option>
              <option className="bg-black" value="not-sure">
                Not sure yet
              </option>
            </select>
          </label>

          <label className="block space-y-2 text-sm text-white/80">
            <span className="font-semibold">What are you building? *</span>
            <textarea
              required
              name="buildDescription"
              rows={4}
              value={buildResponse}
              onChange={(event) => setBuildResponse(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
              placeholder="Describe the product, who it serves, and the current stage."
            />
            <div className="flex flex-wrap justify-between text-xs text-white/60">
              <span>Aim for ~{WORD_TARGETS.build} words.</span>
              <span>{buildWordCount} words</span>
            </div>
          </label>

          <label className="block space-y-2 text-sm text-white/80">
            <span className="font-semibold">Why is Yale Hacker House the right fit? *</span>
            <textarea
              required
              name="whyHackerHouse"
              rows={5}
              value={whyResponse}
              onChange={(event) => setWhyResponse(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
              placeholder="Share what you hope to gain, mentors you want to meet, and what you will contribute."
            />
            <div className="flex flex-wrap justify-between text-xs text-white/60">
              <span>Aim for ~{WORD_TARGETS.why} words.</span>
              <span>{whyWordCount} words</span>
            </div>
          </label>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-white/80">
              <span className="font-semibold">LinkedIn URL *</span>
              <input
                required
                type="url"
                name="linkedin"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="https://linkedin.com/in/username"
              />
            </label>
            <label className="space-y-2 text-sm text-white/80">
              <span className="font-semibold">GitHub / portfolio URL *</span>
              <input
                required
                type="url"
                name="github"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
                placeholder="https://github.com/username"
              />
            </label>
          </div>

          <label className="block space-y-2 text-sm text-white/80">
            <span className="font-semibold">Resume / deck URL *</span>
            <input
              required
              type="url"
              name="resume"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-signal-cyan/60"
              placeholder="Link to Google Drive, Notion, or PDF"
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/60">
              By submitting, you agree to be contacted by the Yale Entrepreneurial
              Society about this program.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border border-signal-cyan/40 bg-signal-cyan/10 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-signal-cyan/20"
            >
              Submit application
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
