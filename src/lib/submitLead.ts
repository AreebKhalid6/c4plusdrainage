export type LeadFormValues = {
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  message: string;
  source?: string;
};

export async function submitLead(values: LeadFormValues) {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  const data = (await response.json().catch(() => null)) as
    | { ok?: boolean; error?: string }
    | null;

  if (!response.ok || !data?.ok) {
    throw new Error(
      data?.error || "Something went wrong. Please try again."
    );
  }
}

export function valuesFromFormData(formData: FormData, source: string): LeadFormValues {
  return {
    name: String(formData.get("name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    location: String(formData.get("location") || "").trim(),
    service: String(formData.get("service") || "").trim(),
    message: String(formData.get("message") || "").trim(),
    source,
  };
}
