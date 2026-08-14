import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Incluye las notas Markdown en el bundle de Vercel (lectura con fs).
  outputFileTracingIncludes: {
    "/**": ["./content/releases/**/*"],
  },
};

export default nextConfig;
