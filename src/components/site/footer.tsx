import { Link } from "@tanstack/react-router";
import { Send, Facebook } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Parliament } from "@/components/brand/parliament";
import { NAV_LINKS, TELEGRAM_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border/60">
      <Parliament className="pointer-events-none absolute -bottom-2 left-1/2 h-40 w-[52rem] -translate-x-1/2 text-foreground/[0.045]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <Logo />
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-foreground"
            >
              <Send className="h-4 w-4" />
            </a>
            <span
              aria-label="Facebook — скоро"
              title="Скоро"
              className="glass flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-full text-muted-foreground/60"
            >
              <Facebook className="h-4 w-4" />
            </span>
          </div>
        </div>
        <div className="hairline" />
        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} HunMaster. Курсы венгерского языка.</span>
          <span className="tracking-[0.2em] uppercase">Budapest · Magyar nyelv</span>
        </div>
      </div>
    </footer>
  );
}
