import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import socialImageUrl from "../assets/images/slideshow/slide4.jpeg";
import { SEO_PAGES } from "../seoPages";

function getSiteOrigin(value) {
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

const SITE_URL = getSiteOrigin(import.meta.env.VITE_PUBLIC_SITE_URL);

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.setAttribute("content", content);
}

function upsertCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!url) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.append(element);
  }
  element.href = url;
}

function SeoHead() {
  const { pathname } = useLocation();
  const normalizedPath =
    pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const page = SEO_PAGES[normalizedPath] ?? SEO_PAGES["/404"];
  const isNotFound = !SEO_PAGES[normalizedPath] || normalizedPath === "/404";
  const canonicalUrl =
    SITE_URL && !isNotFound
      ? `${SITE_URL}${normalizedPath === "/" ? "/" : normalizedPath}`
      : "";
  const socialImage = SITE_URL
    ? new URL(socialImageUrl, `${SITE_URL}/`).href
    : "";

  useEffect(() => {
    document.title = page.title;
    upsertMeta("name", "description", page.description);
    upsertCanonical(canonicalUrl);
    upsertMeta("property", "og:title", page.title);
    upsertMeta("property", "og:description", page.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "AVIAEDU4 Trainers & Consultants");
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", socialImage);
    upsertMeta("name", "twitter:card", socialImage ? "summary_large_image" : "summary");
    upsertMeta("name", "twitter:title", page.title);
    upsertMeta("name", "twitter:description", page.description);
    upsertMeta("name", "twitter:image", socialImage);
    upsertMeta(
      "name",
      "robots",
      isNotFound ? "noindex, nofollow" : "",
    );
  }, [canonicalUrl, isNotFound, page, socialImage]);

  return null;
}

export default SeoHead;
