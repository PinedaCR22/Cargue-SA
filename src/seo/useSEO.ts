import { useEffect } from "react";

function upsertMeta({
  name,
  property,
  content,
}: {
  name?: string;
  property?: string;
  content?: string;
}) {
  if (!content) return;
  const selector = name
    ? `meta[name="${name}"]`
    : `meta[property="${property}"]`;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    if (name) tag.setAttribute("name", name);
    if (property) tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink({ rel, href }: { rel: string; href?: string }) {
  if (!href) return;
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export interface SEOConfig {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  canonical?: string;
}

export default function useSEO({
  title,
  description,
  url,
  image,
  canonical,
}: SEOConfig) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    upsertMeta({ name: "description", content: description });

    // Open Graph
    upsertMeta({ property: "og:type", content: "website" });
    upsertMeta({ property: "og:title", content: title });
    upsertMeta({ property: "og:description", content: description });
    upsertMeta({ property: "og:url", content: url });
    upsertMeta({ property: "og:image", content: image });

    // Twitter
    upsertMeta({ name: "twitter:card", content: "summary_large_image" });
    upsertMeta({ name: "twitter:title", content: title });
    upsertMeta({ name: "twitter:description", content: description });
    upsertMeta({ name: "twitter:image", content: image });

    // Canonical
    if (canonical) upsertLink({ rel: "canonical", href: canonical });

    return () => {
      document.title = prevTitle;
    };
  }, [title, description, url, image, canonical]);
}
