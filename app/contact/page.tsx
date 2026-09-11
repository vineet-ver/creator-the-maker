import React from "react";
import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/ui/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Direct Concierge & Studio Contacts — Creator The Maker",
  description:
    "Connect directly with Creator The Maker design specialists. WhatsApp Concierge, studio headquarters, white-glove dispatch team, and bespoke spatial consultations.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-black">
      <Container size="wide">
        <SectionHeading
          eyebrow="DIRECT ACCESS"
          title="STUDIO CONCIERGE"
          description="Speak with our design specialists, project directors, or logistics dispatch team regarding catalog hardware and custom bespoke installations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Priority Card */}
            <div className="p-8 bg-white border border-ctm-border hover:border-black transition-colors space-y-4 shadow-sm">
              <div className="inline-flex items-center gap-2 text-ctm-red text-xs font-mono tracking-widest uppercase font-bold">
                <span className="w-2 h-2 rounded-full bg-ctm-red animate-ping" />
                <span>DIRECT CHAT</span>
              </div>
              <h3 className="text-2xl font-display font-black uppercase tracking-wide text-black">
                WhatsApp Concierge
              </h3>
              <p className="text-xs text-ctm-lightMuted leading-relaxed font-normal">
                Direct instantaneous communication with our lead architectural
                consultant for quick product questions, spec sheet PDFs, or CAD
                floorplan reviews.
              </p>
              <a
                href={getWhatsAppUrl({ type: "general" })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black hover:text-ctm-red transition-colors pt-2 font-bold"
              >
                <MessageCircle className="w-4 h-4 text-ctm-red" />
                <span>CHAT WITH US NOW →</span>
              </a>
            </div>

            {/* Studio Headquarters & Channels */}
            <div className="p-8 bg-white border border-ctm-border space-y-6 text-xs font-mono shadow-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-ctm-red shrink-0 mt-0.5" />
                <div>
                  <span className="text-ctm-muted uppercase block text-[10px] font-bold">
                    Atelier & Showroom
                  </span>
                  <p className="text-black font-bold mt-0.5">
                    Creator The Maker Studio
                  </p>
                  <p className="text-ctm-lightMuted">
                    450 West 14th Street, Meatpacking District
                  </p>
                  <p className="text-ctm-lightMuted">New York, NY 10014</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-ctm-border">
                <Mail className="w-4 h-4 text-ctm-red shrink-0 mt-0.5" />
                <div>
                  <span className="text-ctm-muted uppercase block text-[10px] font-bold">
                    Electronic Mail
                  </span>
                  <a
                    href="mailto:concierge@creatorthemaker.com"
                    className="text-black hover:text-ctm-red transition-colors block mt-0.5 font-bold"
                  >
                    concierge@creatorthemaker.com
                  </a>
                  <a
                    href="mailto:bespoke@creatorthemaker.com"
                    className="text-ctm-lightMuted hover:text-ctm-red transition-colors block mt-0.5"
                  >
                    bespoke@creatorthemaker.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-ctm-border">
                <Clock className="w-4 h-4 text-ctm-red shrink-0 mt-0.5" />
                <div>
                  <span className="text-ctm-muted uppercase block text-[10px] font-bold">
                    Hours of Operation
                  </span>
                  <p className="text-black mt-0.5 font-semibold">Monday – Friday: 09:00 – 19:00 EST</p>
                  <p className="text-ctm-lightMuted">
                    Private Showroom Appointments: Saturday & Sunday by Invitation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
