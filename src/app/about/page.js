import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f14]">
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-[#e4e4e7]">About Me</h2>
        <p className="mb-8 text-sm text-slate-500 dark:text-[#a1a1aa]">Get to know the person behind the code</p>
        <div className="space-y-5 text-base leading-[1.8] text-slate-600 dark:text-[#a1a1aa]">
          <p>
            I&apos;m <strong className="text-slate-900 dark:text-[#e4e4e7]">Rustom</strong>, My approach to software development is simple: build things that last, and make sure they run incredibly fast. I treat coding not just as a job, but as an engineering craft where every architectural decision matters.
          </p>
          <p>
            I enjoy tackling the entire lifecycle of a product. On the backend, I design resilient systems using <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">Node.js, Express, and FastAPI</strong>, always keeping a strict eye on <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">optimizing database queries and reducing server load</strong>. On the frontend, I create dynamic, responsive experiences with <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">React and Next.js</strong>.
          </p>
          <p>
            Beyond traditional web development, I am actively exploring the cutting-edge capabilities of <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">Generative AI and Agentic workflows</strong>. I love figuring out how to make AI do the heavy lifting within applications, turning complex user intents into automated, intelligent actions.
          </p>
          <p>
            I&apos;m also a huge advocate for developer operations. From containerizing apps with <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">Docker</strong> to configuring reliable <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">GitHub Actions</strong>, I prefer to let CI/CD pipelines handle the deployment so I can focus purely on writing <strong className="font-medium text-slate-800 dark:text-[#e4e4e7]">clean, scalable, and maintainable code</strong>. If there&apos;s a way to make a system more efficient, I&apos;m already working on it.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#22d3ee] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(99,102,241,0.25)]">
            View Projects
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-[#6366f1] hover:text-[#6366f1] dark:border-[#27272a] dark:bg-[#1a1a24] dark:text-[#e4e4e7]">
            Get in Touch
          </Link>
        </div>
      </main>
    </div>
  );
}
