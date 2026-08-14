---
version: "geraldine-0210"
title: "Geraldine"
date: "2026-07-24"
tag: "Actualización mayor"
summary: "Skaut IA pasa de un tablero nacional por departamentos a un agente de oportunidad territorial centrado en Bogotá D.C.: localidades y barrios, tesis de inversión transparente, landing completa y chat con capa LLM opcional."
---

**Geraldine 0210** redefine Skaut IA como un agente de análisis de oportunidades de inversión y negocio en **Bogotá D.C.**. Esta actualización mayor deja el mapa nacional por departamentos y concentra la experiencia en localidades y barrios, con una tesis de inversión transparente, una landing completa y un chat que combina motor determinista con redacción LLM opcional.

## Novedades

- **Enfoque Bogotá D.C.**: el producto se concentra en localidades y barrios de Bogotá, con GeoJSON propio y métricas territoriales.
- **Tesis de inversión Skaut**: score 0–100 con cinco pilares (demanda, afinidad sectorial, economía de entrada, seguridad y acceso), veredicto por ranking y metodología documentada.
- **Análisis a nivel barrio**: paneles, scoring comercial, saturación por sector y tesis adaptada por barrio (ranking intra-localidad).
- **Landing page completa**: hero, secciones de producto, demo de chat, claridad metodológica, auth modal e identidad visual renovada (águila / brand).
- **Chat con capa LLM**: APIs `/api/skaut/chat` y `/stream` con proveedores Gemini, OpenAI o Anthropic; el motor determinista aporta cifras y el LLM solo redacta.
- **Perfiles de usuario**: modos General, Inversor, Empresario y Persona natural que reponderan la tesis, el heatmap y las respuestas del agente.
- **Exportación PDF del chat**: nueva utilidad para exportar conversaciones y análisis a PDF.
- **Persistencia y etiquetas de sesión**: historial de chats más robusto, con persistencia de sesión y etiquetas automáticas.

## Mejoras

- Mapa Mapbox de Bogotá con interacción por localidades y barrios, zoom dedicado, heatmaps y sincronización con el panel del agente.
- Panel de analista en tiempo real con insights alineados a la selección del mapa y al contexto de la consulta.
- Métricas y rankings rediseñados: ranking por localidad, métricas de barrio y cards con animación.
- Dashboard y navegación: ruta `/dashboard`, TopNav/Sidebar actualizados, logo de dashboard y selector de modo/perfil.
- Datos curados y ETL: scripts de barrios, valor de referencia, indicadores y registry de datasets (ProBogotá, ODE/CCB, DANE, Catastro, Habitat).
- Calibración de tesis para ajustar y transparentar el score de oportunidad.
- Fallback sin LLM: si no hay API key, el chat responde con plantillas deterministas basadas en los mismos datos.
- Documentación de metodología (`docs/metodologia-tesis-skaut.md`) para transparencia ante inversores y usuarios.

## Correcciones y limpieza

- Se retiró el modelo nacional por departamentos (métricas, ranking, población y outline) en favor del stack Bogotá.
- Se reemplazó el motor antiguo de respuestas estáticas por `skaut-agent` + `skaut-llm` + fallback.
- La home pasa a una landing dedicada; el dashboard vive en su propia ruta.

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · Mapbox GL · Recharts · Gemini / OpenAI / Anthropic (opcional) · jsPDF

> Los indicadores y rankings de localidades y barrios usan datos curados de referencia (ProBogotá Región 2024, ODE/CCB, DANE, Catastro y Observatorio Habitat). La capa LLM solo redacta a partir de cifras precalculadas; no inventa métricas.
