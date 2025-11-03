# Guía Completa de la API REST de Strapi

## 📋 Índice
- [Introducción](#introducción)
- [Estructura de Respuesta](#estructura-de-respuesta)
- [Populate (Poblar Relaciones)](#populate-poblar-relaciones)
- [Filtros (Filters)](#filtros-filters)
- [Ordenamiento (Sort)](#ordenamiento-sort)
- [Paginación](#paginación)
- [Campos Específicos](#campos-específicos)
- [Localización (i18n)](#localización-i18n)
- [Publicación/Draft](#publicacióndraft)
- [Ejemplos Prácticos](#ejemplos-prácticos)
- [Mejores Prácticas](#mejores-prácticas)

## 🚀 Introducción

Strapi expone una API RESTful que permite acceder a tus datos de manera programática. La URL base es `http://localhost:1337/api/` (cambia localhost por tu dominio en producción).

### Tipos de Endpoints:
- **Collection Types**: `/api/[content-type]` (ej: `/api/posts`)
- **Single Types**: `/api/[single-type]` (ej: `/api/home`)

## 📊 Estructura de Respuesta

Todas las respuestas siguen esta estructura:

```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "Mi Título",
      "content": "Contenido aquí",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  },
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

Para arrays (collection types):
```json
{
  "data": [
    {
      "id": 1,
      "attributes": { ... }
    }
  ],
  "meta": { ... }
}
```

## 🔗 Populate (Poblar Relaciones)

El `populate` permite incluir datos de campos relacionales en la respuesta.

### Populate Básico
```javascript
// Poblar un campo específico
fetch('/api/posts?populate=author')

// Poblar múltiples campos
fetch('/api/posts?populate=author,categories')

// Poblar todo (*)
fetch('/api/posts?populate=*')
```

### Populate Anidado (Deep Populate)
```javascript
// Poblar relaciones de relaciones
fetch('/api/posts?populate[author][populate]=avatar')
fetch('/api/posts?populate[categories][populate]=parent')
```

### Populate con Filtros
```javascript
// Poblar solo campos específicos de la relación
fetch('/api/posts?populate[author][fields]=name,email')
```

### Ejemplos Prácticos de Populate

```javascript
// Single Type con Collection Type relacionado
const homeData = await fetch('/api/home?populate=data_contents')
const contents = homeData.data.attributes.data_contents.data

// Collection Type con múltiples relaciones
const posts = await fetch('/api/posts?populate=author,categories,tags,featured_image')

// Populate anidado complejo
const products = await fetch('/api/products?populate[categories][populate][parent][populate]=grandparent')
```

## 🔍 Filtros (Filters)

Los filtros permiten buscar datos específicos usando operadores.

### Filtros Básicos
```javascript
// Igualdad
fetch('/api/posts?filters[title][$eq]=Mi Título')

// Contiene (case insensitive)
fetch('/api/posts?filters[title][$contains]=palabra')

// No contiene
fetch('/api/posts?filters[title][$notContains]=palabra')

// Mayor que
fetch('/api/posts?filters[views][$gt]=100')

// Menor o igual
fetch('/api/posts?filters[date][$lte]=2024-01-01')
```

### Operadores Disponibles
- `$eq` - Igual a
- `$ne` - No igual a
- `$lt` - Menor que
- `$lte` - Menor o igual que
- `$gt` - Mayor que
- `$gte` - Mayor o igual que
- `$in` - En array
- `$nin` - No en array
- `$contains` - Contiene (string)
- `$notContains` - No contiene
- `$null` - Es null
- `$notNull` - No es null

### Filtros Combinados
```javascript
// AND implícito (múltiples filtros)
fetch('/api/posts?filters[status][$eq]=published&filters[category][name][$eq]=tech')

// OR explícito
fetch('/api/posts?filters[$or][0][title][$contains]=react&filters[$or][1][title][$contains]=vue')
```

## 📈 Ordenamiento (Sort)

Ordenar resultados por uno o múltiples campos.

```javascript
// Orden ascendente (default)
fetch('/api/posts?sort=title')

// Orden descendente
fetch('/api/posts?sort=title:desc')

// Múltiples campos
fetch('/api/posts?sort=createdAt:desc,title:asc')
```

## 📄 Paginación

Controlar cuántos resultados obtener y desde dónde.

```javascript
// Página y tamaño
fetch('/api/posts?pagination[page]=1&pagination[pageSize]=10')

// Offset-based
fetch('/api/posts?pagination[start]=0&pagination[limit]=10')

// Deshabilitar paginación
fetch('/api/posts?pagination[pageSize]=-1')
```

## 🎯 Campos Específicos

Seleccionar solo los campos que necesitas.

```javascript
// Campos específicos
fetch('/api/posts?fields=title,slug,createdAt')

// Excluir campos
fetch('/api/posts?fields[0]=title&fields[1]=content')
```

## 🌍 Localización (i18n)

Para contenido localizado, especifica el locale.

```javascript
// Contenido en español
fetch('/api/posts?locale=es')

// Contenido en inglés
fetch('/api/posts?locale=en')

// Todos los locales
fetch('/api/posts?locale=all')
```

## 📝 Publicación/Draft

Filtrar por estado de publicación.

```javascript
// Solo publicados
fetch('/api/posts?publicationState=live')

// Incluyendo drafts (requiere autenticación)
fetch('/api/posts?publicationState=preview')
```

## 💡 Ejemplos Prácticos

### 1. Homepage con datos relacionados
```javascript
async function getHomeData() {
  const response = await fetch('/api/home?populate[hero_section][populate]=background_image&populate[featured_posts][populate]=author,categories&populate[statistics]=*');
  return response.json();
}
```

### 2. Blog posts con filtros complejos
```javascript
async function getFilteredPosts() {
  const response = await fetch('/api/posts?' +
    'populate=author,categories,tags,featured_image&' +
    'filters[status][$eq]=published&' +
    'filters[categories][name][$eq]=technology&' +
    'sort=createdAt:desc&' +
    'pagination[pageSize]=12'
  );
  return response.json();
}
```

### 3. Búsqueda con populate
```javascript
async function searchPosts(query) {
  const response = await fetch(`/api/posts?` +
    `filters[title][$contains]=${query}&` +
    `populate=author&` +
    `fields=title,slug,excerpt`
  );
  return response.json();
}
```

## ✅ Mejores Prácticas

### 1. **Usa Populate Eficientemente**
```javascript
// ❌ Ineficiente - trae todo
fetch('/api/posts?populate=*')

// ✅ Específico - trae solo lo necesario
fetch('/api/posts?populate=author,featured_image&fields=title,excerpt,slug')
```

### 2. **Implementa Caché**
```javascript
// En Next.js, usa revalidate para ISR
export const revalidate = 3600; // 1 hora

// O usa cache manual
const response = await fetch(url, {
  next: { revalidate: 3600 }
});
```

### 3. **Manejo de Errores**
```javascript
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
```

### 4. **URLs Dinámicas**
```javascript
function buildApiUrl(contentType, options = {}) {
  const params = new URLSearchParams();

  if (options.populate) params.append('populate', options.populate);
  if (options.filters) {
    Object.entries(options.filters).forEach(([key, value]) => {
      params.append(`filters[${key}]`, value);
    });
  }

  return `/api/${contentType}?${params.toString()}`;
}

// Uso
const url = buildApiUrl('posts', {
  populate: 'author,categories',
  filters: { status: 'published' }
});
```

### 5. **TypeScript Types**
```typescript
interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface Post {
  id: number;
  attributes: {
    title: string;
    content: string;
    author: {
      data: Author;
    };
  };
}

async function getPosts(): Promise<StrapiResponse<Post[]>> {
  const response = await fetch('/api/posts?populate=author');
  return response.json();
}
```

## 🔧 Configuración Avanzada

### Variables de Entorno
```javascript
// .env.local
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your-jwt-token
```

### Cliente HTTP Personalizado
```javascript
class StrapiClient {
  constructor(baseURL, token = null) {
    this.baseURL = baseURL;
    this.token = token;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}/api/${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(this.token && { Authorization: `Bearer ${this.token}` }),
        ...options.headers
      },
      ...options
    };

    const response = await fetch(url, config);
    return response.json();
  }

  async getSingleType(type, populate = '') {
    return this.request(`${type}?populate=${populate}`);
  }

  async getCollectionType(type, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return this.request(`${type}?${queryString}`);
  }
}

// Uso
const strapi = new StrapiClient(process.env.NEXT_PUBLIC_STRAPI_URL);
const homeData = await strapi.getSingleType('home', 'data_contents');
```

---

## 📚 Recursos Adicionales

- [Documentación Oficial de Strapi](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html)
- [API Reference](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-endpoints)
- [Query Parameters](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#query-parameters)

---

*Este manual se actualiza continuamente. Para más ejemplos específicos, consulta la documentación oficial de Strapi.*