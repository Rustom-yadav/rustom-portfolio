"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      className="relative isolate bg-gradient-to-br from-[#eef2ff] via-[#e0e7ff] to-[#c7d2fe] px-6 py-24 text-center dark:from-[#0f0f14] dark:via-[#1a1a2e] dark:to-[#16213e] sm:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto max-w-2xl">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="ring-4 ring-[#6366f1]/20 ring-offset-4 ring-offset-[#eef2ff] dark:ring-[#22d3ee]/30 dark:ring-offset-[#0f0f14] size-28 overflow-hidden rounded-full sm:size-36">
              {!imgError ? (
                <Image
                  src="/img.vijay.jpg"
                  alt="Vijay Yadav (Rustom)"
                  width={144}
                  height={144}
                  className="h-full w-full object-cover"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#6366f1] to-[#22d3ee] text-3xl font-bold text-white sm:text-4xl" aria-hidden>
                  VY
                </span>
              )}
            </div>
          </div>
        </div>
        <h1
          id="hero-heading"
          className="mb-3 bg-gradient-to-r from-[#6366f1] to-[#22d3ee] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Vijay Yadav (Rustom)
        </h1>
        <p className="mb-6 text-lg font-semibold text-slate-700 dark:text-[#e4e4e7]">
          Full Stack Developer <span className="text-slate-400 dark:text-[#a1a1aa]">|</span> MERN Stack
        </p>
        <div className="mx-auto mb-8 max-w-xl space-y-4 text-base leading-relaxed text-slate-600 dark:text-[#a1a1aa]">
          <p>
            I turn ideas into modern web applications using React, Next.js, Node.js, Express, and MongoDB.
            With a strong foundation in JavaScript and responsive design and Backend development, I enjoy building products that are
            clean, scalable, and user-focused.
          </p>
          <p>
            Certified by <span className="font-semibold text-[#6366f1]">FreeCodeCamp</span>, and always
            learning, building, and improving.
          </p>
        </div>
        <p className="mb-8 text-sm text-slate-500 dark:text-[#a1a1aa]">
          Explore my projects and see what I&apos;ve been building.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#22d3ee] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
          >
            View Projects
          </Link>
          <a
            href="/Vijay_Yadav_MERN_FullStack_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(37,99,235,0.55)] dark:from-blue-500 dark:to-cyan-400 dark:shadow-[0_0_20px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_28px_rgba(34,211,238,0.5)]"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
