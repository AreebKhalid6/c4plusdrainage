/** Shared contact numbers — use these everywhere instead of hardcoding. */
export const landline = {
  label: "Landline",
  display: "020 3657 3189",
  href: "tel:02036573189",
} as const;

export const mobile = {
  label: "Mobile",
  display: "+44 7312 125364",
  href: "tel:+447312125364",
} as const;

/** Primary click-to-call for CTAs */
export const primaryPhone = landline;
