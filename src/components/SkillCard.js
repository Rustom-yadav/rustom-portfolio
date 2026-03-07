const categoryColors = {
  frontend: "bg-blue-600",
  backend: "bg-blue-800",
  tools: "bg-blue-500",
};

export default function SkillCard({ name, category }) {
  const bg = categoryColors[category] || "bg-blue-600";

  return (
    <div className={`rounded-xl ${bg} px-5 py-3.5 text-center text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg`}>
      {name}
    </div>
  );
}
