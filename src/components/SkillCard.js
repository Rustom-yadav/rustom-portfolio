const categoryAccent = {
  frontend: {
    border: "border-[#22d3ee]/20 dark:border-[#22d3ee]/30",
    glow: "hover:shadow-[0_8px_30px_rgba(34,211,238,0.1)] dark:hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)]",
    tag: "text-[#0891b2] dark:text-[#22d3ee]",
  },
  backend: {
    border: "border-[#34d399]/20 dark:border-[#34d399]/30",
    glow: "hover:shadow-[0_8px_30px_rgba(52,211,153,0.1)] dark:hover:shadow-[0_8px_30px_rgba(52,211,153,0.15)]",
    tag: "text-[#059669] dark:text-[#34d399]",
  },
  tools: {
    border: "border-[#a78bfa]/20 dark:border-[#a78bfa]/30",
    glow: "hover:shadow-[0_8px_30px_rgba(167,139,250,0.1)] dark:hover:shadow-[0_8px_30px_rgba(167,139,250,0.15)]",
    tag: "text-[#7c3aed] dark:text-[#a78bfa]",
  },
  "programming-languages": {
    border: "border-[#fbbf24]/20 dark:border-[#fbbf24]/30",
    glow: "hover:shadow-[0_8px_30px_rgba(251,191,36,0.1)] dark:hover:shadow-[0_8px_30px_rgba(251,191,36,0.15)]",
    tag: "text-[#d97706] dark:text-[#fbbf24]",
  },
  services: {
    border: "border-[#f472b6]/20 dark:border-[#f472b6]/30",
    glow: "hover:shadow-[0_8px_30px_rgba(244,114,182,0.1)] dark:hover:shadow-[0_8px_30px_rgba(244,114,182,0.15)]",
    tag: "text-[#be123c] dark:text-[#f472b6]",
  },
  ai: {
    border: "border-[#fb923c]/20 dark:border-[#fb923c]/30",
    glow: "hover:shadow-[0_8px_30px_rgba(251,146,60,0.1)] dark:hover:shadow-[0_8px_30px_rgba(251,146,60,0.15)]",
    tag: "text-[#c2410c] dark:text-[#fb923c]",
  },
};

export default function SkillCard({ name, category }) {
  const accent = categoryAccent[category] || categoryAccent.frontend;

  return (
    <div
      className={`rounded-2xl border ${accent.border} bg-white px-5 py-4 text-center transition-all duration-300 hover:scale-105 dark:bg-[#1a1a24] dark:hover:bg-[#22222e] ${accent.glow}`}
    >
      <span className={`text-sm font-semibold ${accent.tag}`}>{name}</span>
    </div>
  );
}
