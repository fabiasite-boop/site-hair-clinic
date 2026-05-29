import Image from "next/image";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import TreatmentsTabs from "./components/TreatmentsTabs";
import ContactForm from "./components/ContactForm";

const galleryImages = [
  { src: "/photos/Hair-Clinic-1.jpg", alt: "Fachada com monograma da clínica" },
  { src: "/photos/Hair-Clinic-20.jpg", alt: "Sala de espera com sofá creme e azulejo português" },
  { src: "/photos/Hair-Clinic-60.jpg", alt: "Banheira clássica com parede de pedra" },
  { src: "/photos/Hair-Clinic-30.jpg", alt: "Maca de tratamento com toalha bordada" },
  { src: "/photos/Hair-Clinic-50.jpg", alt: "Lavatório com toalha da Hair Clinic" },
];

const pillars = [
  { icon: "✦", title: "Diagnóstico", desc: "Avaliação com microcâmara e tecnologia avançada" },
  { icon: "❋", title: "Tricologia", desc: "Tratamentos com base científica e clínica" },
  { icon: "◆", title: "Ritual", desc: "Experiência sensorial que cuida corpo e mente" },
  { icon: "○", title: "Personalização", desc: "Cada plano de tratamento é único" },
];

const steps = [
  {
    n: "01",
    title: "Diagnóstico Capilar",
    desc: "Avaliação profissional do couro cabeludo com microcâmara e tecnologia de diagnóstico avançado. Identificamos a origem do problema.",
  },
  {
    n: "02",
    title: "Anamnese & Plano",
    desc: "Análise do histórico capilar, rotinas e estilo de vida. Construímos um plano de tratamento personalizado para o seu caso específico.",
  },
  {
    n: "03",
    title: "Ritual Terapêutico",
    desc: "Protocolo de tratamento direcionado com ativos específicos, tecnologia LED e técnicas tricológicas de precisão.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    desc: "Monitorização da evolução e ajuste do plano. Os resultados constroem-se com consistência e acompanhamento especializado.",
  },
];

const diferenciais = [
  { n: "01", title: "Autoridade Técnica", desc: "Especialização em tricologia com diagnóstico por microcâmara. Não tratamos por intuição — tratamos com ciência." },
  { n: "02", title: "Experiência Sensorial", desc: "Ambiente desenhado para o relaxamento. Chá artesanal, escalda-pés, aromas naturais. O cuidado começa ao entrar pela porta." },
  { n: "03", title: "Personalização Total", desc: "Nenhum tratamento é igual ao anterior. Cada plano é criado com base no diagnóstico e nas necessidades específicas de cada cliente." },
  { n: "04", title: "Tratamento da Origem", desc: "Enquanto outros tratam o sintoma, nós tratamos a causa. A diferença está em tratar o couro cabeludo — não apenas o cabelo." },
  { n: "05", title: "Acompanhamento Contínuo", desc: "O nosso trabalho não termina na sessão. Acompanhamos a evolução e ajustamos o protocolo para garantir resultados reais e duradouros." },
  { n: "06", title: "Ambiente Premium", desc: "Um espaço pensado ao detalhe — luz natural, texturas, cerâmica, renda. Porque a experiência começa nos sentidos." },
];

