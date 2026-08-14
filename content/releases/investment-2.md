---
version: "investment-2"
title: "Investment"
date: "2026-08-05"
tag: "Expansión"
summary: "Skaut IA incorpora el ciclo completo de decisión de inversión: proyectos con tesis congelada, carteras ponderadas, historial macro 2019–2025, ajustes con tema claro/oscuro y una ayuda integrada."
---

**Investment** lleva Skaut IA más allá del análisis territorial puntual: ahora puedes guardar oportunidades como proyectos, armar carteras con pesos y tickets, consultar el contexto macro histórico de Bogotá y personalizar la experiencia desde Ajustes. El dashboard gana módulos dedicados, identidad visual reforzada y un flujo más cercano a un estudio de inversión.

## Novedades

- **Proyectos**: guarda oportunidades con territorio (localidad/barrio), sectores, perfil de usuario y una foto congelada de la Tesis Skaut (score, pilares, veredicto e inmobiliario). Estados del ciclo de decisión: explorando, en evaluación, aprobado, en pausa y descartado.
- **Carteras e Inversión**: arma carteras con posiciones ponderadas (peso 0–100), KPIs agregados, composición por localidad/sector, pilares promedio y enlace opcional desde proyectos aprobados.
- **Historial e Inflación**: workspace con series macro de Bogotá 2019–2025 (IPC, mercado laboral, tejido empresarial y dinamismo sectorial) sobre datos curados DANE / Observatorio.
- **Ajustes**: preferencias de app, perfil, tema **claro/oscuro** persistente y gestión de datos locales.
- **Ayuda**: FAQ integrada que explica Skaut, la tesis, los módulos del menú y el flujo de decisión.
- **Orbe de análisis**: nuevo indicador visual en el chat mientras Skaut procesa la consulta.
- **Identidad y PWA**: favicon, iconos y video de marca (`Eagle_Flying_Skaut`) en la experiencia de producto.

## Mejoras

- Sidebar ampliado con secciones **Proyectos**, **Historial e Inflación**, **Carteras e Inversión**, más **Ajustes** y **Ayuda** en el pie.
- Dashboard reorganizado: cada módulo tiene workspace propio; el mapa y los paneles se sincronizan con proyectos activos.
- TopNav y navegación más claras al cambiar entre Estrategia, Seguridad e Inteligencia.
- Landing actualizada (hero, secciones y auth) alineada a la nueva identidad.
- Métricas y paneles de tesis/localidad/barrio refinados para convivir con los nuevos módulos.
- Exportación PDF del chat y persistencia local de proyectos/carteras.
- Capas Mapbox de Bogotá renombradas y estabilizadas (localidades/barrios, heatmaps).

## Correcciones y limpieza

- Se retiró `MapExperience` en favor del flujo de mapa Bogotá consolidado.
- Overlay y utilidades Mapbox alineados al naming `Bogota` / `localidades` (menos legado Colombia-nacional).
- Tema y preferencias dejan de depender solo del modo oscuro por defecto: el usuario elige y se guarda en localStorage.

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · Mapbox GL · Recharts · Lucide · jsPDF · Gemini / OpenAI / Anthropic (opcional)

> Las series históricas de Bogotá son curadas / aproximadas a partir de fuentes públicas (DANE IPC/GEIH, Observatorio Desarrollo Económico). No sustituyen la descarga oficial punto a punto. Proyectos y carteras persisten en el navegador; la tesis guardada es un snapshot, no una cotización en tiempo real.
