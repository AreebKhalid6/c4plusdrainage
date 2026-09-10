import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Check,
  Clock3,
  HardHat,
  Phone,
  ShieldCheck,
  Wind,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceFaqs from "@/components/services/ServiceFaqs";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";

export const metadata: Metadata = {
  title: "Gutter Cleaning Services | Prevent Water Damage & Subsidence",
  description:
    "Professional gutter cleaning from C4 Plus Drainage Ltd — advanced vacuum systems, telescopic wands, and wireless camera inspections across Surrey, London, and the South East.",
};

const whyChoose = [
  {
    title: "Advanced Equipment",
    text: "State-of-the-art tools for efficient, safe cleaning.",
    Icon: HardHat,
  },
  {
    title: "No Ladder Risks",
    text: "High-tech vacuum systems eliminate dangerous climbing.",
    Icon: Wind,
  },
  {
    title: "Precision Inspection",
    text: "Wireless cameras detect hidden issues in real time.",
    Icon: Camera,
  },
  {
    title: "Comprehensive Service",
    text: "From cleaning to damage prevention.",
    Icon: ShieldCheck,
  },
  {
    title: "Fast Response",
    text: "Book same-day or emergency gutter cleaning.",
    Icon: Clock3,
  },
];

const processSteps = [
  {
    title: "Inspection",
    text: "Use wireless cameras to assess gutter condition and blockages.",
  },
  {
    title: "Debris Removal",
    text: "Deploy high-powered vacuum systems to clear leaves, twigs, and sludge.",
  },
  {
    title: "Hard-to-Reach Access",
    text: "Telescopic wands clean gutters at any height or angle.",
  },
  {
    title: "Damage Check",
    text: "Identify cracks, leaks, or misalignments needing repair.",
  },
  {
    title: "Prevention Tips",
    text: "Advise on gutter guards or maintenance schedules.",
  },
];

const equipment = [
  {
    title: "High-Powered Vacuum Systems",
    text: "Remove debris without ladders or manual scooping.",
  },
  {
    title: "Telescopic Wands",
    text: "Adjustable lengths and angles for inaccessible gutters.",
  },
  {
    title: "Wireless Cameras",
    text: "Real-time footage to spot hidden issues like cracks or nests.",
  },
];

const benefits = [
  {
    title: "Prevent Water Damage",
    text: "Redirect rainwater away from your property.",
  },
  {
    title: "Avoid Subsidence",
    text: "Protect foundations from soil erosion and moisture buildup.",
  },
  {
    title: "Cost Savings",
    text: "Reduce long-term repair costs from water ingress.",
  },
  {
    title: "Eco-Friendly",
    text: "Sustainable methods with minimal environmental impact.",
  },
];

const faqs = [
  {
    question: "How often should gutters be cleaned?",
    answer:
      "We recommend cleaning gutters at least twice a year, ideally in spring and autumn, to prevent blockages.",
  },
  {
    question: "What happens if gutters are neglected?",
    answer:
      "Clogged gutters can cause water overflow, leading to roof leaks, foundation damage, and subsidence.",
  },
  {
    question: "Do you handle high or hard-to-reach gutters?",
    answer:
      "Yes. Our telescopic wands and vacuum systems safely clean gutters at any height without ladders.",
  },
  {
    question: "Are your methods safe for old gutters?",
    answer:
      "Absolutely. Our non-invasive equipment prevents damage to fragile or aging gutter systems.",
  },
  {
    question: "Do you provide inspection reports?",
    answer:
      "Yes. We share real-time camera footage and a detailed maintenance report post-service.",
  },
];

