import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-24 pb-16">
      <Container size="narrow">
        <div className="text-center space-y-6 bg-white border border-black/10 shadow-sm p-10 sm:p-16">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-ctm-red" />
            <span className="text-xs font-mono tracking-widest text-ctm-red uppercase">
              COORDINATE 404 // VOID
            </span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-display font-black text-black uppercase tracking-tighter">
            ARCHIVE NOT FOUND<span className="text-ctm-red">.</span>
          </h1>

          <p className="text-sm font-mono text-black/60 max-w-md mx-auto leading-relaxed">
            The architectural blueprint or hardware reference you requested does
            not exist or has been relocated within the vault.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary" size="md">
              RETURN TO SHOWROOM
            </Button>
            <Button href="/shop" variant="outline" size="md">
              BROWSE CATALOG
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
