export type FAQItem = {
  id: string;
  category: "Products" | "Shipping" | "Installation" | "Customization" | "Payments" | "Warranty" | "Maintenance";
  question: string;
  answer: string;
};

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-01",
    category: "Products",
    question: "How does the UV-shielding glass protect sneakers from yellowing?",
    answer:
      "All Creator The Maker glass panels utilize low-iron dual-laminated architectural glass embedded with a specialized polyvinyl butyral (PVB) ultraviolet absorption interlayer. This filters out 99.2% of UV radiation between 280nm and 380nm, halting polymer photo-oxidation, midsole yellowing, and leather drying while preserving 98% visible light clarity.",
  },
  {
    id: "faq-02",
    category: "Products",
    question: "Can large high-top silhouettes and oversized sizes fit inside?",
    answer:
      "Yes. Every compartment in our HEAT series, Sneaker Trunks, and Tower Trunks is engineered around high-top silhouettes up to US Men's size 16 (EU 50.5), including chunky midsoles and extended collar collars such as retro basketball pairs, high-fashion boots, and collaboration models.",
  },
  {
    id: "faq-03",
    category: "Products",
    question: "Do the internal LED arrays generate heat that could damage footwear?",
    answer:
      "No. We use proprietary high-CRI (98+) cold-phosphor linear LED arrays mounted to continuous aluminum heat-sink channels directed outward through the rear chassis. The internal chamber temperature variance remains under 0.4°C even after continuous 24-hour illumination, ensuring glue bonds and aged outsoles remain pristine.",
  },
  {
    id: "faq-04",
    category: "Shipping",
    question: "How are products packaged and delivered?",
    answer:
      "Standard orders ship in heavy-duty reinforced wooden flight crates lined with high-density EVA shock-absorbing foam. For our larger monoliths (Tower Trunk, Long Trunk, and bespoke projects), we provide complimentary White-Glove delivery: a two-person specialist courier will uncrate the unit, position it in your chosen room, level the chassis, and remove all crating materials.",
  },
  {
    id: "faq-05",
    category: "Shipping",
    question: "What are typical delivery lead times?",
    answer:
      "In-stock pieces from the HEAT series and Sneaker Trunks dispatch within 3–5 business days, with transit times averaging 4–7 business days worldwide. Custom finishes or Bespoke commissions generally carry a build cycle of 4–8 weeks depending on spatial scope and material selection.",
  },
  {
    id: "faq-06",
    category: "Installation",
    question: "Is professional wall mounting required?",
    answer:
      "For standalone pieces such as the HEAT 2.0 and Sneaker Trunk, zero mounting is required—they arrive ready to plug in. For the 2.2m Tower Trunk, we supply concealed seismic anchoring brackets and heavy-duty anchors for masonry and drywall studs. Our white-glove team can complete the anchor installation upon request.",
  },
  {
    id: "faq-07",
    category: "Customization",
    question: "Can I commission a custom size or full walk-in sneaker room?",
    answer:
      "Yes. Our Bespoke Architectural division specializes in tailor-made installations ranging from single custom dimensions to entire collector showrooms and walk-in penthouses. You can begin the process via our Bespoke Studio page or schedule a direct video consultation with our lead spatial engineer.",
  },
  {
    id: "faq-08",
    category: "Payments",
    question: "What payment methods are supported?",
    answer:
      "We accept all major credit and debit cards via Stripe (Visa, Mastercard, American Express), Apple Pay, Google Pay, and direct wire transfer for bespoke commissions. We also offer split-deposit structures (50% booking / 50% on completion) for custom architectural projects.",
  },
  {
    id: "faq-09",
    category: "Warranty",
    question: "What is covered under the Creator The Maker warranty?",
    answer:
      "All structural components, extruded aluminum frames, and kinetic hinges are covered by our 5-Year Limited Architectural Warranty (Lifetime for Sneaker Trunk chassis). Electronic components, LED modules, and smart touch controllers are warrantied for 3 years, with immediate modular replacement parts stocked globally.",
  },
  {
    id: "faq-10",
    category: "Maintenance",
    question: "How should I clean and maintain the materials?",
    answer:
      "Clean anodized aluminum and composite surfaces using a dry or lightly dampened microfiber cloth. Use non-ammonia, non-alcohol optical glass cleaner on museum glass panels. Each order arrives with a curated Creator The Maker care kit, including specialized optical cloths and surface preservative.",
  },
];
