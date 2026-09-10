import { HardHat, Handshake, Leaf, Star, UserRound } from "lucide-react";

const facts = [
  {
    value: "25+",
    label: "Running Projects",
    Icon: Handshake,
  },
  {
    value: "45+",
    label: "Team Members",
    Icon: HardHat,
  },
  {
    value: "1.5K+",
    label: "Happy Clients",
    Icon: UserRound,
  },
  {
    value: "100%",
    label: "Eco-Friendly Solutions",
    Icon: Leaf,
  },
];

export default function KeyFactsSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-blue)] py-16 sm:py-18 lg:py-20">
      <div
        className="pointer-events-none absolute -right-28 top-1/2 hidden h-[540px] w-[540px] -translate-y-1/2 rounded-full bg-white/10 lg:block xl:-right-20 xl:h-[600px] xl:w-[600px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-[#007bb8]/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:gap-10 lg:px-8">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/70">
            Proven Results
          </p>
          <h2 className="mt-3 max-w-md text-3xl font-bold leading-[1.18] tracking-tight text-white sm:text-4xl lg:text-[2.55rem]">
            C4 Plus Drainage: Key Facts and Achievements
          </h2>

          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-[#0070ad]/85 px-5 py-4 shadow-[0_14px_32px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:gap-5 sm:px-6 sm:py-5">
            <p className="text-4xl font-bold leading-none tracking-tight text-[#f5c542] sm:text-[2.75rem]">
              1K+
            </p>
            <div>
              <div
                className="flex items-center gap-1"
                aria-label="4.5 out of 5 stars"
              >
                {[0, 1, 2, 3].map((i) => (
                  <Star
                    key={i}
                    className="size-4 fill-[#f5c542] text-[#f5c542] sm:size-[18px]"
                  />
                ))}
                <Star
                  className="size-4 fill-[#005f8f] text-[#005f8f] sm:size-[18px]"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-1.5 text-[13px] font-medium text-white/95 sm:text-sm">
                Happy Customer Reviews
              </p>
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-12 sm:gap-y-14 lg:pl-4">
          {facts.map(({ value, label, Icon }) => (
            <div key={label} className="flex flex-col items-start">
              <Icon
                className="size-9 text-white sm:size-10"
                strokeWidth={1.35}
                aria-hidden="true"
              />
              <p className="mt-4 text-4xl font-bold leading-none tracking-tight text-white sm:text-5xl">
                {value}
              </p>
              <p className="mt-2.5 text-[14px] font-medium text-white/90 sm:text-[15px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
