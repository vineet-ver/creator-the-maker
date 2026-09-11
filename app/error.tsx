"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Container } from "@/ui/Container";
import { Button } from "@/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Application Boundary Exception]", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center pt-24 pb-16">
      <Container size="narrow">
        <div className="text-center space-y-6 bg-white border border-black/10 shadow-sm p-10 sm:p-16">
          <div className="w-12 h-12 bg-ctm-red/10 border border-ctm-red flex items-center justify-center mx-auto text-ctm-red">
            <AlertTriangle className="w-6 h-6" />
          </div>

          <span className="text-xs font-mono tracking-widest text-ctm-red uppercase">
            SYSTEM DISRUPTION
          </span>

          <h1 className="text-3xl sm:text-5xl font-display font-black text-black uppercase tracking-tight">
            SOMETHING WENT WRONG<span className="text-ctm-red">.</span>
          </h1>

          <p className="text-xs font-mono text-black/60 max-w-md mx-auto leading-relaxed">
            An unexpected error occurred during state resolution. Our telemetry
            systems have registered the occurrence.
          </p>

          <div className="pt-4 flex justify-center">
            <button
              onClick={() => reset()}
              className="px-6 py-3.5 bg-black text-white hover:bg-ctm-red text-xs font-display font-bold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
            >
              <RefreshCw className="w-4 h-4" />
              <span>RETRY OPERATION</span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
