type ServiceTestimonial = {
  name: string;
  location?: string;
  date?: string;
  text: string;
};

export default function ServiceTestimonials({
  items,
  title = "See What Our Happy Customers Say!",
}: {
  items: ServiceTestimonial[];
  title?: string;
}) {
  return (
    <section className="mt-14 border-t border-slate-200 pt-12">
      <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {items.map((item) => (
          <article
            key={`${item.name}-${item.date ?? item.text.slice(0, 24)}`}
            className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-6"
          >
            <p className="text-[14.5px] leading-relaxed text-slate-600 sm:leading-[1.75]">
              “{item.text}”
            </p>
            <div className="mt-4 border-t border-slate-200 pt-3">
              <p className="text-[14px] font-bold text-[var(--header-top)]">
                {item.name}
                {item.location ? `, ${item.location}` : ""}
              </p>
              {item.date ? (
                <p className="mt-0.5 text-[12px] text-slate-500">{item.date}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
