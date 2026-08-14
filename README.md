<p align="center">
  <img src="./public/skaut-ia-release.png" alt="Skaut IA" width="480" />
</p>

# Skaut Release

Notas de versión de Skaut IA. Sitio estático generado con Next.js 15.

---

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Las notas viven en `content/releases/*.md`. Cada archivo Markdown se convierte en una página `/releases/<slug>`.

---

## Despliegue en Vercel

Repositorio: [github.com/Solano08/SkautRelease](https://github.com/Solano08/SkautRelease)

### 1. Sube los cambios a GitHub

Vercel despliega lo que está en el remoto. Antes de importar el proyecto, confirma y sube el trabajo local:

```bash
git add .
git commit -m "Prepara el despliegue en Vercel"
git push origin main
```

### 2. Crea una cuenta e importa el repo

1. Entra a [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2. **Add New… → Project**.
3. Autoriza el acceso a la organización/usuario `Solano08` si te lo pide.
4. Selecciona **SkautRelease**.
5. Deja los valores que Vercel detecta:
   - Framework: **Next.js**
   - Build Command: `next build` (por defecto)
   - Install Command: `npm ci` (definido en `vercel.json`)
   - Output: automático (`.next`)
6. Este proyecto **no necesita variables de entorno**.
7. Pulsa **Deploy**.

En 1–2 minutos tendrás una URL del tipo `https://skaut-release.vercel.app`.

### 3. (Opcional) Dominio propio

En el proyecto de Vercel: **Settings → Domains**. Añade el dominio y sigue las instrucciones DNS (CNAME a `cname.vercel-dns.com`, o registro A `76.76.21.21` para el apex).

### 4. Publicar una nueva nota

1. Crea `content/releases/nombre-de-la-version.md`.
2. Haz commit y `git push` a `main`.
3. Vercel vuelve a construir el sitio solo. Cada pull request genera además una **Preview URL**.

### Alternativa: CLI

```bash
npm i -g vercel
vercel login
vercel        # preview
vercel --prod # producción
```

---

**David Solano**
