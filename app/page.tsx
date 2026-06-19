import Image from "next/image";
import Link from "next/link";
import { getAllReleases, formatDate, formatVersionNumber } from "@/lib/releases";
import MarkdownContent from "@/components/MarkdownContent";
import VersionBadge from "@/components/VersionBadge";

export default function Home() {
  const releases = getAllReleases();

  return (
    <div>
      <section className="mb-16">
        <div className="flex justify-center">
          <Image
            src="/skaut-ia-logo.png"
            alt="Skaut IA"
            width={1200}
            height={400}
            priority
            className="h-auto w-full max-w-md"
          />
        </div>
        <h1 className="mt-10 text-3xl font-semibold tracking-tight sm:text-4xl">
          Notas de versión
        </h1>
        <p className="mt-3 max-w-xl text-muted">
          Historial de lanzamientos y mejoras de Skaut IA, el agente de
          inteligencia para análisis de oportunidades de inversión en Colombia.
        </p>
      </section>

      {releases.length === 0 ? (
        <p className="text-muted">Aún no hay notas de versión publicadas.</p>
      ) : (
        <div className="space-y-16">
          {releases.map((release) => (
            <article
              key={release.slug}
              className="relative border-t border-[#1f1f22] pt-8"
            >
              <div className="mb-5 flex flex-wrap items-center gap-3">
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

              <Link href={`/releases/${release.slug}`} className="group block">
                <h2 className="flex items-baseline gap-2 text-2xl font-semibold tracking-tight">
                  <span className="transition-colors group-hover:text-accent">
                    {release.title}
                  </span>
                  <span className="font-mono text-xs text-accent">
                    {formatVersionNumber(release.version)}
                  </span>
                </h2>
              </Link>

              <div className="mt-6">
                <MarkdownContent content={release.content} />
              </div>

              <Link
                href={`/releases/${release.slug}`}
                className="mt-6 inline-block text-sm text-accent hover:underline"
              >
                Ver esta versión →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
