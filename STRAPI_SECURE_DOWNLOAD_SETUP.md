# Configuración de Endpoint Seguro para Contador de Descargas

## Problema de Seguridad

El método actual permite que cualquiera envíe valores arbitrarios al endpoint PUT de Strapi:

```javascript
// ❌ INSEGURO - Permite enviar cualquier número
fetch(`https://api.yokaicdmx.com/api/data-contents/${documentId}`, {
  method: "PUT",
  body: JSON.stringify({ data: { Downloads: 999999 } }), // Puede ser cualquier valor
});
```

## Solución: Endpoint Personalizado

Crear un endpoint que **solo permita incrementar en 1** y no acepte valores arbitrarios.

---

## 📁 Archivos a Crear en Strapi

### 1. Controller Personalizado

**Ubicación:** `src/api/data-content/controllers/data-content.js`

```javascript
"use strict";

/**
 * data-content controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::data-content.data-content",
  ({ strapi }) => ({
    // Endpoint personalizado para incrementar descargas de forma segura
    async incrementDownload(ctx) {
      try {
        const { documentId } = ctx.params;
        const { locale } = ctx.query;

        if (!documentId) {
          return ctx.badRequest("documentId is required");
        }

        // Buscar el contenido por documentId y locale
        const entries = await strapi
          .documents("api::data-content.data-content")
          .findMany({
            filters: { documentId },
            locale: locale || "es",
          });

        if (!entries || entries.length === 0) {
          return ctx.notFound("Content not found");
        }

        const entry = entries[0];
        const currentDownloads = entry.Downloads || 0;
        const newDownloads = currentDownloads + 1;

        // Actualizar solo el campo Downloads, incrementando en 1
        const updatedEntry = await strapi
          .documents("api::data-content.data-content")
          .update({
            documentId,
            locale: locale || "es",
            data: {
              Downloads: newDownloads,
            },
          });

        return {
          data: {
            documentId: updatedEntry.documentId,
            Downloads: updatedEntry.Downloads,
          },
        };
      } catch (error) {
        console.error("Error incrementing downloads:", error);
        return ctx.internalServerError("Error incrementing downloads");
      }
    },
  })
);
```

---

### 2. Ruta Personalizada

**Ubicación:** `src/api/data-content/routes/custom-routes.js`

```javascript
"use strict";

/**
 * Custom routes for data-content
 */

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/data-contents/:documentId/increment-download",
      handler: "data-content.incrementDownload",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
```

---

## 🔧 Pasos de Instalación en Strapi

1. **Crear el Controller:**

   - Navega a tu proyecto Strapi
   - Crea/edita el archivo: `src/api/data-content/controllers/data-content.js`
   - Pega el código del controller personalizado

2. **Crear la Ruta:**

   - En la misma carpeta `data-content`
   - Crea el archivo: `src/api/data-content/routes/custom-routes.js`
   - Pega el código de la ruta personalizada

3. **Configurar Permisos:**

   - Ve a: Settings > Users & Permissions plugin > Roles > Public
   - En la sección "Data-content":
     - ✅ Activa `incrementDownload`
   - Guarda los cambios

4. **Reiniciar Strapi:**
   ```bash
   npm run develop
   # o
   yarn develop
   ```

---

## 🧪 Probar el Endpoint

### Usando cURL:

```bash
curl -X POST "https://api.yokaicdmx.com/api/data-contents/YOUR_DOCUMENT_ID/increment-download?locale=es"
```

### Usando Postman:

- **Method:** POST
- **URL:** `https://api.yokaicdmx.com/api/data-contents/YOUR_DOCUMENT_ID/increment-download?locale=es`
- **Headers:** (ninguno necesario para endpoint público)

### Respuesta Esperada:

```json
{
  "data": {
    "documentId": "abc123xyz",
    "Downloads": 5
  }
}
```

---

## ✅ Beneficios de Seguridad

1. **No acepta valores arbitrarios:** El cliente no puede enviar `Downloads: 999999`
2. **Incremento controlado:** Siempre suma +1, nunca más
3. **Validación en backend:** Verifica que el documento existe
4. **Atomicidad:** Lee y escribe en una sola operación controlada
5. **Endpoint específico:** POST `/increment-download` vs PUT genérico

---

## 🔄 Comparación

### Antes (Inseguro):

```javascript
// Cliente puede enviar cualquier valor
PUT /api/data-contents/:id
Body: { data: { Downloads: 999999 } }
```

### Después (Seguro):

```javascript
// Cliente solo puede incrementar
POST /api/data-contents/:documentId/increment-download
Body: (vacío, el backend controla el incremento)
```

---

## 📝 Notas Importantes

- El endpoint usa `documentId` en lugar de `id` (Strapi v4)
- Soporta el parámetro `locale` para contenido multilingüe
- Retorna solo los campos necesarios (documentId y Downloads)
- No requiere autenticación si está configurado como público
- Es compatible con CORS para peticiones desde yokaicdmx.com

---

## 🚀 Siguiente Paso

Una vez implementado en Strapi, actualiza el frontend para usar el nuevo endpoint (ver siguiente archivo).
