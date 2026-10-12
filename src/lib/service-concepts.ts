/** Local examples explain the service; their controls do not send any data. */
export const workflowExamples = {
  automation: {
    incoming: "A new sales inquiry",
    request: "“I’d like to learn about your service.”",
    title: "Sales follow-up",
    result: "Every lead has a next step.",
    prepare: "Prepare follow-up",
    fields: [
      ["Customer interest", "Your service"],
      ["Assigned to", "Your sales team"],
      ["Next step", "Review the follow-up", "Follow-up approved"],
    ],
    statuses: [
      "A lead arrives. Prepare a follow-up for your team.",
      "The follow-up is ready for your review.",
      "Approved in this example. Nothing has been sent.",
    ],
  },
  operations: {
    incoming: "A customer asks a question",
    request: "“Where can I find your return policy?”",
    title: "Your AI assistant",
    result: "An answer, ready to review.",
    prepare: "Draft an answer",
    fields: [
      ["Source", "Your approved help documents"],
      ["Draft", "An answer with the right policy"],
      ["Next step", "Your team checks the answer", "Answer approved"],
    ],
    statuses: [
      "A support question arrives. Try your AI assistant.",
      "The assistant drafted an answer. Your team reviews it.",
      "Approved in this example. Nothing has been sent.",
    ],
  },
  content: {
    incoming: "A product launch brief",
    request: "“Let’s share our new product.”",
    title: "Your content workflow",
    result: "One brief. Content for each channel.",
    prepare: "Create the drafts",
    fields: [
      ["Topic", "Your new product"],
      ["Formats", "Email and social posts"],
      ["Next step", "Your team reviews the drafts", "Drafts approved"],
    ],
    statuses: [
      "Start with a brief. Create drafts for your channels.",
      "The drafts are ready. Your team has the final word.",
      "Approved in this example. Nothing has been published.",
    ],
  },
} as const;

export type WorkflowKind = keyof typeof workflowExamples;
