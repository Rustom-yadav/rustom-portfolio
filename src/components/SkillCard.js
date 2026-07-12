const categoryAccent = {
  'programming-languages': {
    border: 'border-[#fbbf24]/20 dark:border-[#fbbf24]/30',
    glow: 'hover:shadow-[0_8px_30px_rgba(251,191,36,0.1)] dark:hover:shadow-[0_8px_30px_rgba(251,191,36,0.15)]',
    tag: 'text-[#d97706] dark:text-[#fbbf24]',
  },
  frontend: {
    border: 'border-[#22d3ee]/20 dark:border-[#22d3ee]/30',
    glow: 'hover:shadow-[0_8px_30px_rgba(34,211,238,0.1)] dark:hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)]',
    tag: 'text-[#0891b2] dark:text-[#22d3ee]',
  },
  backend: {
    border: 'border-[#34d399]/20 dark:border-[#34d399]/30',
    glow: 'hover:shadow-[0_8px_30px_rgba(52,211,153,0.1)] dark:hover:shadow-[0_8px_30px_rgba(52,211,153,0.15)]',
    tag: 'text-[#059669] dark:text-[#34d399]',
  },
  databases: {
    border: 'border-[#e879f9]/20 dark:border-[#e879f9]/30',
    glow: 'hover:shadow-[0_8px_30px_rgba(232,121,249,0.1)] dark:hover:shadow-[0_8px_30px_rgba(232,121,249,0.15)]',
    tag: 'text-[#a21caf] dark:text-[#e879f9]',
  },
  services: {
    border: 'border-[#2dd4bf]/20 dark:border-[#2dd4bf]/30',
    glow: 'hover:shadow-[0_8px_30px_rgba(45,212,191,0.1)] dark:hover:shadow-[0_8px_30px_rgba(45,212,191,0.15)]',
    tag: 'text-[#0f766e] dark:text-[#2dd4bf]',
  },
  'ai-integration': {
    border: 'border-[#fb923c]/20 dark:border-[#fb923c]/30',
    glow: 'hover:shadow-[0_8px_30px_rgba(251,146,60,0.1)] dark:hover:shadow-[0_8px_30px_rgba(251,146,60,0.15)]',
    tag: 'text-[#c2410c] dark:text-[#fb923c]',
  },
  concepts: {
    border: 'border-[#818cf8]/20 dark:border-[#818cf8]/30',
    glow: 'hover:shadow-[0_8px_30px_rgba(129,140,248,0.1)] dark:hover:shadow-[0_8px_30px_rgba(129,140,248,0.15)]',
    tag: 'text-[#4f46e5] dark:text-[#818cf8]',
  },
  'devops-tools': {
    border: 'border-[#a78bfa]/20 dark:border-[#a78bfa]/30',
    glow: 'hover:shadow-[0_8px_30px_rgba(167,139,250,0.1)] dark:hover:shadow-[0_8px_30px_rgba(167,139,250,0.15)]',
    tag: 'text-[#7c3aed] dark:text-[#a78bfa]',
  },
  os: {
    border: 'border-[#94a3b8]/20 dark:border-[#94a3b8]/30',
    glow: 'hover:shadow-[0_8px_30px_rgba(148,163,184,0.1)] dark:hover:shadow-[0_8px_30px_rgba(148,163,184,0.15)]',
    tag: 'text-[#475569] dark:text-[#94a3b8]',
  },
  'soft-skills': {
    border: 'border-[#fb7185]/20 dark:border-[#fb7185]/30',
    glow: 'hover:shadow-[0_8px_30px_rgba(251,113,133,0.1)] dark:hover:shadow-[0_8px_30px_rgba(251,113,133,0.15)]',
    tag: 'text-[#be123c] dark:text-[#fb7185]',
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
