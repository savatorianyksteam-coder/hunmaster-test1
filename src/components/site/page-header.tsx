"use client";

import type { ReactNode } from "react";
import { LineReveal, Reveal } from "@/components/ui/reveal";

export function PageHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
}) {
  return (
    <section className="px-6 pt-40 pb-16 sm:pt-48">
      <div className="mx-auto max-w-6xl">
        <Reveal delay={0.1}>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <h1 className="display mt-5 max-w-3xl text-[clamp(2.3rem,6vw,4.2rem)]">
          <LineReveal delay={0.2} lines={[title]} />
        </h1>
        <Reveal delay={0.45} className="mt-6 max-w-xl">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{text}</p>
        </Reveal>
        <div className="hairline mt-14" />
      </div>
    </section>
  );
}
