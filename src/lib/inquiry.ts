export const inquiryFocusOptions = [
  {
    value: "ai-revenue-systems",
    label: "AI Revenue",
    hint: "Where do inquiries arrive, and what should happen before the sales team takes over?",
  },
  {
    value: "ai-operations-agents",
    label: "AI Operations & Agents",
    hint: "Which repeated task or handoff should work better, and which tools are involved?",
  },
  {
    value: "saas-development",
    label: "SaaS & Custom Web Apps",
    hint: "Who will use it, and what is the first useful workflow it should support?",
  },
  {
    value: "ai-content-flows",
    label: "AI Content Workflow",
    hint: "What content do you create, and which steps would you like to make easier?",
  },
  {
    value: "web-apps-platforms",
    label: "Custom Web App",
    hint: "Tell us about the people, business rules, and workflow your platform needs to support.",
  },
  {
    value: "web-development",
    label: "Website / Digital Experience",
    hint: "What should the website help visitors understand or do?",
  },
  {
    value: "enterprise-ai-training",
    label: "Enterprise AI Training",
    hint: "For enterprise teams in Bangladesh. Tell us about your team, its roles, and what people need to learn.",
  },
  {
    value: "other",
    label: "Other",
    hint: "Start with the problem. You do not need to know the solution yet.",
  },
] as const;

export type InquiryFocus = (typeof inquiryFocusOptions)[number]["value"];

export const inquirySources = [
  "/",
  "/contact",
  "/services",
  "/services/ai-automation",
  "/labs",
  "/services/saas-development",
  "/services/web-development",
  "/work",
  "/about",
] as const;

export type InquirySource = (typeof inquirySources)[number];

export function isInquiryFocus(value: unknown): value is InquiryFocus {
  return inquiryFocusOptions.some((option) => option.value === value);
}

export function isInquirySource(value: unknown): value is InquirySource {
  return inquirySources.some((source) => source === value);
}

export function inquiryContext(
  focus: string | string[] | undefined,
  source: string | string[] | undefined,
): { focus: InquiryFocus | ""; source: InquirySource } {
  const legacy: Record<string, InquiryFocus> = {
    "ai-automation": "ai-operations-agents",
    "ai-ugc-creative": "other",
    "another-capability": "other",
    "not-sure": "other",
  };
  const resolved =
    typeof focus === "string"
      ? Object.hasOwn(legacy, focus)
        ? legacy[focus]
        : focus
      : undefined;
  const knownFocus = isInquiryFocus(resolved) ? resolved : "";
  const serviceSource =
    knownFocus === "ai-operations-agents" || knownFocus === "ai-revenue-systems"
      ? "/services/ai-automation"
      : knownFocus === "web-apps-platforms" ||
          knownFocus === "ai-content-flows" ||
          knownFocus === "enterprise-ai-training"
        ? "/services"
        : `/services/${knownFocus}`;
  return {
    focus: knownFocus,
    source: isInquirySource(source)
      ? source
      : isInquirySource(serviceSource)
        ? serviceSource
        : "/contact",
  };
}

export const inquiryLimits = {
  name: 120,
  company: 160,
  email: 254,
  country: 100,
  phone: 80,
  budget: 160,
  brief: 4000,
  systems: 1000,
  outcome: 1000,
  timing: 160,
  website: 200,
} as const;

export type InquiryFields = {
  name: string;
  company: string;
  email: string;
  country: string;
  phone: string;
  budget: string;
  focus: InquiryFocus | "";
  brief: string;
  systems: string;
  outcome: string;
  timing: string;
  website: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryFields, string>>;
export type ValidatedInquiry = InquiryFields & { focus: InquiryFocus };

const singleLineFields = [
  "name",
  "company",
  "email",
  "country",
  "phone",
  "budget",
  "timing",
] as const;
const requiredLabels = {
  name: "your name",
  company: "your company or project name",
  email: "your email address",
  country: "your country",
  brief: "a short project brief",
} as const;

export function validateInquiry(
  value: unknown,
): { ok: true; data: ValidatedInquiry } | { ok: false; errors: InquiryErrors } {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {
      ok: false,
      errors: { brief: "Please check your project details." },
    };
  }

  const input = value as Record<string, unknown>;
  const errors: InquiryErrors = {};
  const data: InquiryFields = {
    name: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    budget: "",
    focus: "",
    brief: "",
    systems: "",
    outcome: "",
    timing: "",
    website: "",
  };

  for (const key of Object.keys(
    inquiryLimits,
  ) as (keyof typeof inquiryLimits)[]) {
    const raw = input[key];
    if (raw !== undefined && typeof raw !== "string") {
      errors[key] = "Please enter text in this field.";
      continue;
    }
    const text = typeof raw === "string" ? raw.trim() : "";
    data[key] = text;
    if (text.length > inquiryLimits[key]) {
      errors[key] =
        `Please use ${inquiryLimits[key].toLocaleString("en-US")} characters or fewer.`;
    } else if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(text)) {
      errors[key] = "Please remove unsupported characters.";
    }
  }

  for (const key of Object.keys(
    requiredLabels,
  ) as (keyof typeof requiredLabels)[]) {
    if (!data[key] && !errors[key]) {
      errors[key] = `Please add ${requiredLabels[key]}.`;
    }
  }

  for (const key of singleLineFields) {
    if (/[\r\n]/.test(data[key])) {
      errors[key] = "Please keep this field to one line.";
    }
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (data.brief && data.brief.length < 20) {
    errors.brief = "Add a little more context — at least 20 characters.";
  }
  if (!isInquiryFocus(input.focus)) {
    errors.focus = "Please choose a project focus. It is okay to be unsure.";
  } else {
    data.focus = input.focus;
  }
  if (data.website) {
    errors.website = "Unable to submit this form. Please contact us by email.";
  }

  if (Object.keys(errors).length || !isInquiryFocus(data.focus)) {
    return { ok: false, errors };
  }
  return { ok: true, data: { ...data, focus: data.focus } };
}
