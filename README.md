# 🚀 Trakos - Sitio Web Corporativo

**Trakos LLC** - Sitio web corporativo desarrollado con **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)** para la aplicación de gestión operativa potenciada por inteligencia artificial.

## 📍 Información de la Empresa

**Trakos LLC**  
*"La Inteligencia Operativa que Transforma tu Gestión Diaria"*

📧 **Contacto**: info@trakos.net  
🏢 **Sede**: 701 Brickell Avenue, Suite 1500, Miami, FL 33131, Estados Unidos  
👨‍💼 **CEO**: Wilfredo Pari, MBA

## 🎯 Sobre el Producto

Trakos es una aplicación multiplataforma potenciada por inteligencia artificial diseñada para ser el compañero indispensable en la gestión operativa diaria. Proporciona el pulso exacto del avance de cada tarea, el rendimiento de cada colaborador y la eficiencia de cada equipo.

### Características Principales:
- 📊 **Reportes Automáticos** de desempeño y productividad
- 🎯 **Anticipación Inteligente** para decisiones estratégicas  
- ⚡ **Datos en Tiempo Real** desde el campo
- 📱 **Acceso Multiplataforma** (móvil y web)

### Industrias Objetivo:
- 🏗 **Construcción Civil** - Control de avance físico y recursos
- 🔩 **Minería y Metalurgia** - KPIs de extracción y recuperación
- 🏭 **Manufactura y Producción** - Trazabilidad operativa
- 🛒 **Comercio y Retail** - Análisis de conversión y ventas
- 🚚 **Logística y Distribución** - Control de rutas y entregas
- 🚜 **Agroindustria** - Gestión por lote y hectárea

## 💰 Precios

**Plan Estándar**: $37.00/año (Oferta de Lanzamiento)
- 👥 Hasta 100 usuarios
- 🤖 1,000 créditos AI anuales (recargables)
- 📄 Reportes PDF incluidos
- 💰 Solo el administrador paga, trabajadores gratis

## 🌐 Características Técnicas del Sitio

- ✅ **Production-ready** scores en **PageSpeed Insights**
- ✅ Integración con **Tailwind CSS** soportando **Dark mode**
- ✅ **SEO optimizado** con **Open Graph tags** para redes sociales
- ✅ **Optimización de imágenes** usando **Astro Assets**
- ✅ Generación automática de **sitemap**
- ✅ **Analytics** integrado
- ✅ Diseño **responsive** y **mobile-first**

## 🎥 Demo

