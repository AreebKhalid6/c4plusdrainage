export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "tip"; title?: string; text: string }
  | { type: "example"; title?: string; text: string }
  | { type: "caseStudy"; title: string; paragraphs: string[]; list?: string[]; closing?: string };

export type BlogSection = {
  title: string;
  blocks: BlogBlock[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type NewsPost = {
  slug: string;
  title: string;
  /** In-page H1 under the meta bar (defaults to title) */
  headline?: string;
  date: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  author?: string;
  /** Hero background image */
  image?: string;
  /** Featured image under hero (defaults to image) */
  featuredImage?: string;
  imageAlt?: string;
  intro?: BlogSection[];
  sections?: BlogSection[];
  faqs?: BlogFaq[];
  faqTitle?: string;
  conclusion?: string[];
  cta?: string;
};

export const newsPosts: NewsPost[] = [
  {
    slug: "how-cctv-surveys-find-cracks-root-intrusion-and-hidden-damage",
    title: "How CCTV Surveys Find Cracks, Root Intrusion, and Hidden Damage",
    date: "May 22, 2026",
    author: "c4plusdrainage",
    image: "/images/blog/how-cctv-surveys-hero.jpg",
    featuredImage: "/images/blog/how-cctv-surveys-featured.jpg",
    imageAlt:
      "CCTV drain survey monitor showing a live camera view inside a drainage pipe",
    excerpt:
      "Discover how CCTV drain surveys detect cracks, root intrusion, and hidden pipe damage fast — protecting London & Surrey properties.",
    metaTitle: "How CCTV Surveys Find Hidden Drain Damage | C4 Plus Drainage",
    metaDescription:
      "Discover how CCTV drain surveys detect cracks, root intrusion, and hidden pipe damage fast. Protect your London & Surrey property with expert inspection today!",
    intro: [
      {
        title: "Introduction",
        blocks: [
          {
            type: "paragraph",
            text: "How CCTV Drain Surveys Detect Cracks, Root Intrusion and Hidden Damage",
          },
          {
            type: "paragraph",
            text: "Drain problems often start below the surface. Small faults grow fast. Blockages return again and again. Property owners search for Drain Clearing but do not know the real cause. Surface cleaning does not fix hidden damage.",
          },
          {
            type: "paragraph",
            text: "A CCTV drain survey solves this issue. The system uses a camera to inspect pipes from the inside. It shows clear evidence of cracks, root intrusion, and structural faults. This method supports accurate drain cleaning and long-term repair planning.",
          },
        ],
      },
    ],
    sections: [
      {
        title: "What Is a CCTV Drain Survey?",
        blocks: [
          {
            type: "paragraph",
            text: "A CCTV drain survey is a detailed inspection process. A small camera moves through the drainage system. The device records real-time footage. The system highlights defects and blockages inside the pipes.",
          },
          {
            type: "paragraph",
            text: "This method supports Drain clearance London, Drain inspection, and Drainage cleaning services. It replaces guesswork with clear data.",
          },
        ],
      },
      {
        title: "Why Hidden Drain Damage Is a Serious Problem",
        blocks: [
          {
            type: "paragraph",
            text: "Drain issues often stay hidden. Water may still flow. The problem builds slowly. Over time, damage spreads.",
          },
          {
            type: "paragraph",
            text: "Hidden damage leads to:",
          },
          {
            type: "list",
            items: [
              "Frequent blockages",
              "Bad odours from drains",
              "Slow drainage in sinks and showers",
              "Structural damage to pipes",
              "Increased Drain clearance cost",
            ],
          },
          {
            type: "paragraph",
            text: "Repeated drain unblocking in London without inspection wastes time and money. A proper survey finds the root cause.",
          },
        ],
      },
      {
        title: "How CCTV Surveys Detect Cracks",
        blocks: [
          {
            type: "paragraph",
            text: "Cracks form due to pressure, age, or ground movement. These faults allow water leakage and soil entry.",
          },
          {
            type: "paragraph",
            text: "A CCTV system detects cracks by:",
          },
          {
            type: "list",
            items: [
              "Showing visible pipe splits",
              "Identifying weak pipe joints",
              "Highlighting deformation in the pipe shape",
            ],
          },
          {
            type: "paragraph",
            text: "A damaged pipe disrupts normal flow. This issue increases the need for blocked drain clearance and ongoing drain maintenance. Early detection prevents full pipe failure.",
          },
          {
            type: "example",
            title: "Example",
            text: "A property faced repeated Blocked Drains London issues. Cleaning provided short relief. A CCTV survey revealed a cracked section of the pipe. The repair solved the issue completely.",
          },
        ],
      },
      {
        title: "How CCTV Surveys Identify Root Intrusion",
        blocks: [
          {
            type: "paragraph",
            text: "Tree roots search for moisture. Drain pipes provide easy access. Roots enter through small cracks or joints.",
          },
          {
            type: "paragraph",
            text: "The camera detects root intrusion by:",
          },
          {
            type: "list",
            items: [
              "Showing root growth inside pipes",
              "Identifying blocked sections caused by roots",
              "Tracking the extent of intrusion",
            ],
          },
          {
            type: "paragraph",
            text: "Root intrusion is a common cause of drainage problems in London. It affects both private drainage and commercial drains in the London systems.",
          },
          {
            type: "tip",
            title: "Tip",
            text: "Regular inspection helps prevent root damage. Early removal reduces the need for major repairs.",
          },
        ],
      },
      {
        title: "How CCTV Surveys Find Hidden Blockages",
        blocks: [
          {
            type: "paragraph",
            text: "Not all blockages are visible. Some form deep inside the system. These include grease build-up, debris, and foreign objects.",
          },
          {
            type: "paragraph",
            text: "The camera helps by:",
          },
          {
            type: "list",
            items: [
              "Locating exact blockage points",
              "Identifying the material causing the blockage",
              "Assessing pipe condition around the blockage",
            ],
          },
          {
            type: "paragraph",
            text: "This process improves drain cleaning and supports effective Drain clearing services.",
          },
        ],
      },
      {
        title: "Detecting Structural Damage in Drain Systems",
        blocks: [
          {
            type: "paragraph",
            text: "Drain systems face constant stress. Soil movement, heavy loads, and corrosion affect pipe structure.",
          },
          {
            type: "paragraph",
            text: "CCTV surveys identify:",
          },
          {
            type: "list",
            items: [
              "Collapsed pipe sections",
              "Misaligned joints",
              "Corrosion in older pipes",
            ],
          },
          {
            type: "paragraph",
            text: "Structural issues increase demand for drain repair in London and drainage repairs. Early detection avoids major excavation work.",
          },
        ],
      },
      {
        title: "Benefits of CCTV Surveys for Drain Clearing",
        blocks: [
          {
            type: "paragraph",
            text: "Accurate inspection improves service quality. It supports both residential and commercial needs.",
          },
          {
            type: "paragraph",
            text: "Key benefits include:",
          },
          {
            type: "list",
            items: [
              "Precise problem diagnosis",
              "Reduced repeat Drain unblocking London",
              "Lower long-term repair cost",
              "Faster Drain cleaning service near me response",
              "Better planning for Drainage solutions",
            ],
          },
          {
            type: "paragraph",
            text: "This approach supports efficient drain-clearing services near me and reduces disruption.",
          },
        ],
      },
      {
        title: "When You Should Consider a CCTV Drain Survey",
        blocks: [
          {
            type: "paragraph",
            text: "Certain situations require detailed inspection. Ignoring signs can lead to serious damage.",
          },
          {
            type: "paragraph",
            text: "Consider a survey if you notice:",
          },
          {
            type: "list",
            items: [
              "Frequent blockages",
              "Slow drainage",
              "Unpleasant smells",
              "Water pooling outside",
              "Previous failed drain-clear attempts",
            ],
          },
          {
            type: "paragraph",
            text: "This step supports reliable Drainage service near me and prevents emergency issues.",
          },
        ],
      },
      {
        title: "Case Study: Hidden Damage Found Through CCTV",
        blocks: [
          {
            type: "caseStudy",
            title: "Case Study: Hidden Damage Found Through CCTV",
            paragraphs: [
              "A commercial property experienced repeated Commercial drain blockages. Standard Drain cleaners near me failed to solve the issue.",
              "Inspection revealed:",
            ],
            list: [
              "Root intrusion in multiple sections",
              "Minor cracks in pipe joints",
            ],
            closing:
              "Targeted repair and cleaning restored full flow. The system no longer required frequent Emergency drain cleaning service calls.",
          },
        ],
      },
      {
        title: "How CCTV Surveys Support Long-Term Drain Maintenance",
        blocks: [
          {
            type: "paragraph",
            text: "Drain systems need regular care. Inspection helps create a maintenance plan.",
          },
          {
            type: "paragraph",
            text: "This process supports:",
          },
          {
            type: "list",
            items: [
              "Scheduled Drain Cleaning",
              "Early fault detection",
              "Reduced emergency repairs",
              "Improved system lifespan",
            ],
          },
          {
            type: "paragraph",
            text: "A planned approach improves efficiency for both Local drainage companies and property owners.",
          },
        ],
      },
      {
        title: "Choosing the Right Drainage Company",
        blocks: [
          {
            type: "paragraph",
            text: "Not all providers offer advanced inspection. Professional expertise matters.",
          },
          {
            type: "paragraph",
            text: "A reliable service should provide:",
          },
          {
            type: "list",
            items: [
              "Modern CCTV equipment",
              "Experienced technicians",
              "Clear reporting and recommendations",
              "Complete Drainage clearing services",
            ],
          },
          {
            type: "paragraph",
            text: "Working with a trusted drainage company ensures accurate results and effective solutions.",
          },
        ],
      },
      {
        title: "Tips to Prevent Drain Damage",
        blocks: [
          {
            type: "paragraph",
            text: "Prevention reduces repair costs and stress. Simple actions help maintain system health.",
          },
          {
            type: "paragraph",
            text: "Follow these tips:",
          },
          {
            type: "list",
            items: [
              "Avoid disposing of grease in sinks",
              "Keep outdoor drains clear of debris",
              "Schedule regular drain maintenance",
              "Use professional drain cleaning services when needed",
            ],
          },
          {
            type: "paragraph",
            text: "Preventive care supports long-term drainage performance.",
          },
        ],
      },
    ],
    conclusion: [
      "Drain problems often hide below the surface. Cleaning alone does not solve deeper issues. A CCTV survey identifies cracks, root intrusion, and structural faults with precision.",
      "This method improves drain clearing, reduces repeat blockages, and supports long-term system health. Accurate inspection leads to effective repair and better maintenance planning.",
    ],
    cta: "If you face ongoing drainage issues, now is the time to act. Contact C4Plus Drainage today for expert inspection and reliable drain clearance solutions. Restore your system with confidence and avoid costly future repairs.",
    faqTitle: "FAQ",
    faqs: [
      {
        question: "What is a CCTV drain survey?",
        answer:
          "A CCTV drain survey uses a camera to inspect pipes internally. It identifies blockages and damage.",
      },
      {
        question: "How does CCTV help in Drain Clearing?",
        answer:
          "It locates the exact problem. This allows targeted cleaning and repair.",
      },
      {
        question: "Can CCTV surveys detect root intrusion?",
        answer: "Yes, the camera clearly shows root growth inside pipes.",
      },
      {
        question: "Is a CCTV survey necessary for blocked drains?",
        answer:
          "It is useful for repeated blockages. It finds hidden causes that cleaning cannot fix.",
      },
      {
        question: "How much does a drain survey cost?",
        answer:
          "The cost varies based on system size and condition. It often reduces long-term repair expenses.",
      },
      {
        question: "How often should drains be inspected?",
        answer:
          "Regular inspection is recommended for older systems or properties with recurring issues.",
      },
    ],
  },
  {
    slug: "cctv-drain-survey-ultimate-protection-for-property-buyers",
    title: "CCTV Drain Survey: Ultimate Protection for Property Buyers",
    headline:
      "Why Property Buyers Should Get a CCTV Drain Survey Before Buying",
    date: "May 22, 2026",
    author: "c4plusdrainage",
    image: "/images/blog/cctv-property-buyers.png",
    imageAlt:
      "C4 Plus engineer carrying out a CCTV drain survey with yellow camera reel and monitor on a residential driveway",
    excerpt:
      "Buying a property? A pre-purchase CCTV drain survey helps spot hidden pipe damage before you buy across London & Surrey.",
    metaTitle: "Pre-Purchase CCTV Drain Surveys for Homebuyers | C4 Plus",
    metaDescription:
      "Buying a property? Protect your investment with a pre-purchase CCTV drain survey across London & Surrey. Spot hidden pipe damage before you buy; call today!",
    intro: [
      {
        title: "Introduction",
        blocks: [
          {
            type: "paragraph",
            text: "Buying a property involves risk. Hidden issues can increase costs after completion. Drainage problems often stay unseen. A CCTV drain survey reveals the true condition of underground systems. It helps buyers make informed decisions.",
          },
          {
            type: "paragraph",
            text: "Many buyers focus on structure and interiors. Drainage gets ignored. This creates future repair costs. A professional inspection reduces this risk. It also supports smooth property transactions.",
          },
          {
            type: "paragraph",
            text: "Drain Clearing plays a key role in property checks. It ensures the system works well before purchase. A reliable inspection helps avoid emergency repairs later.",
          },
        ],
      },
    ],
    sections: [
      {
        title: "What Is a CCTV Drain Survey?",
        blocks: [
          {
            type: "paragraph",
            text: "A CCTV drain survey uses a camera system. The camera travels through pipes. It records real-time footage. The footage shows blockages, cracks, and damage.",
          },
          {
            type: "paragraph",
            text: "The survey provides a clear report. The report highlights issues and solutions. It supports both buyers and surveyors.",
          },
          {
            type: "paragraph",
            text: "Drainage systems carry waste safely. Damage affects hygiene and structure. A survey identifies risks early. It protects your investment.",
          },
        ],
      },
      {
        title: "Why Drain Issues Matter When Buying Property",
        blocks: [
          {
            type: "paragraph",
            text: "Drain problems affect property value. Blocked or damaged drains cause leaks and smells. Long-term issues lead to structural damage.",
          },
          {
            type: "paragraph",
            text: "Hidden defects create costly repairs. Buyers often face unexpected expenses. A simple inspection avoids this risk.",
          },
          {
            type: "paragraph",
            text: "Drain cleaning London services often deal with neglected systems. Most issues develop over time. Early checks reduce repair costs.",
          },
        ],
      },
      {
        title: "Key Benefits of a CCTV Drain Survey",
        blocks: [
          {
            type: "heading",
            text: "1. Detect Hidden Problems",
          },
          {
            type: "paragraph",
            text: "Underground pipes stay out of sight. A survey exposes faults clearly.",
          },
          {
            type: "list",
            items: [
              "Cracks in pipes",
              "Tree root intrusion",
              "Collapsed drains",
              "Fat or debris build-up",
            ],
          },
          {
            type: "paragraph",
            text: "These problems affect system performance. Early detection prevents damage.",
          },
          {
            type: "heading",
            text: "2. Reduce Future Costs",
          },
          {
            type: "paragraph",
            text: "Repair costs can be high. A survey gives clarity before purchase.",
          },
          {
            type: "paragraph",
            text: "Blocked drains require urgent work. Drain unblocking London services often handle emergency cases. A pre-purchase check avoids such situations.",
          },
          {
            type: "heading",
            text: "3. Support Price Negotiation",
          },
          {
            type: "paragraph",
            text: "Survey results provide evidence. Buyers can negotiate based on findings.",
          },
          {
            type: "paragraph",
            text: "If repairs are needed, the seller may adjust the price. This creates financial advantage.",
          },
          {
            type: "heading",
            text: "4. Ensure Compliance",
          },
          {
            type: "paragraph",
            text: "Drainage must meet regulations. A survey confirms compliance.",
          },
          {
            type: "paragraph",
            text: "Drainage company London experts follow industry standards. Proper inspection ensures safe systems.",
          },
        ],
      },
      {
        title: "When Should You Get a CCTV Drain Survey?",
        blocks: [
          {
            type: "heading",
            text: "Before Property Purchase",
          },
          {
            type: "paragraph",
            text: "The best time is before the exchange. This stage allows negotiation.",
          },
          {
            type: "heading",
            text: "For Older Properties",
          },
          {
            type: "paragraph",
            text: "Older homes often have worn systems. Pipes may be outdated. Inspection becomes essential.",
          },
          {
            type: "heading",
            text: "After Signs of Drain Issues",
          },
          {
            type: "paragraph",
            text: "Slow drainage or bad smells indicate problems. These signs require urgent checks.",
          },
          {
            type: "paragraph",
            text: "Searches for “drain cleaners near me” often increase after such issues arise. Early inspection prevents escalation.",
          },
        ],
      },
      {
        title: "What Does the Survey Process Involve?",
        blocks: [
          {
            type: "paragraph",
            text: "The process is simple and efficient.",
          },
          {
            type: "list",
            items: [
              "Access points are identified",
              "A camera enters the drainage system",
              "Footage records pipe condition",
              "A report explains findings",
            ],
          },
          {
            type: "paragraph",
            text: "The process causes no damage. It provides accurate results.",
          },
          {
            type: "paragraph",
            text: "Drain cleaning services use advanced tools for inspection. These tools ensure clear visuals and reliable reports.",
          },
        ],
      },
      {
        title: "Common Drain Issues Found During Surveys",
        blocks: [
          {
            type: "heading",
            text: "Blockages",
          },
          {
            type: "paragraph",
            text: "Grease, waste, and debris cause blockages. These reduce flow efficiency.",
          },
          {
            type: "heading",
            text: "Cracked Pipes",
          },
          {
            type: "paragraph",
            text: "Ground movement damages pipes. Cracks lead to leaks.",
          },
          {
            type: "heading",
            text: "Root Intrusion",
          },
          {
            type: "paragraph",
            text: "Tree roots enter pipes. They block and damage systems.",
          },
          {
            type: "heading",
            text: "Pipe Misalignment",
          },
          {
            type: "paragraph",
            text: "Poor installation causes uneven joints. This disrupts flow.",
          },
          {
            type: "paragraph",
            text: "Drainage cleaning services often fix these issues after detection.",
          },
        ],
      },
      {
        title: "Case Example: Avoiding Costly Repairs",
        blocks: [
          {
            type: "caseStudy",
            title: "Case Example: Avoiding Costly Repairs",
            paragraphs: [
              "A buyer planned to purchase a property. A CCTV survey revealed root damage. The drainage system required full repair.",
              "The buyer negotiated the price. The seller agreed to reduce the cost. This saved thousands in repairs.",
            ],
            closing:
              "Drain clearance London services later resolved the issue efficiently. Early inspection prevented financial loss.",
          },
        ],
      },
      {
        title: "Tips for Buyers",
        blocks: [
          {
            type: "list",
            items: [
              "Always inspect drainage before purchase",
              "Choose experienced drainage contractors",
              "Review the survey report carefully",
              "Ask for repair estimates",
              "Use findings for negotiation",
            ],
          },
          {
            type: "paragraph",
            text: "Drain cleaning companies near me searches help find local experts quickly. Choose certified professionals for reliable results.",
          },
        ],
      },
      {
        title: "Choosing the Right Drainage Specialist",
        blocks: [
          {
            type: "paragraph",
            text: "Selecting the right expert matters. Experience ensures accurate inspection.",
          },
          {
            type: "paragraph",
            text: "Look for:",
          },
          {
            type: "list",
            items: [
              "Certified drainage contractors",
              "Modern CCTV equipment",
              "Clear reporting",
              "Transparent pricing",
            ],
          },
          {
            type: "paragraph",
            text: "Drainage specialists in London offer tailored solutions. Professional service ensures peace of mind.",
          },
        ],
      },
      {
        title: "How CCTV Surveys Support Drain Clearing",
        blocks: [
          {
            type: "paragraph",
            text: "A survey identifies exact problems. This supports targeted solutions.",
          },
          {
            type: "paragraph",
            text: "Drain clearing services remove blockages effectively. The process becomes faster with accurate data.",
          },
          {
            type: "paragraph",
            text: "Quick, clear drainage reduces disruption. It restores system flow quickly.",
          },
        ],
      },
      {
        title: "Cost of CCTV Drain Surveys",
        blocks: [
          {
            type: "paragraph",
            text: "Costs vary based on property size. Complexity affects pricing.",
          },
          {
            type: "paragraph",
            text: "Typical factors include:",
          },
          {
            type: "list",
            items: [
              "Length of drainage system",
              "Access points",
              "Condition of pipes",
            ],
          },
          {
            type: "paragraph",
            text: "Drain clearance cost becomes predictable after inspection. This helps buyers plan budgets.",
          },
        ],
      },
    ],
    conclusion: [
      "Property purchase involves careful checks. Drainage inspection plays a key role. Hidden issues create future costs.",
      "A CCTV drain survey provides clarity. It supports better decisions. It also protects your investment.",
      "Professional drain-clearing services ensure system efficiency. Early inspection avoids stress and expense.",
    ],
    cta: "Planning to buy a property? Avoid hidden drainage issues. Contact us today for expert drainage inspection and Drain Clearing services. Our team delivers accurate surveys and reliable solutions.",
    faqTitle: "FAQs",
    faqs: [
      {
        question: "Is a CCTV drain survey necessary for every property?",
        answer:
          "Not always, but it is highly recommended. Older properties need it more.",
      },
      {
        question: "How long does a CCTV drain survey take?",
        answer:
          "Most surveys take 1–2 hours. Larger systems may take longer.",
      },
      {
        question: "Can a survey detect all drainage issues?",
        answer:
          "Yes, it detects most problems like cracks, blockages, and root intrusion.",
      },
      {
        question: "What happens after the survey?",
        answer:
          "A report explains issues and solutions. Repairs can be planned based on findings.",
      },
      {
        question: "Does a survey include drain cleaning?",
        answer:
          "No, it is an inspection service. However, Drain cleaning can be done after the survey if needed.",
      },
      {
        question: "Is the process disruptive?",
        answer: "No, it is non-invasive. It does not damage property.",
      },
    ],
  },
  {
    slug: "drain-flushing-and-cleaning-ultimate-guide-every-homeowner-should-know",
    title:
      "Drain Flushing and Cleaning: Ultimate Guide Every Homeowner Should Know",
    headline: "Drain Flushing and Cleaning: A Complete Guide for Homeowners",
    date: "May 22, 2026",
    author: "c4plusdrainage",
    image: "/images/blog/drain-flushing-guide.jpg",
    imageAlt:
      "Drainage specialist demonstrating sink drain clearing with a homeowner in a bathroom",
    excerpt:
      "Learn how professional drain flushing and high-pressure jetting protect your home from major blockages — a complete guide for every homeowner.",
    metaTitle: "Drain Flushing & Cleaning: The Ultimate Homeowner Guide",
    metaDescription:
      "Learn how professional drain flushing and high-pressure jetting protect your London or Surrey home from major blockages. Read our complete guide today!",
    intro: [
      {
        title: "Introduction",
        blocks: [
          {
            type: "paragraph",
            text: "Emergency drain cleaning service clears blocked pipes fast. Blockages cause stress and disrupt daily life. Blocked drains can lead to water backing up and unpleasant smells. If left untreated, they may also cause property damage. Professional drain cleaning solves these issues quickly and protects property value. A well-maintained system keeps drains clean and ensures smooth, uninterrupted water flow.",
          },
          {
            type: "paragraph",
            text: "Professional support from a trusted London drainage company ensures safe and lasting results. Regular care prevents costly repairs and keeps systems working all year.",
          },
        ],
      },
    ],
    sections: [
      {
        title: "Why Drain Cleaning Matters for Every Property",
        blocks: [
          {
            type: "paragraph",
            text: "Slow drainage signals a hidden problem. Grease, debris, and scale build up inside pipes over time. This buildup reduces flow and causes blockages.",
          },
          {
            type: "paragraph",
            text: "A proper drain cleaning service removes waste and restores full capacity. Early action reduces the risk of pipe damage and flooding. Reliable maintenance also supports both private drainage and commercial drain systems.",
          },
        ],
      },
      {
        title: "Common Causes of Blocked Drains",
        blocks: [
          {
            type: "paragraph",
            text: "Drain systems face daily use. Waste materials collect and form blockages if not managed.",
          },
          {
            type: "paragraph",
            text: "Key causes include:",
          },
          {
            type: "list",
            items: [
              "Grease and food waste in the kitchen sink plumbing drain",
              "Hair and soap buildup in the shower drain and the bathtub drain",
              "Foreign objects in the toilets and sink drains",
              "Tree root intrusion in underground drain cleaning service areas",
              "Dirt and leaves are affecting the outdoor drain cleaning service",
            ],
          },
          {
            type: "paragraph",
            text: "These issues often require blocked drain clearance from experienced drain cleaners near me.",
          },
        ],
      },
      {
        title: "Signs You Need Drain Cleaning",
        blocks: [
          {
            type: "paragraph",
            text: "Drain systems show warning signs before full blockage. Early detection helps avoid major damage.",
          },
          {
            type: "paragraph",
            text: "Look for:",
          },
          {
            type: "list",
            items: [
              "Slow water flow in the sink and drain",
              "Gurgling sounds in the drain pipe",
              "Bad odours from the kitchen or bathroom drain cleaning service areas",
              "Water is backing up in multiple drains",
              "Overflow in the drain outside or rain gutter cleaning near me systems",
            ],
          },
          {
            type: "paragraph",
            text: "These signs show a need for drain unblocking or a quick clearance solution.",
          },
        ],
      },
      {
        title: "Methods Used in Professional Drain Cleaning",
        blocks: [
          {
            type: "paragraph",
            text: "Different problems need different solutions. A skilled drainage contractor uses the right tools and methods.",
          },
          {
            type: "heading",
            text: "1. High-Pressure Jetting",
          },
          {
            type: "paragraph",
            text: "Water pressure breaks down grease, scale, and debris. This method clears pipes without damage.",
          },
          {
            type: "heading",
            text: "2. Drain Cleaning Rods",
          },
          {
            type: "paragraph",
            text: "Manual rods remove blockages in shallow systems. This method suits simple drain clearance near me needs.",
          },
          {
            type: "heading",
            text: "3. CCTV Drain Surveys",
          },
          {
            type: "paragraph",
            text: "A camera inspection identifies cracks and hidden issues. This supports accurate drain repair near me solutions.",
          },
          {
            type: "heading",
            text: "4. Drain Cleaning Machine",
          },
          {
            type: "paragraph",
            text: "Mechanical tools cut through tough blockages. This approach works well for commercial drains in London.",
          },
          {
            type: "paragraph",
            text: "Each method improves drainage cleaning services and ensures long-term performance.",
          },
        ],
      },
      {
        title: "DIY vs Professional Drain Cleaning",
        blocks: [
          {
            type: "paragraph",
            text: "Homeowners often try basic fixes first. Simple methods help in minor cases.",
          },
          {
            type: "paragraph",
            text: "DIY options:",
          },
          {
            type: "list",
            items: [
              "Hot water for grease buildup",
              "Drain cleaning foam for light blockage",
              "Drain cleaning brush for visible debris",
            ],
          },
          {
            type: "paragraph",
            text: "However, deeper problems need expert care. Professional drain cleaning companies use advanced drain cleaning equipment and provide safe results. A trained plumber prevents damage and ensures full drain cleaning.",
          },
        ],
      },
      {
        title: "Benefits of Regular Drain Maintenance",
        blocks: [
          {
            type: "paragraph",
            text: "Preventive care saves time and cost. Clean systems perform better and last longer.",
          },
          {
            type: "paragraph",
            text: "Key benefits:",
          },
          {
            type: "list",
            items: [
              "Reduces emergency drain cleaning service needs",
              "Improves flow in the kitchen sink plumbing, drain, and dishwasher drain hose",
              "Prevents structural damage to the drain pipe",
              "Supports hygiene and odour control",
              "Lowers long-term drain clearance cost",
            ],
          },
          {
            type: "paragraph",
            text: "Regular servicing from local drainage companies ensures reliable drainage solutions.",
          },
        ],
      },
      {
        title: "Outdoor and Underground Drain Cleaning",
        blocks: [
          {
            type: "paragraph",
            text: "External systems handle large volumes of water. Leaves, mud, and waste can block these systems.",
          },
          {
            type: "paragraph",
            text: "Outdoor drain cleaning keeps storm drains and gutters working properly. Underground drain cleaning service removes deep blockages and prevents flooding risks.",
          },
          {
            type: "paragraph",
            text: "Proper care protects driveways, gardens, and building foundations.",
          },
        ],
      },
      {
        title: "Emergency Drain Cleaning Service: When to Act Fast",
        blocks: [
          {
            type: "paragraph",
            text: "Some situations require urgent action. Ignoring them can cause serious damage.",
          },
          {
            type: "paragraph",
            text: "Emergency cases include:",
          },
          {
            type: "list",
            items: [
              "Overflowing blocked toilets in London",
              "Flooding in the basement or outdoor drain",
              "Complete blockage in multiple drains",
              "Strong sewage smell inside the property",
            ],
          },
          {
            type: "paragraph",
            text: "A 24-hour drain cleaning service near me provides quick response and restores safety. Emergency drain clearance reduces damage and protects health.",
          },
        ],
      },
      {
        title: "Choosing the Right Drainage Company",
        blocks: [
          {
            type: "paragraph",
            text: "Selecting the right service provider ensures quality results. Not all drain companies offer the same level of expertise.",
          },
          {
            type: "paragraph",
            text: "Look for:",
          },
          {
            type: "list",
            items: [
              "Experience in drainage services and drain repairs",
              "Use of modern drain cleaning tools and inspection methods",
              "Transparent pricing for drain clearance in London",
              "Availability of 24/7 drain cleaning",
              "Strong reputation as a drainage specialist in London",
            ],
          },
          {
            type: "paragraph",
            text: "A reliable team delivers efficient drain cleaning services and long-term solutions.",
          },
        ],
      },
      {
        title: "Practical Tips to Keep Drains Clean",
        blocks: [
          {
            type: "paragraph",
            text: "Daily habits affect drain performance. Small changes reduce blockages.",
          },
          {
            type: "paragraph",
            text: "Follow these tips:",
          },
          {
            type: "list",
            items: [
              "Avoid pouring oil into the sink drain",
              "Use strainers in kitchen and bathroom drains",
              "Clean drains regularly with safe methods",
              "Dispose of waste properly",
              "Schedule routine drain maintenance",
            ],
          },
          {
            type: "paragraph",
            text: "These steps extend system life and reduce the need for frequent drain clearing.",
          },
        ],
      },
      {
        title: "Case Example: Preventing Major Drain Failure",
        blocks: [
          {
            type: "caseStudy",
            title: "Case Example: Preventing Major Drain Failure",
            paragraphs: [
              "A homeowner faced repeated blockages in the kitchen sink plumbing drain. Temporary fixes failed to solve the issue. A professional inspection found grease buildup deep in the drain pipe.",
              "High-pressure jetting cleared the blockage fully. Regular drain maintenance was then scheduled. This solution reduced future problems and avoided costly drain repair london work.",
            ],
          },
        ],
      },
    ],
    conclusion: [
      "Drain systems need proper care to function well. Ignoring small issues leads to major problems. Professional Drain Cleaning ensures smooth flow, hygiene, and safety.",
      "C4Plus Drainage provides expert drainage cleaning services, emergency support, and long-term solutions. Our team delivers reliable results using modern tools and proven methods.",
    ],
    cta: "Contact us today to book a drain cleaning service and keep your system running smoothly.",
    faqTitle: "FAQs",
    faqs: [
      {
        question: "How often should drains be cleaned?",
        answer:
          "Most systems need cleaning once a year. High-use properties may need more frequent drain maintenance.",
      },
      {
        question: "What is the average drain clearance cost?",
        answer:
          "Costs vary based on blockage type and location. Simple jobs cost less, while deep cleaning requires advanced equipment.",
      },
      {
        question: "Can I clean drains myself?",
        answer:
          "Basic cleaning works for minor issues. Serious blockages need professional drain cleaners for safe removal.",
      },
      {
        question: "What causes recurring blocked drains?",
        answer:
          "Grease buildup, poor disposal habits, and structural issues often cause repeated blockages.",
      },
      {
        question: "Do I need emergency drain cleaning service?",
        answer:
          "Yes, if you face flooding, sewage backup, or a complete blockage. Quick action prevents damage.",
      },
      {
        question: "What tools do professionals use?",
        answer:
          "Experts use rods, jetting machines, and cameras to clear drains effectively.",
      },
    ],
  },
  {
    slug: "professional-drain-cleaning-for-smooth-and-reliable-plumbing",
    title: "Professional Drain Cleaning for Smooth and Reliable Plumbing",
    headline:
      "How Often Should You Schedule Professional Drain Cleaning in London?",
    date: "May 22, 2026",
    author: "c4plusdrainage",
    image: "/images/blog/professional-drain-cleaning.png",
    imageAlt:
      "Blocked drain debris under a sink alongside a professional plumber repairing pipes",
    excerpt:
      "Keep your pipes flowing smoothly with expert drain cleaning — a clear schedule for homes and businesses across London & Surrey.",
    metaTitle: "Professional Drain Cleaning for Smooth Plumbing | C4 Plus",
    metaDescription:
      "Keep your pipes flowing smoothly with expert drain cleaning services across London & Surrey. Prevent stubborn blockages and backups; contact us today!",
    intro: [
      {
        title: "Introduction",
        blocks: [
          {
            type: "paragraph",
            text: "Drain cleaning London blocked pipes often build up slowly and then fail at the worst time. A planned drain cleaning routine prevents damage and reduces costs. Property owners often ignore early signs, which leads to emergency repairs and disruption. A structured cleaning schedule solves the issue and protects systems.",
          },
        ],
      },
    ],
    sections: [
      {
        title: "Why Regular Drain Cleaning Matters",
        blocks: [
          {
            type: "paragraph",
            text: "Drainage systems collect waste, grease, and debris over time. This build-up restricts water flow and causes blockages. A professional service removes hidden obstructions and restores full performance.",
          },
          {
            type: "paragraph",
            text: "Poor maintenance creates:",
          },
          {
            type: "list",
            items: [
              "Slow drainage in sinks and showers",
              "Unpleasant odours from pipes",
              "Recurring blockages",
              "Structural pipe damage",
            ],
          },
          {
            type: "paragraph",
            text: "A trusted drainage company in London provides inspections and cleaning to stop problems early.",
          },
        ],
      },
      {
        title: "How Often Should Drains Be Cleaned?",
        blocks: [
          {
            type: "paragraph",
            text: "The ideal schedule depends on usage, property type, and system condition. A general guideline helps most property owners maintain efficient drainage.",
          },
          {
            type: "heading",
            text: "Residential Properties",
          },
          {
            type: "paragraph",
            text: "Daily use increases residue inside pipes. Kitchen sinks collect grease, while bathrooms gather hair and soap.",
          },
          {
            type: "list",
            items: [
              "Every 12 months for standard households",
              "Every 6 months for large families or older systems",
            ],
          },
          {
            type: "paragraph",
            text: "Regular drain cleaning London services ensure smooth flow and prevent sudden blockages.",
          },
          {
            type: "heading",
            text: "Commercial Properties",
          },
          {
            type: "paragraph",
            text: "High usage creates faster build-up. Restaurants, offices, and industrial sites require more frequent care.",
          },
          {
            type: "list",
            items: [
              "Every 3 to 6 months for most businesses",
              "Every 1 to 3 months for food-related operations",
            ],
          },
          {
            type: "paragraph",
            text: "A professional commercial drains London service reduces downtime and keeps operations running.",
          },
          {
            type: "heading",
            text: "Outdoor and Underground Drains",
          },
          {
            type: "paragraph",
            text: "External systems collect leaves, dirt, and debris. Weather conditions often increase blockages.",
          },
          {
            type: "list",
            items: [
              "Every 6 to 12 months for general maintenance",
              "More often during heavy rainfall seasons",
            ],
          },
          {
            type: "paragraph",
            text: "An outdoor drain cleaning service helps prevent flooding and surface water issues.",
          },
        ],
      },
      {
        title: "Signs Your Drains Need Immediate Cleaning",
        blocks: [
          {
            type: "paragraph",
            text: "Drain systems show clear warning signs before failure. Ignoring these signs leads to costly repairs.",
          },
          {
            type: "paragraph",
            text: "Common indicators include:",
          },
          {
            type: "list",
            items: [
              "Water draining slowly",
              "Gurgling sounds from pipes",
              "Bad smells near drains",
              "Frequent need for a drain unblocker in London",
              "Water backing up in sinks or toilets",
            ],
          },
          {
            type: "paragraph",
            text: "A qualified drainage specialist in London identifies the root cause and resolves it quickly.",
          },
        ],
      },
      {
        title: "Professional vs DIY Drain Cleaning London",
        blocks: [
          {
            type: "paragraph",
            text: "Many property owners try home solutions first. While basic methods help minor issues, they do not fix deep blockages.",
          },
          {
            type: "heading",
            text: "DIY Methods",
          },
          {
            type: "paragraph",
            text: "Simple tools and products can offer temporary relief:",
          },
          {
            type: "list",
            items: [
              "Hot water and detergent",
              "Basic drain cleaning tools",
              "Manual rods or plungers",
            ],
          },
          {
            type: "paragraph",
            text: "These methods do not remove heavy build-up or structural issues.",
          },
          {
            type: "heading",
            text: "Professional Cleaning",
          },
          {
            type: "paragraph",
            text: "Advanced equipment ensures complete cleaning and long-term results.",
          },
          {
            type: "paragraph",
            text: "Professional services use:",
          },
          {
            type: "list",
            items: [
              "High-pressure jetting machines",
              "CCTV drain surveys",
              "Industrial drain cleaning equipment",
              "Specialist drain cleaning rods",
            ],
          },
          {
            type: "paragraph",
            text: "A reliable drain cleaning service near me delivers safe results without pipe damage.",
          },
        ],
      },
      {
        title: "Example: Real Drain Maintenance Scenario",
        blocks: [
          {
            type: "caseStudy",
            title: "Example: Real Drain Maintenance Scenario",
            paragraphs: [
              "A busy commercial kitchen experienced repeated blockages every month. Staff used basic tools, but the issue returned quickly. A professional drain clearing service near me removed grease using high-pressure jetting.",
              "The system improved immediately, and the maintenance schedule shifted to quarterly cleaning. This change reduced emergency callouts and improved efficiency.",
            ],
          },
        ],
      },
      {
        title: "Key Benefits of Regular Drain Cleaning",
        blocks: [
          {
            type: "paragraph",
            text: "A planned maintenance routine offers long-term value and peace of mind.",
          },
          {
            type: "list",
            items: [
              "Prevents costly repairs",
              "Improves drainage performance",
              "Extends pipe lifespan",
              "Reduces emergency callouts",
              "Maintains hygiene standards",
            ],
          },
          {
            type: "paragraph",
            text: "A trusted drain cleaning company near me ensures reliable results.",
          },
        ],
      },
      {
        title: "Tips to Maintain Clean Drains",
        blocks: [
          {
            type: "paragraph",
            text: "Small habits help reduce build-up and extend cleaning intervals.",
          },
          {
            type: "list",
            items: [
              "Avoid pouring grease into sinks",
              "Use drain covers to catch debris",
              "Flush drains regularly with hot water",
              "Schedule routine inspections",
              "Contact a local drain company for early signs",
            ],
          },
          {
            type: "paragraph",
            text: "Proper care supports long-term drain maintenance and reduces risk.",
          },
        ],
      },
      {
        title: "Choosing the Right Drainage Company",
        blocks: [
          {
            type: "paragraph",
            text: "Selecting a qualified provider ensures safe and effective service. Not all drain companies offer the same level of expertise.",
          },
          {
            type: "paragraph",
            text: "Look for:",
          },
          {
            type: "list",
            items: [
              "Experience in drainage cleaning services",
              "Use of modern equipment",
              "Fast response for emergencies",
              "Transparent pricing",
              "Strong customer reviews",
            ],
          },
          {
            type: "paragraph",
            text: "A dependable drainage contractor near me delivers consistent and professional results.",
          },
        ],
      },
      {
        title: "Understanding Drain Clearance Costs",
        blocks: [
          {
            type: "paragraph",
            text: "Cost varies based on blockage severity and system size. Simple cleaning costs less than emergency repairs or replacements.",
          },
          {
            type: "paragraph",
            text: "Factors affecting price include:",
          },
          {
            type: "list",
            items: [
              "Type of blockage",
              "Drain location",
              "Required equipment",
              "Urgency of service",
            ],
          },
          {
            type: "paragraph",
            text: "A professional drain clearance London provider offers clear pricing and long-term value.",
          },
        ],
      },
    ],
    conclusion: [
      "Drain systems require regular care to perform efficiently and avoid disruption. A structured drain cleaning schedule protects property, reduces costs, and ensures smooth operation. Ignoring maintenance leads to blockages, damage, and emergency repairs.",
      "Reliable service keeps systems working without interruption. Contact C4Plus Drainage today for expert drain cleaning, inspections, and tailored maintenance plans.",
    ],
    cta: "Contact C4Plus Drainage today for expert drain cleaning, inspections, and tailored maintenance plans.",
    faqTitle: "FAQs",
    faqs: [
      {
        question: "How often should I book drain cleaning?",
        answer:
          "Most homes need annual cleaning, while commercial systems need more frequent service.",
      },
      {
        question: "Can I clean drains myself?",
        answer:
          "Basic methods fix minor issues, but professional cleaning removes deep blockages.",
      },
      {
        question: "What causes blocked drains?",
        answer:
          "Grease, hair, debris, and foreign objects often cause blockages in drainage systems.",
      },
      {
        question: "Is professional drain cleaning expensive?",
        answer:
          "Costs vary, but regular maintenance reduces expensive emergency repairs.",
      },
      {
        question: "When should I call a drainage expert?",
        answer:
          "Call a professional when drains show slow flow, bad smells, or repeated blockages.",
      },
    ],
  },
  {
    slug: "reliable-cctv-drain-surveys-expert-drain-cleaning",
    title: "Reliable CCTV Drain Surveys & Expert Drain Cleaning",
    headline: "Professional Drain Cleaning & CCTV Drain Surveys in London",
    date: "May 22, 2026",
    author: "c4plusdrainage",
    image: "/images/blog/reliable-cctv-drain-cleaning.jpg",
    imageAlt:
      "Engineer high-pressure jetting an open drain with yellow hose and jetting machine on a driveway",
    excerpt:
      "Combine expert CCTV drain surveys with professional high-pressure cleaning across London and Surrey. Identify and clear hidden blockages fast.",
    metaTitle: "Reliable CCTV Drain Surveys & Cleaning | C4 Plus Drainage",
    metaDescription:
      "Combine expert CCTV drain surveys with professional high-pressure cleaning across London and Surrey. Identify and clear hidden blockages fast; call today!",
    intro: [
      {
        title: "Introduction",
        blocks: [
          {
            type: "paragraph",
            text: "Drain Cleaning London services help identify hidden drainage issues early. This prevents serious damage. We also provide fast CCTV drain surveys. In addition, we offer professional cleaning solutions. These remove blockages and eliminate foul smells. As a result, drainage systems stay clean and run smoothly.",
          },
        ],
      },
    ],
    sections: [
      {
        title: "What We Offer",
        blocks: [
          {
            type: "paragraph",
            text: "Drainage systems often fail without warning. Also, this causes damage and disruption. We use CCTV to inspect drains and find faults. We also provide drain cleaning for homes and commercial properties.",
          },
          {
            type: "paragraph",
            text: "Blocked pipes often cause slow water flow and unpleasant odours. However, our team provides drain unblocking in London and blocked drain clearance. We use high-pressure jetting and drain cleaning rods for full clearance. This process efficiently removes debris, grease, and roots.",
          },
          {
            type: "paragraph",
            text: "Property owners often need a reliable inspection before purchase or renovation. Our drain surveys and inspections provide clear reports. We identify cracks, structural faults, and collapsed drain pipes. These findings support informed decisions and reduce future risks.",
          },
          {
            type: "paragraph",
            text: "Unexpected emergencies often require a fast response. Our drain surveys and inspections provide clear reports. We identify cracks, structural faults, and collapsed drain pipes. Our drain cleaner service ensures minimal disruption and long-lasting results.",
          },
          {
            type: "paragraph",
            text: "Outdoor drainage systems often clog due to leaves and debris. We provide outdoor, storm, and underground drain cleaning services. This keeps water flowing and prevents flooding.",
          },
        ],
      },
      {
        title: "Why Choose Us",
        blocks: [
          {
            type: "paragraph",
            text: "Recurring drainage issues often indicate poor workmanship or temporary fixes. We provide reliable drain cleaning and drainage cleaning services with proven experience. Moreover, each project follows industry standards to ensure safety and durability.",
          },
          {
            type: "paragraph",
            text: "Service delays often increase damage and costs. Our team responds fast with 24/7 drain cleaning. We fix issues without delay. So, this approach protects properties and prevents escalation.",
          },
          {
            type: "paragraph",
            text: "Unclear pricing often causes frustration. We give clear quotes, including drain clearance cost. Clients understand every step before work starts. Our honest process builds trust and long-term relationships.",
          },
          {
            type: "paragraph",
            text: "Poor diagnostics often lead to repeated repairs. We use modern CCTV equipment and drain-cleaning machines to deliver accurate results. This precision helps us apply the right drainage solutions the first time.",
          },
        ],
      },
      {
        title: "Benefits of CCTV Drain Surveys & Drain Cleaning",
        blocks: [
          {
            type: "paragraph",
            text: "Blocked drainage systems often disrupt daily routines and business operations. Our drain cleaning services restore flow and stop recurring issues. This keeps drainage systems running smoothly.",
          },
          {
            type: "paragraph",
            text: "Undetected damage often leads to expensive repairs. CCTV inspections find problems early. This allows timely drain repair in London and reduces long-term costs. As a result, this proactive approach protects property value.",
          },
          {
            type: "paragraph",
            text: "Poor drainage often creates hygiene risks. Our drain cleaning methods remove build-up. This improves safety in kitchens, bathrooms, and outdoor areas. Inefficient systems often increase maintenance needs. Regular drain maintenance extends system life. It also reduces the need for frequent drain repairs.",
          },
          {
            type: "paragraph",
            text: "Businesses often face operational disruptions due to blocked systems. Our commercial drain services keep operations running smoothly in high-demand environments.",
          },
        ],
      },
      {
        title: "Areas We Cover",
        blocks: [
          {
            type: "paragraph",
            text: "Drainage problems can occur in any property, whether residential or commercial. We provide London drainage services across all areas. We also cover East London and nearby regions.",
          },
          {
            type: "paragraph",
            text: "Local customers search for trusted drain cleaning near me or local drainage companies. Our service covers homes, offices, and industrial sites. We provide reliable drainage solutions.",
          },
          {
            type: "paragraph",
            text: "Expanding service needs require dependable professionals. We are a trusted drainage company in London. We deliver expert support with consistent quality.",
          },
          {
            type: "paragraph",
            text: "Clients often require both private and public system support. We handle private and shared drainage systems. We also manage large-scale projects with care.",
          },
        ],
      },
      {
        title: "Contact Us",
        blocks: [
          {
            type: "paragraph",
            text: "Drainage issues rarely resolve on their own and often worsen over time. Therefore, we offer fast, reliable drain cleaning and CCTV surveys. This keeps systems working well.",
          },
          {
            type: "paragraph",
            text: "Booking a service is simple and convenient. Contact us today for expert drain clearance or drain cleaning services. We provide solutions to suit your needs. Our team is ready to deliver prompt support and lasting results.",
          },
        ],
      },
    ],
    conclusion: [
      "Drainage issues rarely resolve on their own and often worsen over time. Fast, reliable drain cleaning and CCTV surveys keep systems working well.",
    ],
    cta: "Contact us today for expert drain clearance or drain cleaning services. We provide solutions to suit your needs — our team is ready to deliver prompt support and lasting results.",
  },
  {
    slug: "c4-always-the-best-to-call-in-an-emergency-and-beyond",
    title: "C4, always the best to call in an emergency and beyond!",
    headline: "Drainage Advice & Expert Insights From C4plus Drainage",
    date: "January 31, 2025",
    author: "c4plusdrainage",
    excerpt:
      "24/7 emergency drain clearance across Surrey, West Sussex, Kent and South London. DBS-checked engineers, Checkatrade 9.94/10 — call C4 Plus Drainage.",
    metaTitle: "Emergency Drain Clearance 24/7 | C4 Plus Drainage",
    metaDescription:
      "Need an emergency drainage engineer? C4 Plus Drainage is available 24/7 across Surrey, West Sussex, Kent and South London. DBS-checked engineers — call today!",
    sections: [
      {
        title: "Drain clearance",
        blocks: [
          {
            type: "paragraph",
            text: "If you notice bad odours or an overflowing drain and need an emergency drainage engineer, you can rest assured that our engineers at C4 are available 24 hours a day, 365 days of the year. We have highly trained and experienced engineers positioned all over Surrey and parts of West Sussex, Kent and South London, ready to come and solve your drainage issues quickly and efficiently.",
          },
          {
            type: "paragraph",
            text: "We always prioritise emergency call outs, treating your call with the utmost urgency. All our friendly engineers are DBS checked and always arrive in our own C4 Plus branded vehicles.",
          },
          {
            type: "paragraph",
            text: "We have found solutions where other companies have failed and hence have loyal customers with whom we have formed strong relationships. Just check out our reviews from our happy customers to see exactly why C4 should be the only ones to call for all your drainage issues. We are proud to have earned a score of 9.94 out of 10 on Checkatrade and have some fantastic reviews on Google as well.",
          },
          {
            type: "paragraph",
            text: "Here at C4, we don’t just unblock your drain and solve your issue, we will offer advice on how to avoid the problem from occurring again. If further investigation is required, we use the latest technology to identify and solve the issue.",
          },
          {
            type: "paragraph",
            text: "If you can’t flush, Call C4 Plus, the drainage company you can trust!",
          },
          {
            type: "paragraph",
            text: "Check out our service in just some of the areas we cover here:",
          },
          {
            type: "list",
            items: [
              "Blocked Drains in Leatherhead",
              "Blocked Drains in Redhill",
              "Blocked Drains in Epsom",
              "Blocked Drains in Caterham",
              "Blocked Drains in Reigate",
              "Blocked Drains in Purley",
              "Blocked Drains in Coulsdon",
              "Blocked Drains in Surrey",
            ],
          },
        ],
      },
    ],
    conclusion: [
      "If you can’t flush, Call C4 Plus, the drainage company you can trust!",
    ],
    cta: "Need emergency drain clearance? Contact C4 Plus Drainage today — available 24 hours a day, 365 days a year across Surrey and surrounding areas.",
  },
  {
    slug: "planned-drain-maintenance-for-residential-property-management-companies",
    title: "Planned Drain Maintenance for Residential Property Management Companies",
    headline:
      "Planned Drain Maintenance Services for Residential Property Management Companies",
    date: "January 31, 2025",
    author: "c4plusdrainage",
    image: "/images/blog/planned-drain-maintenance.jpg",
    imageAlt:
      "Drainage technician and property manager reviewing a maintenance report on a tablet in a kitchen",
    excerpt:
      "Why residential property managers should prioritise regular drain inspections — prevent emergencies, protect property value, and keep tenants happy.",
    metaTitle: "Planned Drain Maintenance for Property Managers | C4 Plus",
    metaDescription:
      "Regular drain inspections for residential property managers — prevent costly emergencies, protect property value, and keep tenants happy. Book a CCTV look-see today.",
    intro: [
      {
        title: "Introduction",
        blocks: [
          {
            type: "paragraph",
            text: "Here’s why regular inspections and drain maintenance should be a priority for any residential property manager:",
          },
        ],
      },
    ],
    sections: [
      {
        title: "Prevents Costly Emergencies",
        blocks: [
          {
            type: "paragraph",
            text: "Unexpected drain issues, leading to leaks and water damage can be costly and time-consuming to repair. Decoration costs, new floorings, insurance claims and a relocation for tenants is something to be avoided.",
          },
          {
            type: "paragraph",
            text: "Regular drain maintenance allows minor issues to be addressed before they escalate, ultimately saving money on emergency drain repairs and minimizing disruption for tenants.",
          },
        ],
      },
      {
        title: "Improves Tenant Satisfaction",
        blocks: [
          {
            type: "paragraph",
            text: "Residents expect their living environment to be safe, comfortable, and free of issues caused by blocked drains like slow drainage, unpleasant odours or floods.",
          },
          {
            type: "paragraph",
            text: "Carrying out regular drain inspections reduces the risk of any drainage issues occurring and ensures tenants remain satisfied.",
          },
        ],
      },
      {
        title: "Protects the Property’s Value",
        blocks: [
          {
            type: "paragraph",
            text: "A property’s infrastructure, including its plumbing and drainage systems, is a key part of its value. Regular drain maintenance helps extend the life of these systems, preventing costly replacements and maintaining the overall value of the property.",
          },
        ],
      },
      {
        title: "Prevents Health Hazards",
        blocks: [
          {
            type: "paragraph",
            text: "Blocked drains can lead to water stagnation, mould, and mildew growth, all of which pose significant health risks to residents. Foul odours, standing water, and the spread of bacteria can create unsafe living conditions. A planned maintenance schedule ensures drains are clear and functioning properly, helping to maintain a healthy environment for tenants.",
          },
        ],
      },
      {
        title: "Compliance with Regulations",
        blocks: [
          {
            type: "paragraph",
            text: "Regulations are in place regarding plumbing and drainage systems. Planned maintenance ensures compliance with health and safety codes, avoiding potential legal issues and fines that can arise from neglected drainage systems.",
          },
        ],
      },
    ],
    conclusion: [
      "At C4 Plus we offer a cost effective ‘CCTV look-see’ drain inspection service which is carried out on site with the customer. This identifies any drain issues whether it be hair line fractures to be repaired or the need for drain cleaning. Be proactive, not reactive – book a regular inspection with us to save you money and keep your tenants happy.",
      "We cover many areas in Surrey, Sussex, Kent and London including Redhill, Epsom, Sevenoaks, Crawley and East Grinstead.",
    ],
    cta: "Be proactive, not reactive — book a regular CCTV look-see inspection with C4 Plus Drainage to save money and keep your tenants happy.",
  },
  {
    slug: "limit-the-need-for-drain-repairs-this-winter",
    title: "Limit the need for drain repairs this winter",
    headline: "How to Prevent Drain Repairs and Blocked Drains This Winter",
    date: "January 31, 2025",
    author: "c4plusdrainage",
    image: "/images/blog/winter-drain-repairs.png",
    imageAlt:
      "Downpipe discharging into an outdoor drain grate beside a brick wall",
    excerpt:
      "Winter weather and festive cooking put extra pressure on drains. Follow these essential maintenance tips to reduce blockages and drain repairs.",
    metaTitle: "Prevent Winter Drain Repairs & Blockages | C4 Plus Drainage",
    metaDescription:
      "Wet winters and festive cooking put drains under pressure. Clear gutters, book a CCTV look-see, and flush drains to limit repairs — call C4 Plus 24/7.",
    intro: [
      {
        title: "Introduction",
        blocks: [
          {
            type: "paragraph",
            text: "There’s no denying that the weather has been particularly wet so far this winter and many parts of the country have witnessed terrible flooding.",
          },
          {
            type: "paragraph",
            text: "The festive period and the winter weather can cause havoc with our drains in various ways. All the lovely Christmas food being prepared can mean an increase in the amount of fats and grease going down our drains. A drop in temperatures can also cause the fats to solidify, blocking the drainage system.",
          },
          {
            type: "paragraph",
            text: "Plus, having more people in our houses means there is more pressure put on our drains and who knows what some guests, including Father Christmas, might put down your drains without you knowing!",
          },
          {
            type: "paragraph",
            text: "Although we can’t alter the weather, we can take some preventative measures to ensure that our drains are in their best condition to cope with the extra pressure put on them.",
          },
        ],
      },
    ],
    sections: [
      {
        title: "Here are some essential drain maintenance tips:",
        blocks: [
          {
            type: "list",
            items: [
              "Ensure all gutters have been cleared of the autumn leaf drop to minimise blocked drains. Contact us for more information on our gutter cleaning service.",
              "Ensure all drains have been inspected with our cctv look see service. Using this, we can assess if there are any cracks or damage to the drain that needs to be fixed.",
              "Our cctv drain survey also detects any blocked drains which could be caused by leaves or silt washed down by previous excessive periods of rain. Our drain flushing and cleaning service can then be carried out to remove all debris and blockages.",
            ],
          },
          {
            type: "paragraph",
            text: "Of course, even with the best kept drains, periods of especially heavy and prolonged rain can cause our drains to overflow. However, if you have kept up with essential planned drain maintenance this can drain away with a little time, but if you need help with a blocked drain, don’t hesitate to give us a call. We are available 24 hours a day, 7 days a week all year round.",
          },
          {
            type: "paragraph",
            text: "Our priority is to help you get your lives back to normal as soon as possible as the unexpected can happen at any time, even while you’re cooking the turkey!",
          },
          {
            type: "paragraph",
            text: "We are based in Redhill, Surrey but have engineers located all over Surrey, Kent, parts of London and Sussex including Croydon, Leatherhead, Reigate and Sevenoaks so we are able to attend your emergency quickly.",
          },
        ],
      },
    ],
    conclusion: [
      "Even with well-maintained drains, heavy rain can cause overflows — but planned maintenance helps water clear faster. If you need help with a blocked drain, we’re available 24/7 all year round.",
    ],
    cta: "Need winter drain help? Contact C4 Plus Drainage today — engineers across Surrey, Kent, London and Sussex ready to attend quickly.",
  },
  {
    slug: "i-can-never-look-at-drains-the-same-way-again",
    title: "I Can Never Look at Drains the Same Way Again",
    headline: "COVID-19, Wastewater and Drainage Safety: What You Need to Know",
    date: "January 31, 2025",
    author: "c4plusdrainage",
    image: "/images/blog/look-at-drains.png",
    imageAlt:
      "Homeowner shaking hands with drainage technicians after a completed service visit",
    excerpt:
      "How COVID-19 and wastewater sampling changed drainage safety thinking — plus how C4 Plus raised sterilisation and PPE standards for clients.",
    metaTitle: "COVID-19, Wastewater & Drain Safety | C4 Plus Drainage",
    metaDescription:
      "Learn how COVID-19 and wastewater sampling shaped drainage safety. C4 Plus uses eco-friendly sterilisation and higher PPE standards — stay safe with our advice.",
    intro: [
      {
        title: "Introduction",
        blocks: [
          {
            type: "paragraph",
            text: "The Corona virus has been in our lives for over 8 months, caused hundreds of thousands of deaths and doesn’t show signs of stopping. Front line workers are in daily contact with the deadly disease. It’s a threat we constantly have to be mindful of.",
          },
          {
            type: "paragraph",
            text: "Yes I said we…. Drainage specialists might not necessarily be the first people who spring to mind when you mention front line workers, but the current uptake in wastewater sampling to determine where outbreaks may occur, has really got our industry thinking. How safe is the water we work in and the water we drink after it goes through the treatment system and are we in danger of catching Covid from say swimming in the sea?",
          },
        ],
      },
    ],
    sections: [
      {
        title: "What the science says",
        blocks: [
          {
            type: "paragraph",
            text: "Environmental biologists have warned that the potential spread of COVID-19 via sewage ‘must not be neglected’ in the battle to protect human health. But WHO states there may be no evidence of the survival of the COVID-19 virus in drinking-water or sewage.",
          },
          {
            type: "paragraph",
            text: "So it all comes down to time and being careful. These viruses can live outside of a host in any given environment and condition. A recent review of the survival of human Corona Virus on surfaces found large variability, ranging from 2 hours to 9 days. The survival time depends on a number of factors, including the type of surface, temperature, relative humidity and specific strain of the virus. The same review also found that effective inactivation could be achieved within 1 minute using common disinfectants, such as 70% ethanol or sodium hypochlorite.",
          },
        ],
      },
      {
        title: "How C4 Plus Drainage responds",
        blocks: [
          {
            type: "paragraph",
            text: "Since the uptake on wastewater sampling C4 Plus Drainage have increased sterilisation levels and PPE. We use environmentally friendly sterilisation to flush drains that protect against all germs (bacteria, viruses and fungi) including Covid-19.",
          },
          {
            type: "paragraph",
            text: "Our advice to clients is to continue to wash your hands regularly, to wear facemasks masks wherever possible, continue to social distance. And above all Stay safe!",
          },
        ],
      },
    ],
    conclusion: [
      "Our advice to clients is to continue to wash your hands regularly, to wear facemasks wherever possible, continue to social distance. And above all — stay safe!",
    ],
    cta: "Need safe, professional drain care? Contact C4 Plus Drainage — we use environmentally friendly sterilisation and elevated PPE standards on every job.",
  },
];

export function getNewsPost(slug: string): NewsPost | undefined {
  return newsPosts.find((post) => post.slug === slug);
}

function blockToText(block: BlogBlock): string {
  switch (block.type) {
    case "paragraph":
    case "heading":
      return block.text;
    case "list":
      return block.items.join(" ");
    case "tip":
    case "example":
      return [block.title, block.text].filter(Boolean).join(" ");
    case "caseStudy":
      return [
        block.title,
        ...block.paragraphs,
        ...(block.list ?? []),
        block.closing,
      ]
        .filter(Boolean)
        .join(" ");
  }
}

function sectionToText(section: BlogSection): string {
  return [section.title, ...section.blocks.map(blockToText)].join(" ");
}

export function getPostSearchText(post: NewsPost): string {
  return [
    post.title,
    post.headline,
    post.excerpt,
    post.metaTitle,
    post.metaDescription,
    post.author,
    post.date,
    ...(post.intro ?? []).map(sectionToText),
    ...(post.sections ?? []).map(sectionToText),
    ...(post.conclusion ?? []),
    post.cta,
    post.faqTitle,
    ...(post.faqs ?? []).flatMap((faq) => [faq.question, faq.answer]),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function searchNewsPosts(query: string): NewsPost[] {
  const terms = query
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (!terms.length) return newsPosts;

  return newsPosts.filter((post) => {
    const haystack = getPostSearchText(post);
    return terms.every((term) => haystack.includes(term));
  });
}
