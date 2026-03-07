import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & Workflow",
};

const categoryIcons = {
  frontend: "🎨",
  backend: "⚙️",
  tools: "🛠️",
};

export default function Skills() {
  const byCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-slate-900">
          My <span className="text-blue-600">Skills</span>
        </h1>
        <p className="mb-10 max-w-2xl text-base text-slate-600">
          Technologies and tools I use to build full-stack applications.
        </p>
        <div className="space-y-12">
          {Object.entries(byCategory).map(([category, items]) => (
            <section key={category}>
              <h2 className="mb-5 flex items-center gap-2 text-lg font-bold text-slate-800">
                <span>{categoryIcons[category]}</span>
                {categoryLabels[category] || category}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