const testimonials = [
  {
    initial: "A",
    name: "Ana Sofia M.",
    sub: "Cliente · Ritual Terapêutico Intensivo",
    text: "Finalmente percebi que o meu problema de queda tinha uma causa real. O diagnóstico mudou tudo — nunca ninguém me tinha explicado desta forma.",
  },
  {
    initial: "M",
    name: "Margarida F.",
    sub: "Cliente · Ritual Clínico Premium",
    text: "A experiência é completamente diferente de qualquer outro sítio. É clínica, mas sensorial ao mesmo tempo. Saio sempre renovada por dentro e por fora.",
  },
  {
    initial: "I",
    name: "Inês C.",
    sub: "Cliente · Programa Mensal",
    text: "Em três meses de acompanhamento vi uma diferença que anos de produtos nunca me deram. O método funciona porque trata mesmo a origem.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="flex-1">
        {/* ─────────────────────────────  HERO  ───────────────────────────── */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Background photo */}
          <Image
            src="/photos/Hair-Clinic-130.jpg"
            alt="Cliente em momento de cuidado na Hair Clinic"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Veil */}
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-cream)] via-[color:var(--color-cream)]/85 to-[color:var(--color-cream)]/20 md:from-[color:var(--color-cream)] md:via-[color:var(--color-cream)]/70 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-cream)] via-transparent to-transparent md:hidden" />

          {/* Content */}
          <div className="relative z-10 mx-auto flex min-h-screen max-w-[1480px] flex-col justify-end px-6 pb-24 pt-40 md:grid md:grid-cols-12 md:items-end md:px-14 md:pb-28">
            <div className="md:col-span-7 lg:col-span-6">
              <p className="eyebrow mb-8 opacity-0 animate-[fadeUp_1s_0.2s_forwards]">
                Tricologia · Diagnóstico · Ritual
              </p>
              <h1 className="font-serif text-[clamp(48px,7vw,100px)] font-light leading-[1.02] text-[color:var(--color-ink)] opacity-0 animate-[fadeUp_1.1s_0.4s_forwards]">
                O cuidado
                <br />
                começa <em className="italic text-[color:var(--color-green-deep)]">na raiz.</em>
              </h1>
              <p className="mt-9 max-w-md text-[14px] leading-[1.95] text-[color:var(--color-text-soft)] opacity-0 animate-[fadeUp_1s_0.6s_forwards]">
                Não tratamos apenas o cabelo. Tratamos o couro cabeludo, o corpo
                e o bem-estar — com base em diagnóstico especializado e uma
                experiência sensorial única.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-8 opacity-0 animate-[fadeUp_1s_0.8s_forwards]">
                <a
                  href="#contacto"
                  className="group relative overflow-hidden bg-[color:var(--color-green-deep)] px-10 py-4 text-[10px] uppercase tracking-[0.32em] text-[color:var(--color-cream)]"
                >
                  <span className="relative z-10">Marcar Diagnóstico</span>
                  <span className="absolute inset-0 -translate-x-full bg-[color:var(--color-ink)] transition-transform duration-500 group-hover:translate-x-0" />
                </a>
                <a
                  href="#metodo"
                  className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-text)] transition-colors hover:text-[color:var(--color-gold)]"
                >
                  <span className="block h-px w-7 bg-[color:var(--color-gold)] transition-all duration-300 group-hover:w-12" />
                  Descobrir o método
                </a>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
            <span className="scroll-line" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-[color:var(--color-text-soft)]">
              Scroll
            </span>
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-12 right-6 hidden bg-[color:var(--color-cream)] px-7 py-5 shadow-[0_30px_80px_rgba(0,0,0,0.12)] md:block opacity-0 animate-[fadeUp_1s_1.1s_forwards]">
            <p className="text-[9px] uppercase tracking-[0.32em] text-[color:var(--color-gold)]">
              Especialização em
            </p>
            <p className="mt-1 font-serif text-[20px] text-[color:var(--color-ink)]">
              Tricologia
            </p>
            <p className="text-[11px] text-[color:var(--color-text-soft)]">
              Diagnóstico avançado
            </p>
          </div>
        </section>

        {/* ─────────────────────────  MANIFESTO STRIP  ──────────────────────── */}
        <div className="overflow-hidden bg-[color:var(--color-ink)] py-7">
          <div className="marquee-track flex w-max gap-16 whitespace-nowrap">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              [
                "Tratamos a origem",
                "Não é só estética",
                "É um método",
                "Ciência + Cuidado + Experiência",
                "Onde o cuidado começa na origem",
              ].map((phrase, i) => (
                <span key={`${k}-${i}`} className="flex items-center gap-16">
                  <span className="font-serif text-[18px] font-light italic text-[color:var(--color-cream)]/75">
                    {phrase}
                  </span>
                  <span className="text-[color:var(--color-gold)]">·</span>
                </span>
              )),
            )}
          </div>
        </div>

        {/* ───────────────────────────────  SOBRE  ─────────────────────────── */}
        <section
          id="sobre"
          className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-2 md:gap-24 md:px-14 md:py-36 lg:items-center"
        >
          <div>
            <Reveal as="p" className="eyebrow">
              A Clínica
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-6 font-serif text-[clamp(34px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]">
                Uma clínica capilar
                <br />
                <em className="italic text-[color:var(--color-green-deep)]">
                  diferente de tudo
                </em>
                <br />o que conhece.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-8 max-w-prose text-[14.5px] leading-[2] text-[color:var(--color-text-soft)]">
                A Hair Clinic não é um salão. É um espaço clínico especializado
                em tricologia, onde cada sessão começa com um diagnóstico
                profundo do couro cabeludo e termina com uma experiência
                sensorial de cuidado completo.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="mt-5 max-w-prose text-[14.5px] leading-[2] text-[color:var(--color-text-soft)]">
                Aqui, o cabelo é o resultado — não o ponto de partida. Tudo
                começa no couro cabeludo.
              </p>
            </Reveal>
            <Reveal delay={4}>
              <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {pillars.map((p) => (
                  <div
                    key={p.title}
                    className="group relative border border-[color:var(--color-beige-dark)] p-6 transition-all hover:-translate-y-1 hover:border-[color:var(--color-gold)]"
                  >
                    <span className="absolute left-0 top-0 h-0 w-[3px] bg-[color:var(--color-gold)] transition-all duration-500 group-hover:h-full" />
                    <div className="mb-2 text-2xl text-[color:var(--color-gold)]">
                      {p.icon}
                    </div>
                    <h4 className="font-serif text-[17px] font-medium text-[color:var(--color-ink)]">
                      {p.title}
                    </h4>
                    <p className="mt-1 text-[12.5px] leading-[1.7] text-[color:var(--color-text-soft)]">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/photos/Hair-Clinic-90.jpg"
                alt="Fábia Oliveira, fundadora da Hair Clinic"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div
              aria-hidden
              className="absolute -left-8 top-8 h-24 w-24 border border-[color:var(--color-gold)] opacity-50"
            />
            <div className="absolute -bottom-6 -right-4 bg-[color:var(--color-green-deep)] px-8 py-7 text-[color:var(--color-cream)] md:-right-8">
              <p className="text-[9px] uppercase tracking-[0.35em] opacity-60">
                Fundadora
              </p>
              <p className="mt-1 font-serif text-[30px] font-light leading-none">
                Fábia
              </p>
              <p className="mt-1 text-[12px] opacity-75">Oliveira</p>
            </div>
          </Reveal>
        </section>

        {/* ───────────────────────────────  MÉTODO  ────────────────────────── */}
        <section
          id="metodo"
          className="relative overflow-hidden bg-[color:var(--color-beige)] py-24 md:py-36"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute left-[-30px] top-1/2 -translate-y-1/2 -rotate-90 font-serif text-[160px] font-light tracking-[0.08em] text-[color:var(--color-ink)]/[0.04]"
          >
            MÉTODO
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-14">
            <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
              <div className="max-w-xl">
                <Reveal as="p" className="eyebrow">
                  O Processo
                </Reveal>
                <Reveal delay={1}>
                  <h2 className="mt-6 font-serif text-[clamp(34px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]">
                    Um método.
                    <br />
                    <em className="italic text-[color:var(--color-green-deep)]">
                      Não um serviço.
                    </em>
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={2} className="max-w-md">
                <p className="text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                  Cada visita segue um protocolo rigoroso que começa no
                  diagnóstico e termina no resultado. A Hair Clinic trata com
                  ciência, cuida com intenção.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-px bg-[color:var(--color-beige-dark)] sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <article className="group relative h-full overflow-hidden bg-[color:var(--color-cream)] p-10 transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
                    <span className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 bg-[color:var(--color-gold)] transition-transform duration-500 group-hover:scale-x-100" />
                    <div className="font-serif text-[64px] font-light leading-none text-[color:var(--color-beige-deep)] transition-colors group-hover:text-[color:var(--color-beige-dark)]">
                      {s.n}
                    </div>
                    <h3 className="mt-6 font-serif text-[22px] font-medium leading-tight text-[color:var(--color-ink)]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.8] text-[color:var(--color-text-soft)]">
                      {s.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────  TRATAMENTOS  ─────────────────────── */}
        <section id="tratamentos" className="mx-auto max-w-[1400px] px-6 py-24 md:px-14 md:py-36">
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <Reveal as="p" className="eyebrow">
                Serviços
              </Reveal>
              <Reveal delay={1}>
                <h2 className="mt-6 font-serif text-[clamp(34px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]">
                  Rituais pensados
                  <br />
                  <em className="italic text-[color:var(--color-green-deep)]">
                    para si.
                  </em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <p className="text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                Da queda à oleosidade, do stress ao bem-estar — cada tratamento
                é desenhado para responder à origem do problema, não apenas aos
                sintomas visíveis.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <TreatmentsTabs />
          </Reveal>
        </section>

        {/* ──────────────────────────────  QUOTE  ──────────────────────────── */}
        <section className="relative overflow-hidden bg-[color:var(--color-green-deep)] py-28 text-center md:py-36">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,169,107,0.12)_0%,transparent_70%)]"
          />
          <div className="relative mx-auto max-w-3xl px-6">
            <Reveal>
              <span className="block font-serif text-[120px] leading-[0.5] text-[color:var(--color-cream)]/10">
                &ldquo;
              </span>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-8 font-serif text-[clamp(28px,3.2vw,48px)] font-light italic leading-[1.5] text-[color:var(--color-cream)]">
                Não tratamos apenas o cabelo.
                <br />
                Tratamos o couro cabeludo, o corpo e o bem-estar.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-10 text-[11px] uppercase tracking-[0.4em] text-[color:var(--color-gold-light)]">
                Hair Clinic by Fábia Oliveira
              </p>
            </Reveal>
          </div>
        </section>

        {/* ─────────────────────────────  DIFERENCIAIS  ────────────────────── */}
        <section id="diferenciais" className="bg-[color:var(--color-ink)] py-24 md:py-36">
          <div className="mx-auto max-w-[1400px] px-6 md:px-14">
            <Reveal as="p" className="eyebrow">
              Porquê a Hair Clinic
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-6 max-w-3xl font-serif text-[clamp(34px,3.6vw,60px)] font-light leading-[1.15] text-[color:var(--color-cream)]">
                Ciência, cuidado
                <br />
                <em className="italic text-[color:var(--color-gold-light)]">
                  e experiência.
                </em>{" "}
                Em simultâneo.
              </h2>
            </Reveal>

            <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {diferenciais.map((d, i) => (
                <Reveal key={d.n} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <article className="border-b border-white/10 pb-10 pt-2 transition-colors hover:border-[color:var(--color-gold)]">
                    <p className="font-serif text-[14px] tracking-[0.25em] text-[color:var(--color-gold)]">
                      {d.n} —
                    </p>
                    <h3 className="mt-5 font-serif text-[26px] font-normal leading-[1.25] text-[color:var(--color-cream)]">
                      {d.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.95] text-white/45">
                      {d.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────────────────────  GALERIA  ──────────────────────── */}
        <section
          id="galeria"
          className="bg-[color:var(--color-cream)] py-24 md:py-36"
        >
          <div className="mx-auto max-w-[1480px] px-6 md:px-14">
            <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-20">
              <div>
                <Reveal as="p" className="eyebrow">
                  O Espaço
                </Reveal>
                <Reveal delay={1}>
                  <h2 className="mt-6 font-serif text-[clamp(34px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]">
                    Onde os sentidos
                    <br />
                    <em className="italic text-[color:var(--color-green-deep)]">
                      se acalmam.
                    </em>
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={2}>
                <p className="text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                  Pedra portuguesa, latão, linho, cerâmica. Cada detalhe foi
                  pensado para acolher — porque o cuidado começa muito antes do
                  primeiro toque.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
              {galleryImages.map((img, i) => (
                <Reveal
                  key={img.src}
                  delay={(i % 4) as 0 | 1 | 2 | 3}
                  className={`relative overflow-hidden ${
                    i === 0
                      ? "col-span-2 row-span-2 aspect-square md:aspect-auto"
                      : "aspect-[3/4]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1500ms] hover:scale-105"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────  TESTEMUNHOS  ─────────────────────── */}
        <section
          id="testemunhos"
          className="overflow-hidden bg-[color:var(--color-beige)] py-24 md:py-36"
        >
          <div className="mx-auto max-w-[1400px] px-6 md:px-14">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <Reveal as="p" className="eyebrow">
                  Testemunhos
                </Reveal>
                <Reveal delay={1}>
                  <h2 className="mt-6 font-serif text-[clamp(34px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]">
                    O que dizem
                    <br />
                    <em className="italic text-[color:var(--color-green-deep)]">
                      as nossas clientes.
                    </em>
                  </h2>
                </Reveal>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-[3px] md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={(i % 3) as 0 | 1 | 2}>
                  <article className="h-full bg-[color:var(--color-cream)] p-10">
                    <div className="text-[14px] tracking-[3px] text-[color:var(--color-gold)]">
                      ★★★★★
                    </div>
                    <p className="mt-6 font-serif text-[19px] font-light italic leading-[1.6] text-[color:var(--color-ink)]">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="mt-8 flex items-center gap-4 border-t border-[color:var(--color-beige-deep)] pt-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-beige-deep)] font-serif text-[18px] text-[color:var(--color-green-deep)]">
                        {t.initial}
                      </div>
                      <div>
                        <p className="text-[13px] text-[color:var(--color-ink)]">
                          {t.name}
                        </p>
                        <p className="text-[11px] text-[color:var(--color-text-soft)]">
                          {t.sub}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────  CONTACTO  ────────────────────────── */}
        <section
          id="contacto"
          className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-14 md:py-36 lg:items-center"
        >
          <div>
            <Reveal as="p" className="eyebrow">
              Contacto
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-6 font-serif text-[clamp(34px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]">
                Pronta para começar
                <br />
                <em className="italic text-[color:var(--color-green-deep)]">
                  na raiz?
                </em>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-8 max-w-prose text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                Marque a sua consulta de diagnóstico e dê o primeiro passo para
                um cabelo mais saudável — com ciência, cuidado e uma experiência
                que não vai esquecer.
              </p>
            </Reveal>

            <Reveal delay={3} className="mt-12 flex flex-col gap-4">
              <ContactItem
                href="tel:+351910000000"
                icon="✆"
                label="Telefone / WhatsApp"
                value="+351 910 000 000"
              />
              <ContactItem
                href="mailto:info@hairclinic.pt"
                icon="✉"
                label="Email"
                value="info@hairclinic.pt"
              />
              <ContactItem
                href="#"
                icon="◎"
                label="Localização"
                value="Porto, Portugal"
              />
            </Reveal>
          </div>

          <Reveal delay={2}>
            <ContactForm />
          </Reveal>
        </section>

        {/* ──────────────────────────────  FOOTER  ─────────────────────────── */}
        <footer className="bg-[color:var(--color-ink)] px-6 py-20 md:px-14 md:py-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-12 border-b border-white/[0.07] pb-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
              <div>
                <span className="block font-serif text-[24px] font-normal tracking-[0.04em] text-[color:var(--color-cream)]">
                  Hair Clinic
                </span>
                <span className="mt-1 block text-[9px] uppercase tracking-[0.4em] text-[color:var(--color-gold)]">
                  by Fábia Oliveira
                </span>
                <p className="mt-5 max-w-[280px] text-[13px] leading-[1.9] text-white/40">
                  Tratamentos capilares com base em tricologia e diagnóstico
                  especializado. Onde a ciência encontra o cuidado.
                </p>
              </div>
              <FooterCol
                title="Serviços"
                items={[
                  "Diagnóstico Capilar",
                  "Ritual Introdutório",
                  "Ritual Intensivo",
                  "Ritual Premium",
                  "Experiências Corpo",
                ]}
              />
              <FooterCol
                title="Clínica"
                items={["Sobre Nós", "O Método", "Testemunhos", "Marcações"]}
              />
              <div>
                <h5 className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
                  Contacto
                </h5>
                <address className="text-[13px] not-italic leading-[1.95] text-white/45">
                  Porto, Portugal
                  <br />
                  <br />
                  +351 910 000 000
                  <br />
                  info@hairclinic.pt
                  <br />
                  <br />
                  Seg–Sex: 9h–19h
                  <br />
                  Sáb: 9h–14h
                </address>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
              <p className="text-[11px] text-white/25">
                © {new Date().getFullYear()} Hair Clinic by Fábia Oliveira ·
                Todos os direitos reservados
              </p>
              <div className="flex gap-4">
                {[
                  { label: "IG", title: "Instagram" },
                  { label: "f", title: "Facebook" },
                  { label: "W", title: "WhatsApp" },
                ].map((s) => (
                  <a
                    key={s.title}
                    href="#"
                    title={s.title}
                    className="flex h-9 w-9 items-center justify-center border border-white/10 text-[12px] text-white/40 transition-colors hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

function ContactItem({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-5 border border-[color:var(--color-beige-dark)] p-5 transition-all hover:border-[color:var(--color-green-deep)] hover:bg-[color:var(--color-beige)]"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-[color:var(--color-beige)] text-[18px] text-[color:var(--color-green-deep)] transition-colors group-hover:bg-[color:var(--color-green-deep)] group-hover:text-[color:var(--color-cream)]">
        {icon}
      </div>
      <div>
        <p className="text-[9px] uppercase tracking-[0.3em] text-[color:var(--color-text-soft)]">
          {label}
        </p>
        <p className="mt-1 text-[14px] text-[color:var(--color-ink)]">{value}</p>
      </div>
    </a>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h5 className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
        {title}
      </h5>
      <ul className="flex flex-col gap-3">
        {items.map((i) => (
          <li key={i}>
            <a
              href="#"
              className="text-[13px] text-white/45 transition-colors hover:text-white"
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
