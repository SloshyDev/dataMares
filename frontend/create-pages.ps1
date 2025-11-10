# Script para crear páginas traducidas
# Ejecutar desde: frontend/

# Este script crea automáticamente las carpetas y archivos page.js para todas las rutas
# definidas en routesConfig.js

$routes = @{
    "news"        = @{
        "en"        = "news"
        "es"        = "noticias"
        "title_en"  = "News"
        "title_es"  = "Noticias"
        "component" = "NewsPage"
    }
    "dataKids"    = @{
        "en"        = "datakids"
        "es"        = "datakids"
        "title_en"  = "dataKids"
        "title_es"  = "dataKids"
        "component" = "DataKidsPage"
    }
    "dataGrams"   = @{
        "en"        = "datagrams"
        "es"        = "datagrams"
        "title_en"  = "dataGrams"
        "title_es"  = "dataGrams"
        "component" = "DataGramsPage"
    }
    "dataGraphic" = @{
        "en"        = "datagraphic"
        "es"        = "datagraficos"
        "title_en"  = "dataGraphic"
        "title_es"  = "dataGráficos"
        "component" = "DataGraphicPage"
    }
    "dataPics"    = @{
        "en"        = "datapics"
        "es"        = "datapics"
        "title_en"  = "dataPics"
        "title_es"  = "dataPics"
        "component" = "DataPicsPage"
    }
    "dataPoster"  = @{
        "en"        = "dataposter"
        "es"        = "dataposter"
        "title_en"  = "dataPoster"
        "title_es"  = "dataPoster"
        "component" = "DataPosterPage"
    }
    "stories"     = @{
        "en"        = "stories"
        "es"        = "historias"
        "title_en"  = "Stories"
        "title_es"  = "Historias"
        "component" = "StoriesPage"
    }
    "globalData"  = @{
        "en"        = "global-data"
        "es"        = "datos-globales"
        "title_en"  = "Global Data"
        "title_es"  = "Datos Globales"
        "component" = "GlobalDataPage"
    }
}

$basePath = "src\app\[locale]"
$componentsPath = "src\app\components"

foreach ($routeKey in $routes.Keys) {
    $route = $routes[$routeKey]
    $enPath = $route.en
    $esPath = $route.es
    $component = $route.component
    $titleEn = $route.title_en
    $titleEs = $route.title_es
    
    # Crear carpeta del componente
    $componentDir = Join-Path $componentsPath $component
    New-Item -ItemType Directory -Force -Path $componentDir | Out-Null
    
    # Crear componente compartido
    $componentContent = @"
'use client';
import { useTranslation } from 'react-i18next';

export default function $component() {
  const { i18n } = useTranslation();
  const locale = i18n.language;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        {locale === 'en' ? '$titleEn' : '$titleEs'}
      </h1>
      <p className="text-lg">
        {locale === 'en' 
          ? 'Content for $titleEn'
          : 'Contenido para $titleEs'}
      </p>
    </main>
  );
}
"@
    
    $componentFile = Join-Path $componentDir "$component.js"
    Set-Content -Path $componentFile -Value $componentContent
    Write-Host "Created: $componentFile" -ForegroundColor Green
    
    # Crear página en inglés
    $enPageDir = Join-Path $basePath $enPath
    New-Item -ItemType Directory -Force -Path $enPageDir | Out-Null
    
    $enPageContent = @"
import $component from '@/app/components/$component/$component';

export async function generateMetadata() {
  return {
    title: '$titleEn',
    alternates: {
      canonical: '/en/$enPath',
      languages: {
        'en': '/en/$enPath',
        'es': '/es/$esPath',
      },
    },
  };
}

export default $component;
"@
    
    $enPageFile = Join-Path $enPageDir "page.js"
    Set-Content -Path $enPageFile -Value $enPageContent
    Write-Host "Created: $enPageFile" -ForegroundColor Green
    
    # Crear página en español
    $esPageDir = Join-Path $basePath $esPath
    New-Item -ItemType Directory -Force -Path $esPageDir | Out-Null
    
    $esPageContent = @"
import $component from '@/app/components/$component/$component';

export async function generateMetadata() {
  return {
    title: '$titleEs',
    alternates: {
      canonical: '/es/$esPath',
      languages: {
        'en': '/en/$enPath',
        'es': '/es/$esPath',
      },
    },
  };
}

export default $component;
"@
    
    $esPageFile = Join-Path $esPageDir "page.js"
    Set-Content -Path $esPageFile -Value $esPageContent
    Write-Host "Created: $esPageFile" -ForegroundColor Green
    
    Write-Host "✓ Completed route: $routeKey ($enPath / $esPath)" -ForegroundColor Cyan
    Write-Host ""
}

Write-Host "All pages created successfully!" -ForegroundColor Yellow
Write-Host "Remember to customize the content in each component!" -ForegroundColor Yellow
