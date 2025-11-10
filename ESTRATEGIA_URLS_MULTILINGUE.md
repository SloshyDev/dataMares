# Estrategia de URLs Multilingües para dataMares

## 📋 Resumen Ejecutivo

Este documento explica la estrategia de URLs que implementaremos para el sitio web de dataMares en sus versiones en inglés y español, optimizada para SEO y experiencia de usuario.

---

## 🎯 Objetivo

Crear una estructura de URLs clara y consistente que:

- Sea fácil de entender para los usuarios
- Funcione bien en motores de búsqueda (Google, Bing, etc.)
- Facilite el mantenimiento del sitio web

---

## 🌐 Cómo Funcionarán las URLs

### Páginas Estáticas (Institucionales)

**Inglés (idioma principal):**

```
www.datamares.com/about
www.datamares.com/contact
```

**Español:**

```
www.datamares.com/es/about
www.datamares.com/es/contact
```

#### ¿Por qué no traducimos "about" a "sobre-nosotros"?

**Razones técnicas:**

1. **Estándar internacional:** La mayoría de sitios web multilingües mantienen las URLs en inglés
2. **Simplicidad:** Una sola carpeta para todos los idiomas es más fácil de mantener
3. **SEO:** Google entiende mejor que son la misma página en diferentes idiomas

**Ejemplos de grandes empresas que hacen esto:**

- Airbnb: `airbnb.com/about` y `airbnb.com/es/about`
- Spotify: `spotify.com/about` y `spotify.com/es/about`
- Wikipedia: `en.wikipedia.org/wiki/Ocean` y `es.wikipedia.org/wiki/Ocean`

---

### Contenido Dinámico (Posters, Artículos)

Para contenido científico como posters de especies marinas, usaremos **nombres científicos** como identificadores en las URLs.

**Ejemplo con un delfín:**

**Inglés:**

```
www.datamares.com/poster/tursiops-truncatus
```

Muestra: "Bottlenose Dolphin" (nombre común en inglés)

**Español:**

```
www.datamares.com/es/poster/tursiops-truncatus
```

Muestra: "Delfín Mular" (nombre común en español)

#### Ventajas de usar nombres científicos:

1. **Universal:** _Tursiops truncatus_ se llama igual en todos los idiomas
2. **Preciso:** No hay confusión entre especies similares
3. **Profesional:** Refleja el carácter científico de dataMares
4. **Fácil de mantener:** No necesitamos crear diferentes URLs por idioma

---

## 🔍 ¿Cómo Funciona el SEO?

### Pregunta común: "Si la URL está en inglés, ¿Google encontrará el contenido en español?"

**Respuesta: SÍ, absolutamente.**

Google **no solo lee la URL**, lee todo el contenido de la página:

#### Ejemplo real de búsqueda:

**Usuario busca en Google:** "delfín mular características"

**Google analiza nuestra página** `/es/poster/tursiops-truncatus`:

- ✅ **Título de la página:** "Delfín Mular - dataMares"
- ✅ **Encabezado principal:** "Delfín Mular"
- ✅ **Contenido:** "El delfín mular (Tursiops truncatus) es un mamífero marino..."
- ✅ **Imágenes:** Con descripciones en español
- ✅ **URL:** contiene "tursiops-truncatus" (también relevante)

**Resultado:** Google muestra nuestra página porque **todo el contenido está en español**, aunque la URL use el nombre científico.

#### Búsquedas que funcionarán:

**En español:**

- "delfín mular"
- "delfines en México"
- "características del delfín nariz de botella"

**En inglés:**

- "bottlenose dolphin"
- "dolphins in Mexico"
- "tursiops truncatus facts"

**Búsquedas científicas (ambos idiomas):**

- "tursiops truncatus"
- "cetáceos del Pacífico"
- "marine mammals"

---

## 📊 Estructura Completa del Sitio

```
Idioma Principal (Inglés - sin prefijo):
├── / (inicio)
├── /about (acerca de)
├── /contact (contacto)
├── /poster/tursiops-truncatus (poster de delfín - en inglés)
└── /poster/octopus-vulgaris (poster de pulpo - en inglés)

Español (con prefijo /es/):
├── /es/ (inicio)
├── /es/about (acerca de - contenido en español)
├── /es/contact (contacto - contenido en español)
├── /es/poster/tursiops-truncatus (poster de delfín - en español)
└── /es/poster/octopus-vulgaris (poster de pulpo - en español)
```

---

## ✅ Beneficios de Esta Estrategia

### Para los usuarios:

1. **URLs limpias y profesionales**
2. **Fácil cambiar de idioma:** Solo se agrega o quita `/es/`
3. **Contenido científico preciso:** Los nombres científicos evitan confusiones

### Para el equipo técnico:

1. **Menos código:** Una sola plantilla para todos los idiomas
2. **Menos errores:** No hay que mantener múltiples rutas
3. **Fácil agregar más idiomas:** Portugués sería `/pt/poster/tursiops-truncatus`

### Para SEO:

1. **Google entiende las versiones de idioma**
2. **Mejor indexación:** URLs consistentes
3. **Búsquedas científicas:** Funcionan en todos los idiomas

---

## 🚀 Implementación

### Fase 1: Páginas Estáticas

- Mantener carpeta `about` única
- Eliminar carpeta duplicada `sobre-nosotros`
- El contenido dentro de `about` se traduce según el idioma

### Fase 2: Contenido Dinámico

- Configurar campo `slug` en Strapi basado en nombres científicos
- Crear plantilla dinámica: `/[locale]/poster/[slug]`
- Agregar nombres comunes traducidos en el contenido

### Fase 3: SEO

- Configurar etiquetas `hreflang` (le dice a Google que son el mismo contenido en diferentes idiomas)
- Optimizar títulos y descripciones por idioma
- Agregar datos estructurados (Schema.org)

---

## 📚 Referencias y Mejores Prácticas

### Sitios similares que usan esta estrategia:

- **National Geographic:** `/animals/mammals/facts/bottlenose-dolphin` (mismo en todos los idiomas)
- **iNaturalist:** `/taxa/41371-Tursiops-truncatus` (nombre científico como ID)
- **Encyclopedia of Life:** Usa nombres científicos universales

### Recomendaciones de Google:

> "Use una estructura de URL coherente en todas las versiones de idioma."
> — [Google Search Central - Sitios multilingües](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)

---

## ❓ Preguntas Frecuentes

**P: ¿Por qué no `/es/acerca-de` en lugar de `/es/about`?**  
R: Por estándar internacional y simplicidad técnica. El contenido dentro está completamente en español, que es lo que importa para el usuario.

**P: ¿La gente encontrará el contenido si busca en español?**  
R: Sí, Google lee todo el contenido de la página, no solo la URL.

**P: ¿Y si queremos agregar francés o portugués después?**  
R: Muy fácil: `/fr/poster/tursiops-truncatus` o `/pt/poster/tursiops-truncatus`

**P: ¿Esto afecta el posicionamiento en Google México?**  
R: No. Google sabe que el sitio es `/es/` para México por el contenido, metadatos y configuración del sitio.

---

## 📈 Métricas de Éxito

Después de implementar esta estrategia, podremos medir:

- ✅ Tráfico orgánico por idioma
- ✅ Posiciones en búsquedas científicas vs búsquedas comunes
- ✅ Tasa de rebote por versión de idioma
- ✅ Tiempo en página (indica si el contenido es relevante)

---

**Fecha:** 9 de noviembre de 2025  
**Autor:** Equipo de Desarrollo dataMares  
**Revisión:** Pendiente
