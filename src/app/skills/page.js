import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
  "programming-languages": "Programming Languages",
  services: "Services",
  ai: "AI & LLMs",
};

const categoryColors = {
  frontend: "text-[#22d3ee]",
  backend: "text-[#34d399]",
  tools: "text-[#a78bfa]",
  "programming-languages": "text-[#fbbf24]",
  services: "text-[#f472b6]",
  ai: "text-[#fb923c]",
};

export default function Skills() {
  const byCategory = {};

  for (const skill of skills) {
    if (!byCategory[skill.category]) {
      byCategory[skill.category] = [];
    }

    byCategory[skill.category].push(skill)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f14]">
      <main className="mx-auto max-w-[1200px] px-6 py-20">
        <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-[#e4e4e7]">Skills</h2>
        <p className="mb-10 text-sm text-slate-500 dark:text-[#a1a1aa]">Technologies and tools I work with</p>
        <div className="space-y-12">
          {Object.entries(byCategory).map(([category, items]) => (
            <section key={category}>
              <h3 className={`mb-5 text-lg font-semibold ${categoryColors[category] || "text-[#e4e4e7]"}`}>
                {categoryLabels[category] || category}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {items.map((skill) => (
                  <SkillCard key={skill.id} name={skill.name} category={skill.category} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
