export const inquiryFocusOptions = [
  {
    value: "ai-automation",
    label: "AI automation",
    hint: "Which systems should connect, and where does a person need to approve the action?",
  },
  {
    value: "saas-development",
    label: "SaaS development",
    hint: "Who will use the product, and what is the first useful workflow it should support?",
  },
  {
    value: "web-development",
    label: "Web development",
    hint: "A website, store, portal, or custom application — what should it help people do?",
  },
  {
    value: "ai-ugc-creative",
    label: "AI UGC / creative",
    hint: "Tell us about the audience, the creative you need, and where it will be used.",
  },
  {
    value: "another-capability",
    label: "Another capability",
    hint: "Tell us what you are working on and where your team needs support.",
  },
  {
    value: "not-sure",
    label: "Still figuring it out",
    hint: "Start with the problem. You do not need to know the technology or the solution yet.",
  },
] as const;

export type InquiryFocus = (typeof inquiryFocusOptions)[number]["value"];

export const inquirySources = [
  "/",
  "/contact",
  "/services",
  "/services/ai-automation",
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
  const knownFocus = isInquiryFocus(focus) ? focus : "";
  const serviceSource = `/services/${knownFocus}`;
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
  focus: InquiryFocus | "";
  brief: string;
  systems: string;
  outcome: string;
  timing: string;
  website: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryFields, string>>;
export type ValidatedInquiry = InquiryFields & { focus: InquiryFocus };

const singleLineFields = ["name", "company", "email", "timing"] as const;
const requiredLabels = {
  name: "your name",
  company: "your company or project name",
  email: "your email address",
  brief: "a short project brief",
} as const;

export function validateInquiry(value: unknown):
  | { ok: true; data: ValidatedInquiry }
  | { ok: false; errors: InquiryErrors } {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return { ok: false, errors: { brief: "Please check your project details." } };
  }

  const input = value as Record<string, unknown>;
  const errors: InquiryErrors = {};
  const data: InquiryFields = {
    name: "",
    company: "",
    email: "",
    focus: "",
    brief: "",
    systems: "",
    outcome: "",
    timing: "",
    website: "",
  };

  for (const key of Object.keys(inquiryLimits) as (keyof typeof inquiryLimits)[]) {
    const raw = input[key];
    if (raw !== undefined && typeof raw !== "string") {
      errors[key] = "Please enter text in this field.";
      continue;
    }
    const text = typeof raw === "string" ? raw.trim() : "";
    data[key] = text;
    if (text.length > inquiryLimits[key]) {
      errors[key] = `Please use ${inquiryLimits[key].toLocaleString("en-US")} characters or fewer.`;
    } else if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(text)) {
      errors[key] = "Please remove unsupported characters.";
    }
  }

  for (const key of Object.keys(requiredLabels) as (keyof typeof requiredLabels)[]) {
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
