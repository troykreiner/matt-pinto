"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { MattPintoSymbol } from "@/components/matt-pinto-symbol";
import { navItems } from "@/lib/site-content";

type SiteShellProps = {
  children: ReactNode;
  fitViewport?: boolean;
};

export function SiteShell({ children, fitViewport = false }: SiteShellProps) {
  const pathname = usePathname();

  return (
    <div className={`site-frame${fitViewport ? " site-frame--locked" : ""}`}>
      <div className={`site-border${fitViewport ? " site-border--locked" : ""}`}>
        <header className="site-header">
          <Link href="/" className="site-logo-link" aria-label="Matt Pinto home">
            <Image
              src="/matt-pinto-logo.svg"
              alt="Matt Pinto"
              width={809}
              height={115}
              priority
              className="site-logo"
            />
          </Link>
          <Link href="/" className="site-symbol-link" aria-label="Home">
            <MattPintoSymbol className="site-symbol" />
          </Link>
          <nav className="site-nav" aria-label="Primary">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`site-nav-link${active ? " is-active" : ""}`}
                >
                  <span className="site-nav-label site-nav-label--desktop">{item.label}</span>
                  <span className="site-nav-label site-nav-label--mobile">{item.mobileLabel}</span>
                </Link>
              );
            })}
          </nav>
        </header>
        <main className={`site-main${fitViewport ? " site-main--locked" : ""}`}>
          {children}
        </main>
      </div>
    </div>
  );
}
