import { useEffect } from "react";

type PageMeta = {
  title: string;
  description?: string;
};

function setMeta(selector: string, attr: string, value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute(attr, value);
}

/** Client-side replacement for TanStack Start's per-route `head()` meta. */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    setMeta('meta[property="og:title"]', "content", title);

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title, description]);
}
