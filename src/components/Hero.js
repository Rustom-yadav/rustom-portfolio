"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      className="relative isolate w-full max-w-full bg-gradient-to-br from-[#eef2ff] via-[#e0e7ff] to-[#c7d2fe] px-4 py-24 text-center dark:from-[#0f0f14] dark:via-[#1a1a2e] dark:to-[#16213e] sm:px-6 sm:py-32"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto max-w-2xl">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="ring-4 ring-[#6366f1]/20 ring-offset-4 ring-offset-[#eef2ff] dark:ring-[#22d3ee]/30 dark:ring-offset-[#0f0f14] size-28 overflow-hidden rounded-full sm:size-36">
              {!imgError ? (
                <Image
                  src="/rustom-yadav.jpg"
                  alt="rustom profile picture "
                  width={144}
                  height={144}
                  className="h-full w-full object-cover"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <span
                  className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#6366f1] to-[#22d3ee] text-3xl font-bold text-white sm:text-4xl"
                  aria-hidden
                >
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
          Hi, I&apos;m Rustom Yadav
        </h1>
        <p className="mb-6 text-xl font-bold text-slate-700 dark:text-[#e4e4e7]">
          Software Engineer{" "}
          <span className="text-slate-400 dark:text-[#a1a1aa]">|</span>{" "}
          Full-Stack & AI
        </p>
        <div className="mx-auto mb-8 max-w-2xl space-y-4 text-base leading-relaxed text-slate-600 dark:text-[#a1a1aa]">
          <p>
            I am a versatile Software Engineer who builds scalable,
            high-performance web applications and intelligent systems. I
            specialize in{" "}
            <span className="font-semibold text-[#6366f1] dark:text-[#818cf8]">
              MERN, Next.js, and FastAPI
            </span>{" "}
            stacks, seamlessly integrating modern{" "}
            <span className="font-semibold text-[#22d3ee] dark:text-[#67e8f9]">
              Agentic and Generative AI
            </span>{" "}
            capabilities into products.
          </p>
          <p>
            I pride myself on being a meticulous engineer—focusing heavily on{" "}
            <span className="font-medium text-slate-800 dark:text-slate-200">
              System Design, Clean Code, Performance Optimization, and
              minimizing Database calls
            </span>
            . I ensure that the architecture is robust and production-ready from
            day one.
          </p>
          <p>
            Beyond coding, I bring a strong DevOps mindset, leveraging{" "}
            <span className="font-medium text-slate-800 dark:text-slate-200">
              Docker and GitHub Actions
            </span>{" "}
            to build automated, seamless CI/CD pipelines.
          </p>
        </div>
        <p className="mb-8 text-sm font-medium text-slate-500 dark:text-[#a1a1aa]">
          Explore my projects and see how I build robust systems from the ground
          up.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#22d3ee] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30"
          >
            View Projects
          </Link>
          <a
            href="https://www.linkedin.com/in/rustom-yadav/"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-transparent bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(37,99,235,0.55)] dark:from-blue-500 dark:to-cyan-400 dark:shadow-[0_0_20px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_0_28px_rgba(34,211,238,0.5)]"
          >
            View Linkedin
          </a>
        </div>
      </div>
    </section>
  );
}
