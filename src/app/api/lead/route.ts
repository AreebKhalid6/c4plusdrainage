import { NextResponse } from "next/server";
import { sendLeadEmail, type LeadPayload } from "@/lib/mail";

export const runtime = "nodejs";

type Body = Partial<LeadPayload>;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;

    const lead: LeadPayload = {
      name: clean(body.name),
      email: clean(body.email),
      phone: clean(body.phone),
      location: clean(body.location),
      service: clean(body.service),
      message: clean(body.message),
      source: clean(body.source) || "Website form",
    };

    if (
      !lead.name ||
      !lead.email ||
      !lead.phone ||
      !lead.location ||
      !lead.service ||
      !lead.message
    ) {
      return NextResponse.json(
        { ok: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await sendLeadEmail(lead);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[lead] failed to send email", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send your request right now. Please call us or try again shortly.",
      },
      { status: 500 }
    );
  }
}
