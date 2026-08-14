import Image from "next/image";
import Link from "next/link";
import {
  getAllReleases,
  formatDate,
  formatVersionNumber,
  getHomePreviewMarkdown,
} from "@/lib/releases";
import MarkdownContent from "@/components/MarkdownContent";

export const dynamic = "force-static";

export default function Home() {
  const releases = getAllReleases();

  return (
    <div>
      <section className="mb-16">
        <div className="flex justify-center">
          <Image
            src="/skaut-ia-release.png"
            alt="Skaut IA"
            width={1200}
            height={400}
            priority
            className="h-auto w-full max-w-md"
          />
        </div>
        <h2 className="mt-10 text-2xl font-semibold tracking-tight sm:text-4xl">
          Notas de versión
        </h2>
      </section>

      {releases.length === 0 ? (
        <p className="text-base text-muted">
          Aún no hay notas de versión publicadas.
        </p>
      ) : (
        <div className="space-y-14">
          {releases.map((release) => (
            <article key={release.slug} className="relative pt-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 -left-14 -right-14 h-px bg-[#1f1f22] sm:-left-20 sm:-right-20"
              />
              <div className="relative">
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

                <Link href={`/releases/${release.slug}`} className="group block">
                  <h2 className="flex items-baseline gap-2.5 text-3xl font-semibold tracking-tight sm:text-4xl">
                    <span className="transition-colors group-hover:text-accent">
                      {release.title}
                    </span>
                    <span className="font-mono text-base text-accent">
                      {formatVersionNumber(release.version)}
                    </span>
                  </h2>
                </Link>
              </div>

              {release.summary && (
                <p className="mt-4 text-lg leading-relaxed text-[#d4d4d8]">
                  {release.summary}
                </p>
              )}

              <div className="release-preview mt-6">
                <MarkdownContent
                  content={getHomePreviewMarkdown(release.content)}
                />
                <div className="release-preview-fog" aria-hidden="true" />
                <Link
                  href={`/releases/${release.slug}`}
                  className="release-preview-cta"
                >
                  Leer nota completa →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
