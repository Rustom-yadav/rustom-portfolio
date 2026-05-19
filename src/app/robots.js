export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://rustom-portfolio.vercel.app/sitemap.xml",
  };
}
