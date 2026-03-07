import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-slate-900">
          About <span className="text-blue-600">Me</span>
        </h1>
        <div className="space-y-5 text-base leading-relaxed text-slate-700">
          <p>
            I&apos;m <strong className="text-slate-900">Vijay Yadav</strong>, also known as{" "}
            <strong className="text-blue-700">Rustom</strong>. I work as a full stack developer
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
          <Link href="/projects" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
            View Projects
          </Link>
          <Link href="/contact" className="rounded-full border-2 border-blue-600 px-6 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50">
            Get in Touch
          </Link>
        </div>
      </main>
    </div>
  );
}
