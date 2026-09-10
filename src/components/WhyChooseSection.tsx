import { ListTodo, MapPin, UsersRound } from "lucide-react";

const cards = [
  {
    title: "24HR Drain Clearance",
    text: "Blocked Drain? Unable to flush your Toilet? Bad Smell or Odour? Call us 24 hours a day, 7 days a week and one of our friendly Technical Specialists will resolve your issue Fast, Efficiently and Effectively.",
    Icon: UsersRound,
  },
  {
    title: "Full Service List",
    text: "Jetting, clearing, cleaning, CCTV investigation, blockages, flooding, blocked drains, infestations, collapsed drains, de-scaling and lining, internal blockages, external blockage, sewer cleaning and health and safety reviews.",
    Icon: ListTodo,
  },
  {
    title: "Local to you",
    text: "C4 Drainage and sewer repairs are based in Caterham but service Coulsdon, Warlingham, Purley, Kenley, Croydon, Woldingham and surrounding areas. We can be with you within the hour, 24 hours a day 7 days a week, 365 days a year.",
    Icon: MapPin,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="-mt-4 bg-white pb-16 pt-8 sm:-mt-6 sm:pb-20 sm:pt-10 lg:-mt-8 lg:pb-24 lg:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {cards.map(({ title, text, Icon }) => (
            <article
              key={title}
              className="group flex h-full flex-col items-center rounded-xl border border-slate-200 bg-white px-7 py-10 text-center shadow-[0_10px_30px_rgba(15,28,48,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,28,48,0.1)] sm:px-8 sm:py-11"
            >
              <div className="mb-6 flex size-[78px] items-center justify-center rounded-full border-[1.5px] border-[var(--header-top)] text-[var(--header-top)] transition-colors group-hover:border-[var(--brand-blue)] group-hover:text-[var(--brand-blue)]">
                <Icon className="size-8" strokeWidth={1.5} />
              </div>

              <h3 className="text-[1.35rem] font-bold tracking-tight text-[var(--header-top)] sm:text-[1.45rem]">
                {title}
              </h3>

              <p className="mt-4 text-[14.5px] leading-[1.75] text-slate-500 sm:text-[15px]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
