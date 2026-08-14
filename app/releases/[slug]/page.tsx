import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllSlugs,
  getReleaseBySlug,
  formatDate,
  formatVersionNumber,
} from "@/lib/releases";
import MarkdownContent from "@/components/MarkdownContent";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const release = getReleaseBySlug(slug);
  if (!release) return { title: "Versión no encontrada · Skaut Release" };
  return {
    title: `${release.title} (${release.version}) · Skaut Release`,
    description: release.summary,
  };
}

export default async function ReleasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const release = getReleaseBySlug(slug);

  if (!release) notFound();

  return (
    <article>
      <Link
        href="/"
        className="text-base text-muted transition-colors hover:text-foreground"
      >
        ← Todas las versiones
      </Link>

      <div className="mt-8 mb-6">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          {release.tag && (
            <span className="text-sm uppercase tracking-wide text-muted">
              {release.tag}
            </span>
          )}
          <time className="ml-auto text-base text-muted">
            {formatDate(release.date)}
          </time>
        </div>

        <h1 className="flex items-baseline gap-2.5 text-4xl font-semibold tracking-tight sm:text-5xl">
          <span>{release.title}</span>
          <span className="font-mono text-base text-accent sm:text-lg">
            {formatVersionNumber(release.version)}
          </span>
        </h1>
      </div>

      {release.summary && (
        <p className="mt-4 text-xl leading-relaxed text-muted">
          {release.summary}
        </p>
      )}

      <hr className="my-8 border-[#1f1f22]" />

      <MarkdownContent content={release.content} />
    </article>
  );
}
