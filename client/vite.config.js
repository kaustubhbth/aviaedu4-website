import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { SEO_PAGES } from "./src/seoPages.js";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

function cleanProductionOrigin(value) {
  if (!value) return "";

  try {
    const url = new URL(value);
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      (url.pathname !== "/" && url.pathname !== "") ||
      url.search ||
      url.hash ||
      ["localhost", "127.0.0.1", "::1"].includes(url.hostname) ||
      url.hostname.endsWith(".local")
    ) {
      return "";
    }
    return url.origin;
  } catch {
    return "";
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function seoMetaHtml(pathname, page, siteOrigin, imagePath) {
  const url = siteOrigin ? `${siteOrigin}${pathname === "/" ? "/" : pathname}` : "";
  const image = siteOrigin && imagePath ? `${siteOrigin}/${imagePath}` : "";
  const tags = [
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="AVIAEDU4 Trainers &amp; Consultants" />',
    ...(url ? [`<link rel="canonical" href="${escapeHtml(url)}" />`, `<meta property="og:url" content="${escapeHtml(url)}" />`] : []),
    ...(image ? [`<meta property="og:image" content="${escapeHtml(image)}" />`] : []),
    `<meta name="twitter:card" content="${image ? "summary_large_image" : "summary"}" />`,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    ...(image ? [`<meta name="twitter:image" content="${escapeHtml(image)}" />`] : []),
  ];

  return tags.join("\n  ");
}

function stripSeoMeta(html) {
  const metaTags = [
    ["name", "description"],
    ["property", "og:title"],
    ["property", "og:description"],
    ["property", "og:type"],
    ["property", "og:site_name"],
    ["property", "og:url"],
    ["property", "og:image"],
    ["name", "twitter:card"],
    ["name", "twitter:title"],
    ["name", "twitter:description"],
    ["name", "twitter:image"],
    ["name", "robots"],
  ];

  return metaTags.reduce(
    (result, [attribute, key]) =>
      result.replace(
        new RegExp(`<meta\\s+${attribute}="${key}"[^>]*\\/?>`),
        "",
      ),
    html,
  ).replace(/<link\s+rel="canonical"[^>]*\/?>/, "");
}

function productionSeoPlugin(siteOrigin) {
  return {
    name: "production-seo-pages",
    apply: "build",
    closeBundle() {
      const outputDir = resolve(projectRoot, "dist");
      const rootHtml = readFileSync(resolve(outputDir, "index.html"), "utf8");
      const assetDir = resolve(outputDir, "assets");
      const socialImageAsset = readdirSync(assetDir).find((file) =>
        /^slide4-.+\.(?:jpe?g|png|webp|avif)$/i.test(file),
      );
      const socialImagePath = socialImageAsset
        ? `assets/${socialImageAsset}`
        : "";

      if (!socialImagePath) {
        throw new Error("Unable to find the bundled AVIAEDU4 hero image for social metadata.");
      }

      for (const [pathname, page] of Object.entries(SEO_PAGES)) {
        if (pathname === "/404") continue;
        const routeHtml = stripSeoMeta(rootHtml)
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
          .replace(
            "</head>",
            `  ${seoMetaHtml(pathname, page, siteOrigin, socialImagePath)}\n</head>`,
          );

        const routeDir =
          pathname === "/" ? outputDir : resolve(outputDir, pathname.slice(1));
        mkdirSync(routeDir, { recursive: true });
        writeFileSync(resolve(routeDir, "index.html"), routeHtml);
      }

      const notFoundHtml = stripSeoMeta(rootHtml)
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(SEO_PAGES["/404"].title)}</title>`)
        .replace(
          "</head>",
          `  ${seoMetaHtml("/404", SEO_PAGES["/404"], "", "")}\n  <meta name="robots" content="noindex, nofollow" />\n</head>`,
        );
      writeFileSync(resolve(outputDir, "404.html"), notFoundHtml);

      if (siteOrigin) {
        const urls = Object.keys(SEO_PAGES)
          .filter((pathname) => pathname !== "/404")
          .map((pathname) => `  <url><loc>${siteOrigin}${pathname === "/" ? "/" : pathname}</loc></url>`)
          .join("\n");
        writeFileSync(
          resolve(outputDir, "sitemap.xml"),
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        );
        writeFileSync(
          resolve(outputDir, "robots.txt"),
          `User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap.xml\n`,
        );
      } else {
        writeFileSync(resolve(outputDir, "robots.txt"), "User-agent: *\nAllow: /\n");
        console.warn(
          "VITE_PUBLIC_SITE_URL is unset or invalid; sitemap and canonical URLs were omitted. Set it to the production HTTPS origin before deployment.",
        );
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, projectRoot, "VITE_");
  const siteOrigin = cleanProductionOrigin(env.VITE_PUBLIC_SITE_URL);

  return {
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      productionSeoPlugin(siteOrigin),
    ],
  };
});
