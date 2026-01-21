const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

const WORD_LIMITS = {
  long: { min: 50, max: 200 },
  short: { min: 25, max: 120 },
  optional: { max: 200 },
};

const EVENT_PREFERENCES = new Set([
  "Highly structured (curated panels, pitch reviews, technical workshops)",
  "Loosely facilitated (intimate dinners, founder office hours, Q&A's)",
  "Completely organic (mixers, open-house nights, bonding field trips)",
]);

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function normalizeString(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim();
}

function countWords(value: string) {
  return value
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function parseYesNo(value: unknown) {
  if (typeof value === "string") {
    const normalized = value.trim().toUpperCase();
    if (normalized === "YES") {
      return true;
    }
    if (normalized === "NO") {
      return false;
    }
  }
  if (typeof value === "boolean") {
    return value;
  }
  return null;
}

function validateWordCount(
  value: string,
  { min, max }: { min?: number; max?: number },
  label: string,
  errors: string[]
) {
  const wordCount = countWords(value);
  if (min !== undefined && wordCount < min) {
    errors.push(`${label} must be at least ${min} words.`);
  }
  if (max !== undefined && wordCount > max) {
    errors.push(`${label} must be ${max} words or fewer.`);
  }
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);
  if (!existing || now > existing.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  rateLimitStore.set(ip, existing);
  return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - existing.count };
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    return Response.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  const payload = await request.json().catch(() => null);
  if (!payload || typeof payload !== "object") {
    return Response.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const firstName = normalizeString(payload.firstName);
  const lastName = normalizeString(payload.lastName);
  const email = normalizeString(payload.email).toLowerCase();
  const problem = normalizeString(payload.problem);
  const interestingBuild = normalizeString(payload.interestingBuild);
  const progress = normalizeString(payload.progress);
  const builderVision = normalizeString(payload.builderVision);
  const helpful = normalizeString(payload.helpful);
  const additionalInfo = normalizeString(payload.additionalInfo);
  const fullTimeCommitment = parseYesNo(payload.fullTimeCommitment);
  const houseCommitment = parseYesNo(payload.houseCommitment);
  const timeOff = parseYesNo(payload.timeOff);
  const eventPreference = normalizeString(payload.eventPreference);

  const errors: string[] = [];

  if (!firstName) {
    errors.push("First name is required.");
  }
  if (!lastName) {
    errors.push("Last name is required.");
  }
  if (!email) {
    errors.push("Email is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("Email must be valid.");
  }

  if (!problem) {
    errors.push("Problem response is required.");
  }
  if (!interestingBuild) {
    errors.push("Interesting build response is required.");
  }
  if (!progress) {
    errors.push("Progress response is required.");
  }
  if (!builderVision) {
    errors.push("Builder vision response is required.");
  }
  if (!helpful) {
    errors.push("Helpful response is required.");
  }

  if (fullTimeCommitment === null) {
    errors.push("Full-time commitment selection is required.");
  }
  if (houseCommitment === null) {
    errors.push("House commitment selection is required.");
  }
  if (timeOff === null) {
    errors.push("Time off selection is required.");
  }
  if (!eventPreference) {
    errors.push("Event preference selection is required.");
  } else if (!EVENT_PREFERENCES.has(eventPreference)) {
    errors.push("Event preference selection is invalid.");
  }

  if (problem) {
    validateWordCount(problem, WORD_LIMITS.long, "Problem response", errors);
  }
  if (interestingBuild) {
    validateWordCount(
      interestingBuild,
      WORD_LIMITS.long,
      "Interesting build response",
      errors
    );
  }
  if (progress) {
    validateWordCount(progress, WORD_LIMITS.short, "Progress response", errors);
  }
  if (builderVision) {
    validateWordCount(
      builderVision,
      WORD_LIMITS.short,
      "Builder vision response",
      errors
    );
  }
  if (helpful) {
    validateWordCount(helpful, WORD_LIMITS.short, "Helpful response", errors);
  }
  if (additionalInfo) {
    validateWordCount(
      additionalInfo,
      WORD_LIMITS.optional,
      "Additional info response",
      errors
    );
  }

  if (errors.length > 0) {
    return Response.json({ error: errors.join(" ") }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return Response.json(
      { error: "Supabase environment variables are not configured." },
      { status: 500 }
    );
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/hacker_house_applications`, {
    method: "POST",
    headers: {
      apikey: supabaseServiceRoleKey,
      Authorization: `Bearer ${supabaseServiceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify([
      {
        first_name: firstName,
        last_name: lastName,
        full_name: `${firstName} ${lastName}`.trim(),
        email,
        problem_response: problem,
        interesting_build_response: interestingBuild,
        progress_response: progress,
        builder_vision_response: builderVision,
        helpful_response: helpful,
        additional_info: additionalInfo || null,
        full_time_commitment: fullTimeCommitment,
        house_commitment: houseCommitment,
        time_off: timeOff,
        event_preference: eventPreference,
      },
    ]),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return Response.json(
      { error: "Failed to save application.", details: errorText },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
