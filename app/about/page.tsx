import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Hammer,
  ShieldCheck,
  Sparkles,
  MapPin,
  Calendar,
} from "lucide-react";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";

export const metadata: Metadata = {
  title: "The Founder's Story — Creator The Maker",
  description:
    "I Didn’t Bring Back a Job. I Brought Back an Idea. Discover how student life in Nova Scotia and generational timber craftsmanship in Delhi built India's premier sneaker furniture brand.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-black selection:bg-ctm-red selection:text-white">
      <Container size="wide">
        {/* HEADER: Editorial Eyebrow & Hero Title */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200">
            <span className="w-2 h-2 rounded-full bg-ctm-red animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-ctm-red uppercase font-bold">
              THE FOUNDER&apos;S CHRONICLE // NOVA SCOTIA ➔ NEW DELHI
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black uppercase tracking-tight leading-[0.95] text-black">
            I DIDN&apos;T BRING BACK A JOB<span className="text-ctm-red">.</span>
            <br />
            <span className="text-ctm-red">I BROUGHT BACK AN IDEA.</span>
          </h1>

          <p className="text-lg sm:text-xl text-ctm-lightMuted font-normal leading-relaxed max-w-2xl mx-auto">
            The journey of how student life in Canada, generational woodcraft in
            Delhi, and a relentless passion for sneakers created India&apos;s
            benchmark sneaker storage studio.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-neutral-500 pt-2">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-ctm-red" />
              FOUNDED 2020–2021
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-ctm-red" />
              DELHI WORKSHOP // PAN-INDIA DISPATCH
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span className="text-ctm-red font-bold">100%</span>
              HANDCRAFTED IN INDIA 🇮🇳
            </span>
          </div>
        </div>

        {/* FEATURED STORY BANNER: Editorial Split Hero */}
        <div className="relative w-full bg-[#09090B] text-white border border-neutral-800 p-8 sm:p-14 lg:p-16 mb-24 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-ctm-red/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-ctm-red" />
                <span>ORIGIN MEMOIR</span>
              </div>

              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-display font-bold leading-snug text-white">
                &ldquo;These weren’t just cupboards. They were carefully designed
                pieces of furniture—built around something people were
                genuinely passionate about.&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                2020. Nova Scotia, Canada. I was there as a student—studying,
                working part-time, and figuring out what I wanted to do with my
                life. And somewhere between my classes and my part-time job, I
                discovered something that completely fascinated me: sneaker
                culture and the bespoke display furniture built for grails.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-neutral-400">
                <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-white">
                  CTM
                </div>
                <div>
                  <p className="text-white font-bold font-display uppercase tracking-wider">
                    FOUNDER & CREATIVE DIRECTOR
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    Creator The Maker Studio
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-[400px] w-full bg-neutral-900 border border-neutral-800 p-4 shadow-xl">
                <Image
                  src="/images/brand/brand-hero.svg"
                  alt="Creator The Maker Studio Journey"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md border border-neutral-800 text-[11px] font-mono text-neutral-300 flex justify-between items-center">
                  <span>CANADA ➔ INDIA</span>
                  <span className="text-ctm-red font-bold">EST. 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* THE CHAPTERS: 4-Part Editorial Layout */}
        <div className="max-w-4xl mx-auto space-y-20 mb-28">
          {/* Chapter 01 */}
          <div className="relative pl-8 sm:pl-12 border-l-2 border-ctm-red space-y-4">
            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-ctm-red" />
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-ctm-red font-bold tracking-widest uppercase">
                CHAPTER 01
              </span>
              <span className="text-xs font-mono text-ctm-muted uppercase">
                // 2020 • NOVA SCOTIA, CANADA
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-display font-black uppercase tracking-wide text-black">
              The Spark in Canada
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-ctm-lightMuted font-normal leading-relaxed">
              <p>
                2020. Nova Scotia, Canada. I was there as a student—studying,
                working part-time, and figuring out what I wanted to do with my
                life. And somewhere between my classes and my part-time job, I
                discovered something that completely fascinated me:{" "}
                <strong className="text-black font-semibold">
                  Sneaker culture.
                </strong>
              </p>
              <p>
                I noticed people abroad creating bespoke sneaker trunks, display
                furniture, and storage pieces specifically for their
                collections. These weren’t just cupboards. They were carefully
                designed pieces of furniture—built around something they were
                genuinely passionate about.
              </p>
              <p>
                I was fascinated by the craftsmanship. But more importantly, I
                kept thinking:
              </p>
              <div className="p-4 bg-ctm-surfaceSubtle border-l-4 border-black text-black font-display font-bold text-lg italic">
                &ldquo;Why don’t we have this in India?&rdquo;
              </div>
              <p>
                At the time, India’s sneaker culture was only beginning to
                explode. A new generation of sneakerheads was emerging—people who
                didn’t just want to wear their sneakers, but wanted to collect
                them, display them, and build a lifestyle around them.
              </p>
              <p className="font-semibold text-black">
                And I wanted to build something for them.
              </p>
            </div>
          </div>

          {/* Chapter 02 */}
          <div className="relative pl-8 sm:pl-12 border-l-2 border-black space-y-4">
            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black" />
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-black font-bold tracking-widest uppercase">
                CHAPTER 02
              </span>
              <span className="text-xs font-mono text-ctm-muted uppercase">
                // THE DECISION • COMING HOME
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-display font-black uppercase tracking-wide text-black">
              Generational Woodcraft in the Blood
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-ctm-lightMuted font-normal leading-relaxed">
              <p>
                After completing my studies in Canada, I had a choice: I could
                stay back and build a life there, or I could come home and build
                something of my own.
              </p>
              <div className="p-4 bg-red-50 border border-red-200 text-ctm-red font-display font-black text-xl uppercase tracking-wider">
                I CHOSE INDIA.
              </div>
              <p>
                I came back to Delhi with an idea, a lot of curiosity, and
                something that was already in my blood—
                <strong className="text-black font-semibold">
                  woodworking.
                </strong>
              </p>
              <p>
                My family has been in the timber and plywood business for
                generations. I grew up around wood, plywood, tools, craftsmen,
                and the raw smell of a sawdust workshop.
              </p>
              <p>
                So I decided to combine two worlds that had never really been
                brought together:
              </p>
              <div className="p-6 bg-[#09090B] text-white border border-neutral-800 space-y-2 font-mono text-xs sm:text-sm">
                <div className="flex items-center justify-between text-neutral-400">
                  <span>FAMILY HERITAGE:</span>
                  <span className="text-white font-bold">
                    Generations in Timber & Plywood Craft
                  </span>
                </div>
                <div className="flex items-center justify-center py-1 text-ctm-red text-base font-bold">
                  +
                </div>
                <div className="flex items-center justify-between text-neutral-400">
                  <span>PERSONAL PASSION:</span>
                  <span className="text-white font-bold">
                    Global Sneaker Culture & Display Art
                  </span>
                </div>
                <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-ctm-red font-bold text-sm">
                  <span>THE OUTCOME:</span>
                  <span className="text-white font-display uppercase tracking-wider">
                    CREATOR THE MAKER
                  </span>
                </div>
              </div>
              <p>And that’s how Creator The Maker began.</p>
            </div>
          </div>

          {/* Chapter 03 */}
          <div className="relative pl-8 sm:pl-12 border-l-2 border-ctm-red space-y-4">
            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-ctm-red" />
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-ctm-red font-bold tracking-widest uppercase">
                CHAPTER 03
              </span>
              <span className="text-xs font-mono text-ctm-muted uppercase">
                // 2020–2021 • THE WORKSHOP GRIND
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-display font-black uppercase tracking-wide text-black">
              From an Idea to a Movement
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-ctm-lightMuted font-normal leading-relaxed">
              <p>
                Around 2020–2021, I started experimenting with my first sneaker
                storage pieces. There were no fancy factories. No massive team.
                No blueprint for what I was trying to create.
              </p>
              <div className="p-4 bg-ctm-surfaceSubtle border border-ctm-border text-black font-display font-bold text-base sm:text-lg">
                &ldquo;Just an idea: Build furniture that feels as special as the
                sneakers it holds.&rdquo;
              </div>
              <p>
                I started designing, experimenting, building, making mistakes,
                improving, and building again. We tested hydraulic shockers,
                tested wheel buffers, tested 18mm Action/Century Pre-Laminated
                HDHMR substrates, and calibrated 3M UV digital printing to
                withstand heat, moisture, and time.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center font-mono text-xs">
                <div className="p-3 bg-white border border-ctm-border">
                  <span className="block text-ctm-red font-bold text-lg">01</span>
                  <span className="text-black uppercase font-bold">The Idea</span>
                </div>
                <div className="p-3 bg-white border border-ctm-border">
                  <span className="block text-ctm-red font-bold text-lg">02</span>
                  <span className="text-black uppercase font-bold">The Product</span>
                </div>
                <div className="p-3 bg-white border border-ctm-border">
                  <span className="block text-ctm-red font-bold text-lg">03</span>
                  <span className="text-black uppercase font-bold">The Brand</span>
                </div>
                <div className="p-3 bg-white border border-ctm-border">
                  <span className="block text-ctm-red font-bold text-lg">04</span>
                  <span className="text-black uppercase font-bold">The Movement</span>
                </div>
              </div>
              <p>
                Slowly, the idea became a product. The product became a brand.
                And the brand became a community.
              </p>
              <p>
                Today, Creator The Maker is my attempt to create something that I
                wished existed when I first discovered sneaker furniture in
                Canada:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono font-bold text-black uppercase">
                <li className="p-2.5 bg-ctm-surfaceSubtle border border-ctm-border flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-ctm-red" />
                  Bespoke Sneaker Storage
                </li>
                <li className="p-2.5 bg-ctm-surfaceSubtle border border-ctm-border flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-ctm-red" />
                  Statement Furniture
                </li>
                <li className="p-2.5 bg-ctm-surfaceSubtle border border-ctm-border flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-ctm-red" />
                  Made for Collectors
                </li>
                <li className="p-2.5 bg-red-50 border border-red-200 text-ctm-red flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-ctm-red" />
                  Made in India 🇮🇳
                </li>
              </ul>
            </div>
          </div>

          {/* Chapter 04 */}
          <div className="relative pl-8 sm:pl-12 border-l-2 border-black space-y-4">
            <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black" />
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-black font-bold tracking-widest uppercase">
                CHAPTER 04
              </span>
              <span className="text-xs font-mono text-ctm-muted uppercase">
                // THE MANIFESTO • MADE IN INDIA
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-display font-black uppercase tracking-wide text-black">
              Why I Came Back
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-ctm-lightMuted font-normal leading-relaxed">
              <p>
                For me, this was never about simply making cupboards for shoes.
              </p>
              <p className="text-base sm:text-lg font-bold text-black">
                It was about proving that something I admired abroad could be
                imagined, designed, and handcrafted right here in India.
              </p>
              <div className="p-6 bg-black text-white border border-neutral-800 space-y-3">
                <p className="text-lg sm:text-xl font-display font-bold text-white uppercase tracking-wide">
                  &ldquo;India doesn’t need to copy global sneaker culture.
                  <br />
                  <span className="text-ctm-red">
                    We can create our own.
                  </span>&rdquo;
                </p>
                <p className="text-xs font-mono text-neutral-400">
                  And as India’s sneaker community continues to grow, I want
                  Creator The Maker to grow with it.
                </p>
              </div>
              <p>
                From the first trunk to whatever comes next—
                <strong className="text-black font-semibold">
                  this is still just the beginning.
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* FOUNDER SIGNATURE MANIFESTO CARD */}
        <div className="max-w-4xl mx-auto bg-ctm-surfaceSubtle border-2 border-black p-8 sm:p-14 text-center space-y-6 shadow-xl mb-24">
          <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto text-sm font-mono font-bold">
            🇮🇳
          </div>
          <h3 className="text-2xl sm:text-4xl font-display font-black uppercase text-black tracking-wide">
            WELCOME TO CREATOR THE MAKER<span className="text-ctm-red">.</span>
          </h3>
          <div className="space-y-1 font-display font-bold text-base sm:text-xl text-black uppercase tracking-wider">
            <p>Built for the collection.</p>
            <p>Designed for the obsession.</p>
            <p className="text-ctm-red font-black">Made in India. 🇮🇳</p>
          </div>
          <div className="pt-4 border-t border-ctm-border max-w-xs mx-auto">
            <p className="text-xs font-mono text-ctm-muted uppercase tracking-widest">
              NEW DELHI • MUMBAI • BENGALURU
            </p>
          </div>
        </div>

        {/* FOUR PILLARS OF OUR WOODCRAFT */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono text-ctm-red tracking-widest uppercase font-bold">
              TIMBER & HARDWARE DISCIPLINE
            </span>
            <h2 className="text-3xl font-display font-black uppercase text-black">
              HOW GENERATIONAL HERITAGE SHAPES OUR BUILDS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white border border-ctm-border hover:border-black space-y-4 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all">
              <div className="w-10 h-10 border border-ctm-border bg-ctm-surfaceSubtle flex items-center justify-center text-ctm-red">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-lg uppercase tracking-wide text-black">
                Generational Timber
              </h3>
              <p className="text-xs text-ctm-lightMuted leading-relaxed font-normal">
                Decades of family timber trade knowledge select only 18mm
                Action/Century Pre-Laminated HDHMR that remains dimensionally
                flat under extreme weight and changing seasonal humidity.
              </p>
            </div>

            <div className="p-8 bg-white border border-ctm-border hover:border-black space-y-4 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all">
              <div className="w-10 h-10 border border-ctm-border bg-ctm-surfaceSubtle flex items-center justify-center text-ctm-red">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-lg uppercase tracking-wide text-black">
                Hydraulic Kinetic Action
              </h3>
              <p className="text-xs text-ctm-lightMuted leading-relaxed font-normal">
                Dual gas-assisted hydraulic shockers guarantee effortless lid
                operation with soft-close damping, preventing slam fatigue and
                protecting sneaker silhouettes.
              </p>
            </div>

            <div className="p-8 bg-white border border-ctm-border hover:border-black space-y-4 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all">
              <div className="w-10 h-10 border border-ctm-border bg-ctm-surfaceSubtle flex items-center justify-center text-ctm-red">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-lg uppercase tracking-wide text-black">
                Termite & Water Resistant
              </h3>
              <p className="text-xs text-ctm-lightMuted leading-relaxed font-normal">
                Engineered specifically for Indian climates. High-density high
                moisture resistance (HDHMR) core substrates protect against
                insects, dampness, and warpage.
              </p>
            </div>

            <div className="p-8 bg-white border border-ctm-border hover:border-black space-y-4 shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all">
              <div className="w-10 h-10 border border-ctm-border bg-ctm-surfaceSubtle flex items-center justify-center text-ctm-red">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-lg uppercase tracking-wide text-black">
                3M UV & 120µ Matte
              </h3>
              <p className="text-xs text-ctm-lightMuted leading-relaxed font-normal">
                High-definition digital UV direct printing finished with
                120-micron high-grade matte lamination or 1mm architectural
                Mika surfacing for scratch-proof durability.
              </p>
            </div>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="pt-10 text-center space-y-6 border-t border-ctm-border">
          <h3 className="text-2xl sm:text-4xl font-display font-black uppercase text-black tracking-wide">
            EXPLORE THE MASTER LINEUP
          </h3>
          <p className="text-sm text-ctm-muted max-w-md mx-auto font-mono">
            Every piece is built to order and 100% customisable with
            complimentary Pan-India delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button href="/shop" variant="primary" size="lg">
              DISCOVER SNEAKER TRUNKS
            </Button>
            <Button href="/bespoke" variant="outline" size="lg">
              COMMISSION BESPOKE
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
