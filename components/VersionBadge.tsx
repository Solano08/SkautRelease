export default function VersionBadge({ version }: { version: string }) {
  return (
    <span className="font-mono text-xs text-accent">{version}</span>
  );
}