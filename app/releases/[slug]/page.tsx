import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllSlugs,
  getReleaseBySlug,
  formatDate,
} from "@/lib/releases";
import MarkdownContent from "@/components/MarkdownContent";
import VersionBadge from "@/components/VersionBadge";

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
        className="text-sm text-muted transition-colors hover:text-foreground"
      >
        ← Todas las versiones
      </Link>

      <div className="mt-8 mb-6 flex flex-wrap items-center gap-3">
        <VersionBadge version={release.version} />
        {release.tag && (
          <span className="text-xs uppercase tracking-wide text-muted">
            {release.tag}
          </span>
        )}
        <time className="ml-auto text-sm text-muted">
          {formatDate(release.date)}
        </time>
      </div>

      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {release.title}
      </h1>

      {release.summary && (
        <p className="mt-4 text-lg text-muted">{release.summary}</p>
      )}

      <hr className="my-8 border-[#1f1f22]" />

      <MarkdownContent content={release.content} />
    </article>
  );
}
