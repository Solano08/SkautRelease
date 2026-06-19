import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Release = {
  slug: string;
  version: string;
  title: string;
  date: string;
  tag?: string;
  summary?: string;
  content: string;
};

const releasesDir = path.join(process.cwd(), "content", "releases");

function readRelease(filename: string): Release {
  const slug = filename.replace(/\.md$/, "");
  const fullPath = path.join(releasesDir, filename);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  return {
    slug,
    version: (data.version as string) ?? slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? "",
    tag: data.tag as string | undefined,
    summary: data.summary as string | undefined,
    content,
  };
}

export function getAllReleases(): Release[] {
  if (!fs.existsSync(releasesDir)) return [];

  const files = fs.readdirSync(releasesDir).filter((f) => f.endsWith(".md"));

  return files
    .map(readRelease)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getReleaseBySlug(slug: string): Release | null {
  const filename = `${slug}.md`;
  const fullPath = path.join(releasesDir, filename);
  if (!fs.existsSync(fullPath)) return null;
  return readRelease(filename);
}

export function getAllSlugs(): string[] {
  return getAllReleases().map((r) => r.slug);
}

export function formatVersionNumber(version: string): string {
  const lastSegment = version.split("-").pop();
  return lastSegment ?? version;
}

export function formatDate(date: string): string {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
