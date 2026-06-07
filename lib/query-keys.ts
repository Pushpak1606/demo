export const queryKeys = {
  // Patient
  patientProfile: ["patient", "profile"] as const,
  reminders: (date: string) => ["patient", "reminders", date] as const,
  consultations: ["patient", "consultations"] as const,
  journalEntries: (month: string) => ["patient", "journal", month] as const,

  // Doctor
  doctorProfile: ["doctor", "profile"] as const,
  patientList: ["doctor", "patients"] as const,
  patientDetail: (id: string) => ["doctor", "patients", id] as const,
  schedule: (date: string) => ["doctor", "schedule", date] as const,

  // Community
  communityGroups: ["community", "groups"] as const,
  groupPosts: (group: string, filter: string) =>
    ["community", group, "posts", filter] as const,
  postDetail: (postId: string) => ["community", "posts", postId] as const,
  postComments: (postId: string) =>
    ["community", "posts", postId, "comments"] as const,

  // AI
  medicineInfo: (query: string) => ["ai", "medicine", query] as const,
  chatHistory: ["ai", "chat"] as const,
};
