"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Action {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function CTASection({
  title,
  subtitle,
  actions = [],
  className = "",
}: {
  title: string;
  subtitle?: string;
  actions?: Action[];
  className?: string;
}) {
  return (
    <section className={`relative py-14 sm:py-16 mt-8 ${className}`}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl bg-white/95 shadow-xl ring-1 ring-black/5 backdrop-blur-sm px-6 py-8 sm:px-10 sm:py-10 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-neutral-600">{subtitle}</p>
          )}
          {actions.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {actions.map((a, i) =>
                a.href ? (
                  <Button
                    key={i}
                    asChild
                    variant="brand"
                  >
                    <Link href={a.href}>
                      {a.label}
                    </Link>
                  </Button>
                ) : (
                  <Button
                    key={i}
                    type="button"
                    onClick={a.onClick}
                    variant="brand"
                  >
                    {a.label}
                  </Button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