const testimonials = [
  {
    name: "David",
    location: "Whyteleafe",
    date: "April 2020",
    text: "I was very impressed by the work of Ryan and his team. They attended promptly. Used a metal detector to locate a manhole cover hidden two feet under soil on a hill in my front garden. Having located the blocked drain they cleared the blockage quickly and cleanly advising it was caused by flushing baby wipes etc down the toilet. He also advised I could pay for a more extensive cleaning of the drainage system and CCTV report at a later date if I wanted to. Two previous drainage experts were unable to locate the problem. One offered to conduct an expensive survey. Ryan saved me a lot of money.",
  },
  {
    name: "Frank",
    location: "Purley",
    date: "February 2021",
    text: "Ryan and his colleague did a great job clearing the blockage in our drains/sewer. Unfortunately, a rat popped its head up while he was working and there were signs of a rat infestation which will need further investigation. I have no hesitation in recommending Ryan and will book him for the future work that needs carrying out. What was really commendable was that he didn’t charge for the job as he is doing such work free of charge during lockdown for the over 65’s and vulnerable people. A very nice man.",
  },
  {
    name: "Sharon",
    location: "Redhill",
    date: "May 2020",
    text: "Highly recommend Ryan in all aspects of his work. What we thought was a major problem turned out to be a blocked drain which Ryan cleared within a couple of hours. One very happy customer and would definitely use C4 drainage again in the future.",
  },
  {
    name: "Kaarin Scanlan",
    date: "September 2023",
    text: "Highly recommend Ryan in all aspects of his work. What we thought was a major problem turned out to be a blocked drain which Ryan cleared within a couple of hours. One very happy customer and would definitely use C4 drainage again in the future.",
  },
  {
    name: "Simon",
    location: "Caterham",
    date: "Drains Cleared",
    text: "I had been recommended the guys at C4 previously. They came to our local school to fix an emergency drainage problem. We spoke to Ryan directly, and one of his team arrived on the same day! They managed to put a temporary quick fix in place, until they could rectify the problem permanently. Amazing service, quick, efficient and polite. Always happy to help out. I wouldn’t hesitate to recommend them in the future. Thanks again Ryan & the team at C4 Plus Drainage.",
  },
  {
    name: "Mark Bartlett",
    date: "January 2024",
    text: "An excellent company, well recommended! I called them about a blocked toilet; they arranged an engineer the same day. Logan the engineer and his colleague were extremely professional and polite. They cleared the blockage and cleaned up after themselves. I would definitely use them again.",
  },
  {
    name: "John",
    location: "Croydon",
    date: "March 2022",
    text: "C4 Plus Drainage provided exceptional service when our kitchen sink was backing up. They arrived promptly, diagnosed the issue swiftly, and had everything flowing smoothly in no time. Highly recommend their services.",
  },
  {
    name: "Emily",
    location: "Sutton",
    date: "July 2021",
    text: "Professional and efficient! The team at C4 Plus Drainage cleared our blocked outdoor drain with minimal disruption. They explained the cause and provided tips to prevent future issues. Will definitely call them again if needed.",
  },
  {
    name: "Michael",
    location: "Epsom",
    date: "November 2020",
    text: "After experiencing recurring drainage issues, C4 Plus Drainage conducted a thorough CCTV survey and identified the root cause. Their expertise saved us from future headaches. Truly grateful for their diligent work.",
  },
  {
    name: "Sarah",
    location: "Leatherhead",
    date: "August 2023",
    text: "The team was courteous, knowledgeable, and resolved our drainage problem efficiently. They left the area clean and provided excellent advice on maintenance. A trustworthy company that I would recommend to anyone.",
  },
  {
    name: "Tom",
    location: "Reigate",
    date: "June 2022",
    text: "Faced with an unexpected drainage emergency, C4 Plus Drainage responded quickly and professionally. Their 24/7 service is a lifesaver. Thank you for your prompt assistance!",
  },
  {
    name: "Lucy",
    location: "Dorking",
    date: "October 2021",
    text: "We had a persistent odor coming from our drains. The team diagnosed the problem and provided a lasting solution. Their attention to detail and customer service were top-notch.",
  },
  {
    name: "James",
    location: "Guildford",
    date: "January 2023",
    text: "C4 Plus Drainage went above and beyond to ensure our drainage system was in optimal condition. Their thorough approach and commitment to quality are commendable. Highly satisfied with their service.",
  },
  {
    name: "Anna",
    location: "Woking",
    date: "April 2022",
    text: "From the initial call to the completion of the job, the service was impeccable. The engineers were friendly, professional, and resolved our drainage issue promptly. Would highly recommend C4 Plus Drainage.",
  },
  {
    name: "Peter",
    location: "Banstead",
    date: "December 2020",
    text: "Efficient, reliable, and knowledgeable. C4 Plus Drainage provided excellent service at a reasonable price. They are now our go-to experts for any drainage concerns.",
  },
  {
    name: "Laura",
    location: "Horley",
    date: "February 2021",
    text: "The team was punctual, respectful, and worked diligently to clear our blocked drain. They also provided valuable advice on preventing future issues. Exceptional service!",
  },
  {
    name: "Robert",
    location: "Crawley",
    date: "May 2023",
    text: "C4 Plus Drainage tackled a challenging drainage problem at our property with expertise and determination. Their innovative solutions and professionalism are truly appreciated.",
  },
  {
    name: "Sophie",
    location: "East Grinstead",
    date: "July 2022",
    text: "I can’t thank the team enough for their prompt response and effective service. They turned a stressful situation into a manageable one with their expertise and calm demeanor.",
  },
  {
    name: "Henry",
    location: "Oxted",
    date: "September 2021",
    text: "Top-notch service from start to finish. The engineers were knowledgeable, courteous, and resolved our drainage issue efficiently. Highly recommend C4 Plus.",
  },
];