📌 **Video Demo**: [https://www.youtube.com/watch?v=n43D8uk_SLw](https://www.youtube.com/watch?v=n43D8uk_SLw)

## 🚀 ¿Cómo Funciona Trakos?

### Proceso en 4 Pasos:

1. **🔐 El Administrador Crea su Cuenta**  
   Descarga la app, configura tu proyecto y registra a tu equipo

2. **📋 Planificas Tareas y Objetivos**  
   Asigna metas diarias por trabajador usando tus propias unidades

3. **📱 Tu Equipo Reporta Desde el Campo**  
   Los usuarios registran objetivos, fotos y comentarios en tiempo real

4. **📊 Trakos Genera tus Reportes**  
   Recibe análisis automáticos con IA mostrando avance y áreas de mejora

<br>

## 📞 Contacto

📧 **Email**: info@trakos.net  
⚖️ **Legal**: legal@trakos.net  
🔒 **Privacidad**: privacy@trakos.net  
📞 **Teléfono**: +1 305 555 5555

## 🌐 Redes Sociales

- LinkedIn
- Facebook  
- Instagram
- TikTok
- YouTube
- WhatsApp
- Telegram

<details open>
<summary>📋 Tabla de Contenidos</summary>

- [Información de la Empresa](#-información-de-la-empresa)
- [Sobre el Producto](#-sobre-el-producto)
- [Precios](#-precios)
- [Demo](#-demo)
- [¿Cómo Funciona Trakos?](#-cómo-funciona-trakos)
- [Instalación](#-instalación-y-desarrollo)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Comandos](#comandos)
- [Configuración](#configuración)
- [Deploy](#deploy)
- [Contacto](#-contacto)
- [Licencia](#licencia)

</details>

## 🚀 Instalación y Desarrollo

Este sitio web corporativo de **Trakos** está desarrollado usando **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**. El template se enfoca en simplicidad, buenas prácticas y alto rendimiento.

Se utiliza muy poco JavaScript vanilla, solo para funcionalidad básica, permitiendo que cada desarrollador decida qué framework usar (React, Vue, Svelte, Solid JS...).

Esta versión soporta todas las opciones de configuración de `output`: `static`, `hybrid` y `server`, pero el blog solo funciona con `prerender = true`.

### Estructura del Proyecto

Dentro del proyecto **Trakos**, encontrarás las siguientes carpetas y archivos:

```
/
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── content/
│   │   ├── post/
│   │   │   ├── post-slug-1.md
│   │   │   ├── post-slug-2.mdx
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.yaml
│   └── navigation.js
├── package.json
├── astro.config.ts
└── ...
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

En `src/components/` colocamos todos los componentes de Astro/React/Vue/Svelte/Preact.

Los assets estáticos, como imágenes, se pueden colocar en el directorio `public/` si no requieren transformación o en el directorio `assets/` si se importan directamente.

> 💼 **¿Desarrollador experimentado?** Actualiza `src/config.yaml` con la configuración de Trakos y personaliza el contenido según las necesidades corporativas.

<br>

### Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, en una terminal:

| Comando             | Acción                                              |
| :------------------ | :-------------------------------------------------- |
| `npm install`       | Instala las dependencias                           |
| `npm run dev`       | Inicia el servidor local en `localhost:4321`       |
| `npm run build`     | Construye el sitio para producción en `./dist/`    |
| `npm run preview`   | Previsualiza la build localmente antes del deploy  |
| `npm run check`     | Verifica el proyecto en busca de errores           |
| `npm run fix`       | Ejecuta Eslint y formatea código con Prettier      |
| `npm run astro ...` | Ejecuta comandos CLI como `astro add`, `astro preview` |

<br>

### Configuración

Archivo de configuración principal: `./src/config.yaml`

```yaml
site:
  name: 'Trakos'
  site: 'https://trakos.net'
  base: '/' 
  trailingSlash: false

  googleSiteVerificationId: false # Agregar valor cuando esté disponible

# Metadata SEO por defecto
metadata:
  title:
    default: 'Trakos - Inteligencia Operativa'
    template: '%s — Trakos'
  description: 'La aplicación de gestión operativa potenciada por IA que transforma tu gestión diaria. Datos en tiempo real desde el campo.'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Trakos'
    images:
      - url: '~/assets/images/trakos-og.png'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@trakos_app'
    site: '@trakos_app'
    cardType: summary_large_image

i18n:
  language: es
  textDirection: ltr

apps:
  blog:
    isEnabled: true
    postsPerPage: 6

    post:
      isEnabled: true
      permalink: '/blog/%slug%'
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog'
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'categoria'
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag'
      robots:
        index: false

    isRelatedPostsEnabled: true
    relatedPostsCount: 4

analytics:
  vendors:
    googleAnalytics:
      id: null # Agregar ID de Google Analytics

ui:
  theme: 'system' # "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

#### Personalizar Diseño

Para personalizar fuentes, colores o más elementos, consulta los siguientes archivos:

- `src/components/CustomStyles.astro`
- `src/components/TrakosColors.astro`
- `src/assets/styles/tailwind.css`

#### Colores de Marca Trakos

```css
:root {
  --primary-blue: #1E88E5;
  --secondary-blue: #42A5F5;
  --accent-yellow: #FFD700;
  --text-dark: #333333;
  --text-light: #666666;
  --background-light: #F8F9FA;
  --white: #FFFFFF;
}
```

### Deploy

#### Deploy a producción (manual)

Puedes crear una build optimizada para producción con:

```shell
npm run build
```

Ahora tu sitio web está listo para ser deployado. Todos los archivos generados se encuentran en la carpeta `dist`, la cual puedes deployar a cualquier servicio de hosting que prefieras.

#### Deploy a Netlify

Clona este repositorio en tu cuenta de GitHub y deployalo a Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/trakos/landing-page)

#### Deploy a Vercel

Clona este repositorio en tu cuenta de GitHub y deploya a Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/trakos/landing-page)

<br>

## 💡 Mensaje del CEO

> *"En el dinámico mundo de las operaciones, no hay espacio para la intuición. En proyectos donde cada decisión es crítica, lo que no se mide, simplemente no puede mejorarse.*
> 
> *Trakos nació de una profunda comprensión de esta necesidad: cerrar el vacío de información que frena la productividad. Nuestra promesa es simple: entregarte reportes precisos y oportunos que reflejen la realidad de tus operaciones.*
> 
> *Porque estamos convencidos de que solo con datos auténticos y en tiempo real se pueden tomar decisiones que verdaderamente generen valor y aseguren el éxito."*
> 
> **— Wilfredo Pari, MBA - CEO**

<br>

## 🏗 Contribuciones

Si tienes ideas, sugerencias o encuentras bugs, siéntete libre de abrir una discusión, un issue o crear un pull request. Esto sería muy útil para todos nosotros y estaríamos encantados de escuchar y tomar acción.

## 📄 Páginas Legales

- [Términos y Condiciones](./terms.md) - Última actualización: 03 de julio del 2025
- [Política de Privacidad](./privacy.md) - Última actualización: 05 de julio de 2025
- Libro de Reclamaciones (Solo para Perú)

## 🙏 Agradecimientos

Desarrollado originalmente usando el template [AstroWind](https://github.com/onwidget/astrowind) y personalizado para las necesidades corporativas de Trakos LLC.

## Licencia

Este proyecto está basado en **AstroWind** que está licenciado bajo la licencia MIT — ver el archivo [LICENSE](./LICENSE.md) para más detalles.

---

**Trakos LLC** - Registrada en Estados Unidos  
*Jurisdicción: Estado de Florida, EE.UU.*  
*Datos procesados bajo estándares internacionales*
