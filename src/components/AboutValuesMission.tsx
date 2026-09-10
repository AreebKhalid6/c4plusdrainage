import { Target } from "lucide-react";

export default function AboutValuesMission() {
  return (
    <>
      {/* Our Values */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[var(--brand-blue)]/8 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
                What Drives Us
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--header-top)] sm:text-4xl lg:text-[2.65rem]">
                Our Values
              </h2>
              <span className="mt-5 block h-1 w-16 rounded-full bg-[var(--brand-blue)]" />
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-slate-500">
                Built on trust, service and integrity — for every blocked drain
                clearance across Surrey and the surrounding areas.
              </p>
            </div>

            <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.85]">
              <p>
                It is our promise to our clients that we will deliver an
                outstanding work ethic for all your blocked drain clearance
                services in Surrey and the surrounding areas, while establishing
                a friendly yet professional working relationship with{" "}
                <strong className="font-semibold text-[var(--header-top)]">
                  trust, service and integrity
                </strong>
                . We pride ourselves on our transparency as a company.
              </p>
              <p>
                Our industry expertise means that we offer a wealth of experience
                and knowledge through working with several of the major
                wastewater governing bodies. This gives us an in-depth knowledge
                of both small and large scale systems, over and above our
                competitors. This means that our experienced technicians are
                always able to{" "}
                <strong className="font-semibold text-[var(--header-top)]">
                  investigate, diagnose and solve
                </strong>{" "}
                your drainage problems accurately every time.
              </p>
              <p>
                Our morals within the drainage industry are key; we educate and
                promote good practice which then reduces the likelihood of
                blockages occurring. We do this by suggesting what you should or
                should not use, and dispose of, in your business or household
                system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-[#f5f9fc] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[28px] bg-[var(--header-top)] px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div
              className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-[var(--brand-blue)]/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-white/5 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div>
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--brand-blue)]/20 text-[var(--brand-blue)]">
                  <Target className="size-5" strokeWidth={1.75} />
                </span>
                <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
                  How We Work
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-white/75">
                  Available{" "}
                  <strong className="font-semibold text-white">
                    24 hours a day, 7 days a week, 365 days a year
                  </strong>{" "}
                  with priority response on all blockages.
                </p>
              </div>

              <div className="space-y-5 text-[15px] leading-relaxed text-white/80 sm:text-[16px] sm:leading-[1.8]">
                <p>
                  Experience has proved the need to move beyond simply fixing a
                  blocked drain that takes you by surprise. Instead we implement
                  a{" "}
                  <strong className="font-semibold text-white">
                    strategic, cost-effective planned maintenance programme
                  </strong>{" "}
                  to reduce reoccurring blockages and the risk of flooding.
                </p>
                <p>
                  We aim to eliminate the inconvenience and potential risk of
                  reoccurring blockages, as well as internal and external
                  flooding — issues that strain everyday life in both public and
                  commercial settings, personally and financially.
                </p>
                <p>
                  Time is everything. We appreciate the urgency of every job
                  from the first phone call through to completion and resolution
                  — keeping customers reassured that we are always on hand for
                  emergency drainage issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
