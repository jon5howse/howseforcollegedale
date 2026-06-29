"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Updates", href: "/updates" },
  { label: "Projects", href: "/projects" },
  { label: "Community CARE", href: "/care" },
  { label: "Laura's Work", href: "/lauras-work" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#243B7A] text-white shadow-md">
      <div className="bg-[#1E2F63] px-4 py-2 text-center text-sm font-semibold">
        Next Community CARE Meeting · Every 5th Monday · 5:55 PM · City Hall
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold tracking-wide">Laura Howse</span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#F4C542]">
            Collegedale City Commissioner
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold hover:text-[#F4C542]">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-[#C62828] px-5 py-2 text-sm font-bold text-white">
            Stay Connected
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md border border-white/40 px-3 py-2 text-sm lg:hidden"
          aria-label="Open navigation menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/20 bg-[#1E2F63] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold hover:text-[#F4C542]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}