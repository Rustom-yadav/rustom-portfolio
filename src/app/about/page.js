import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f14]">
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-[#e4e4e7]">About Me</h2>
        <p className="mb-8 text-sm text-slate-500 dark:text-[#a1a1aa]">Get to know the person behind the code</p>
        <div className="space-y-5 text-base leading-[1.8] text-slate-600 dark:text-[#a1a1aa]">
          <p>
            I&apos;m <strong className="text-slate-900 dark:text-[#e4e4e7]">Vijay Yadav</strong>, also known as{" "}
            <strong className="text-[#6366f1] dark:text-[#22d3ee]">Rustom</strong>. I work as a full stack developer
            specializing in the MERN stack (MongoDB, Express, React, Node.js).
          </p>
          <p>
            I enjoy building responsive, user-friendly web applications from frontend to backend.
            I focus on clean code, REST APIs, and modern tooling like Next.js and Tailwind CSS.
          </p>
          <p>
            When I&apos;m not coding, I like to stay updated with new technologies and use AI tools
            to improve my workflow. Feel free to reach out for collaboration or opportunities.
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
