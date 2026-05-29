"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: ligar a um endpoint real (ex: /api/contact ou Formspree)
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Pedido de marcação"
      className="relative bg-[color:var(--color-beige)] p-6 sm:p-8 md:p-12"
    >
      <span
        aria-hidden
        className="absolute left-0 top-0 h-[3px] w-2/5 bg-gradient-to-r from-[color:var(--color-gold)] to-transparent"
      />

      <div className="space-y-6">
        <Field label="Nome completo">
          <input
            type="text"
            name="name"
            required
            placeholder="O seu nome"
            className="input"
          />
        </Field>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Email">
            <input
              type="email"
              name="email"
              required
              placeholder="email@exemplo.com"
              className="input"
            />
          </Field>
          <Field label="Telefone">
            <input
              type="tel"
              name="phone"
              placeholder="+351 …"
              className="input"
            />
          </Field>
        </div>

        <Field label="Interesse">
          <select name="service" defaultValue="" required className="input">
            <option value="" disabled>
              Selecionar tratamento
            </option>
            <option>Diagnóstico Capilar</option>
            <option>Ritual de Introdução Tricológica</option>
            <option>Ritual Terapêutico Intensivo</option>
            <option>Ritual Clínico Premium</option>
            <option>Experiências Corpo</option>
            <option>Não sei — quero aconselhar-me</option>
          </select>
        </Field>

        <Field label="Mensagem (opcional)">
          <textarea
            name="message"
            placeholder="Conte-nos um pouco sobre a sua situação…"
            className="input min-h-[120px] resize-none"
          />
        </Field>

        <button
          type="submit"
          className="w-full bg-[color:var(--color-green-deep)] py-5 text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-cream)] transition-colors hover:bg-[color:var(--color-ink)]"
        >
          {sent ? "Pedido enviado ✓" : "Enviar pedido de marcação"}
        </button>
      </div>

      <style jsx>{`
        :global(.input) {
          width: 100%;
          background: var(--color-cream);
          border: 1px solid var(--color-beige-dark);
          padding: 14px 16px;
          font-family: var(--font-sans), system-ui, sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: var(--color-text);
          outline: none;
          transition: border-color 0.3s;
          appearance: none;
        }
        :global(.input:focus) {
          border-color: var(--color-green-deep);
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[9px] uppercase tracking-[0.35em] text-[color:var(--color-text-soft)]">
        {label}
      </span>
      {children}
    </label>
  );
}
