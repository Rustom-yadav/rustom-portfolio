import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

const categoryLabels = {
  "programming-languages": "Languages",
  frontend: "Frontend",
  backend: "Backend",
  "databases-services": "Databases & Services",
  "ai-integration": "AI Integration",
  concepts: "Concepts",
  "devops-tools": "DevOps & Tools",
};

const categoryColors = {
  "programming-languages": "text-[#fbbf24]",
  frontend: "text-[#22d3ee]",
  backend: "text-[#34d399]",
  "databases-services": "text-[#f472b6]",
  "ai-integration": "text-[#fb923c]",
  concepts: "text-[#818cf8]",
  "devops-tools": "text-[#a78bfa]",
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
