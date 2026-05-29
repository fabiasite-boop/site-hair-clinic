"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "A Clínica" },
  { href: "#metodo", label: "O Método" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#galeria", label: "Espaço" },
  { href: "#testemunhos", label: "Testemunhos" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--color-cream)]/95 backdrop-blur-md border-b border-[color:var(--color-beige-dark)] py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 md:px-14">
        <a href="#top" aria-label="Hair Clinic by Fábia Oliveira" className="block">
          <Image
            src="/logo.png"
            alt="Hair Clinic by Fábia Oliveira"
            width={600}
            height={430}
            priority
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-10 md:h-11" : "h-12 md:h-14"
            }`}
          />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[11px] font-light uppercase tracking-[0.24em] text-[color:var(--color-text)] transition-colors hover:text-[color:var(--color-gold)]"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[color:var(--color-gold)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden md:inline-block bg-[color:var(--color-ink)] px-7 py-3 text-[10px] font-normal uppercase tracking-[0.3em] text-[color:var(--color-cream)] transition-colors hover:bg-[color:var(--color-green-deep)]"
        >
          Marcar Consulta
        </a>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-6 bg-[color:var(--color-ink)] transition-all duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-[color:var(--color-ink)] transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-[color:var(--color-ink)] transition-all duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 bg-[color:var(--color-cream)] px-6 pb-8 pt-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-[color:var(--color-beige-dark)] py-4 text-[12px] uppercase tracking-[0.24em] text-[color:var(--color-text)]"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block bg-[color:var(--color-ink)] px-7 py-3 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-cream)]"
            >
              Marcar Consulta
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
