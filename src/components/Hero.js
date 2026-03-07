import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 px-5 py-28 text-center sm:py-36" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-20 -right-20 size-72 rounded-full bg-blue-400/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-16 -top-16 size-60 rounded-full bg-white/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-3xl">
        <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
          Full Stack Developer
        </span>
        <h1 id="hero-heading" className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          Vijay Yadav
        </h1>
        <p className="mb-3 text-xl font-medium text-blue-100">
          Also known as <span className="font-bold text-white">Rustom</span>
        </p>
        <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-blue-100">
          I build modern web applications with the MERN stack. Clean code, great UX, and scalable APIs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-xl shadow-blue-900/30 transition hover:-translate-y-0.5 hover:shadow-2xl"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-white/80 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