export default function GutterCleaningPage() {
  return (
    <main className="flex-1">
      <PageHero
        breadcrumb="Gutter Cleaning"
        eyebrow="C4 Plus Drainage Ltd"
        title="Professional Gutter Cleaning Services"
        description="Expert drainage solutions for residential and commercial properties — prevent water damage and subsidence with professional gutter maintenance."
        backgroundImage="/images/Home/gutter-cleaning.webp"
      />

      <section className="relative z-10 -mt-6 bg-white py-12 sm:-mt-8 sm:py-16 lg:-mt-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 lg:px-8">
          <div>
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[24px] shadow-[0_20px_50px_rgba(15,28,48,0.12)] sm:mb-10">
              <Image
                src="/images/Home/gutter-cleaning.webp"
                alt="Professional gutter cleaning — removing leaves and debris from clogged gutters"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-[16px] sm:leading-[1.8]">
              <p>
                Gutters are the unsung heroes of your property’s drainage
                system, channeling rainwater away from roofs, walls, and
                foundations. At{" "}
                <strong className="font-semibold text-[var(--header-top)]">
                  C4 Plus Drainage
                </strong>
                , we understand that neglecting gutter maintenance can lead to
                catastrophic consequences like water ingress, structural damage,
                and even subsidence. That’s why we’ve invested in cutting-edge
                equipment and expertise to keep your gutters functioning
                flawlessly.
              </p>
              <p>
                Clogged or damaged gutters can’t redirect water effectively,
                leading to overflowing rainwater that erodes landscapes, damages
                brickwork, and seeps into basements. Over time, this moisture
                buildup can weaken your property’s foundation, resulting in
                costly repairs. Our gutter cleaning services are designed to
                protect your investment and ensure peace of mind.
              </p>
              <p>
                Using the latest tools and technology, we deliver faster, safer,
                and more cost-effective gutter maintenance than traditional
                methods. From high-powered vacuums to telescopic wands, we
                tackle even the most hard-to-reach gutters with precision. Trust
                C4 Plus Drainage to safeguard your property against water damage
                and subsidence.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Why Choose Us?
              </h2>
              <p className="mt-3 text-[15px] text-slate-600">
                Here’s why C4 Plus Drainage is the go-to choice for gutter
                cleaning:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {whyChoose.map(({ title, text, Icon }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--brand-blue)]/10 text-[var(--brand-blue)]">
                      <Icon className="size-5" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-3 text-[16px] font-bold text-[var(--header-top)]">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Our Process
              </h2>
              <p className="mt-3 text-[15px] text-slate-600">
                How We Clean and Maintain Gutters:
              </p>
              <ol className="mt-6 space-y-4">
                {processSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-[13px] font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-[16px] font-bold text-[var(--header-top)]">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-slate-600">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Equipment */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Our Equipment
              </h2>
              <p className="mt-3 text-[15px] text-slate-600">
                Cutting-Edge Tools for Superior Results:
              </p>
              <ul className="mt-5 space-y-3">
                {equipment.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-600"
                  >
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-white">
                      <Check className="size-3.5" strokeWidth={2.5} />
                    </span>
                    <span>
                      <strong className="font-semibold text-[var(--header-top)]">
                        {item.title}:
                      </strong>{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Benefits of Gutter Cleaning
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,28,48,0.04)]"
                  >
                    <h3 className="text-[16px] font-bold text-[var(--header-top)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Areas */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight text-[var(--header-top)] sm:text-3xl">
                Areas We Cover
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Based in Redhill, Surrey, we serve residential and commercial
                clients across:
              </p>
              <ul className="mt-5 space-y-2.5 text-[15px] text-slate-600">
                <li>
                  <strong className="font-semibold text-[var(--header-top)]">
                    Surrey:
                  </strong>{" "}
                  Epsom, Guildford, Reigate, Woking
                </li>
                <li>
                  <strong className="font-semibold text-[var(--header-top)]">
                    London:
                  </strong>{" "}
                  Croydon, Sutton, Bromley, Kingston
                </li>
                <li>
                  <strong className="font-semibold text-[var(--header-top)]">
                    South East:
                  </strong>{" "}
                  Kent, Sussex, Hampshire
                </li>
              </ul>
            </div>

            <ServiceFaqs items={faqs} title="Frequently Asked Questions" />

            {/* CTA */}
            <div className="mt-12 overflow-hidden rounded-[24px] bg-[var(--header-top)] px-6 py-8 sm:px-8 sm:py-10">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Contact Us Today!
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/80">
                Don’t let clogged gutters threaten your property! Contact C4
                Plus Drainage today for professional gutter cleaning services.
                Call us at{" "}
                <a
                  href="tel:02036573189"
                  className="font-semibold text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                >
                  020 3657 3189
                </a>{" "}
                or{" "}
                <a
                  href="tel:+447312125364"
                  className="font-semibold text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                >
                  +44 7312 125364
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:info@c4plusdrainage.co.uk"
                  className="font-semibold text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
                >
                  info@c4plusdrainage.co.uk
                </a>{" "}
                to schedule your service or request a free quote!
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[var(--brand-blue)] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--brand-blue-hover)]"
                >
                  Schedule Your Service
                </Link>
                <a
                  href="tel:02036573189"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  <Phone className="size-4" />
                  Call Now
                </a>
              </div>
            </div>

            <ServiceTestimonials items={testimonials} />
          </div>

          <ServiceSidebar />
        </div>
      </section>
    </main>
  );
}
