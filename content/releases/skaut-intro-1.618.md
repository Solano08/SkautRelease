---
version: "skaut-intro-1.618"
title: "Skaut Intro"
date: "2026-06-19"
tag: "Lanzamiento inicial"
summary: "Primera versión pública de Skaut IA: el agente de inteligencia para análisis de oportunidades de inversión en Colombia. Incluye el mapa interactivo de Colombia, métricas por departamento, analista en tiempo real y una experiencia de chat completamente rediseñada."
---

Damos la bienvenida a **Skaut IA**, el agente de inteligencia diseñado para analizar oportunidades de inversión y negocio a nivel nacional en Colombia. Esta primera versión establece la base de la plataforma: un tablero interactivo, métricas territoriales y un asistente conversacional especializado.

## Novedades

- **Mapa interactivo de Colombia** con mapa de calor por departamento, etiquetas e interacción sobre cada territorio.
- **Analista en tiempo real**: panel dedicado que acompaña el análisis con lecturas contextuales.
- **Experiencia de chat rediseñada** con panel de conversación, historial de chats y barra de chat minimizable.
- **Pantalla de carga (Loading Screen)** con la identidad visual de Skaut.
- **Métricas por departamento y ranking nacional**: nuevos paneles para comparar territorios y ver el ranking de oportunidades.

## Mejoras

- Nuevos paneles de métricas nacionales y departamentales para una lectura más granular de los indicadores.
- Efectos de *scroll fade* sincronizados para una navegación más fluida entre secciones.
- Cámara de introducción del mapa y mayor estabilidad en la carga de tiles de Mapbox.
- Interacción de departamentos ampliada (selección, resaltado y datos contextuales).
- Identidad de marca actualizada con el nuevo logo de Skaut.

## Correcciones y limpieza

- Se retiró el feed en vivo y el *market ticker* antiguos en favor de los nuevos paneles de análisis.
- Se eliminaron las rutas de API heredadas (`feed`, `ticker`, `metrics`) y se consolidó la lógica de respuestas del chat.
- Reorganización interna de la lógica de datos y tipos para facilitar el crecimiento futuro.

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · Mapbox GL · Recharts

> Los indicadores macro, métricas sectoriales y rankings departamentales funcionan con datos estáticos de referencia (Banco Mundial, DANE y Banco de la República). No se consultan fuentes en tiempo real en esta versión.
