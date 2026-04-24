# Minea Company

## Identificación y Estado

Minea Company es un sitio web corporativo diseñado para mostrar productos, gestionar contactos y ofrecer una experiencia de usuario profesional para clientes y equipos comerciales. Está enfocado a una audiencia empresarial que necesita una presencia digital moderna, accesible y fácil de administrar.

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel&logoColor=white)](https://minea05-company.vercel.app/)

## Acceso Directo (Demo)

- Enlace en vivo: https://minea05-company.vercel.app/

> El proyecto ya está desplegado en Vercel y accesible directamente sin necesidad de descargar el código.

---

## Funcionalidades

- UX responsivo: diseño móvil-first que se adapta a cualquier pantalla.
- Modo oscuro/claro: soporte visual moderno para mejorar la lectura y experiencia del usuario.
- SEO optimizado: estructura de contenido y metaetiquetas pensadas para mejorar el posicionamiento.
- Formulario operativo: contactos y solicitudes que están listos para integrarse con backend o servicios de correo.
- Gestión de contenidos con MDX/Blog: permite publicar y editar contenido dinámico y entradas de blog con formato enriquecido.

---

## Stack Tecnológico

La aplicación utiliza una arquitectura moderna basada en:

- Next.js 14 para la lógica de la aplicación y el enrutado.
- Tailwind CSS para el diseño rápido, consistente y responsive.
- Vercel para el despliegue continuo y la entrega del sitio en producción.

---

## Guía de Configuración Local

### Requisitos

- Node.js 18.x o superior
- npm 9.x o superior

### Instalación

```sh
# Clona el repositorio
git clone <https://github.com/ZeroFuann-FS/Minea05Company.git>
cd Minea

# Instala dependencias
npm install

# Ejecuta el servidor de desarrollo
npm run dev
```

---

## Arquitectura del Código

El proyecto sigue un estándar de organización similar a Next.js App Router, separando claramente las capas de la aplicación:

- `/app` o `/src/app`: rutas y páginas principales.
- `/components`: componentes de interfaz reutilizables y elementos UI.
- `/lib`: lógica de apoyo, helpers y funciones compartidas.
- `/content` o `/data`: contenidos, entradas de blog y archivos MDX.
- `/public`: recursos estáticos como imágenes y archivos descargables.

Esta estructura ayuda a mantener el proyecto escalable y fácil de mantener, con lógica separada del diseño y del contenido.

---

## Despliegue (DevOps)

El flujo de trabajo se basa en Integración Continua (CI). Cada vez que se suben cambios a `main`, Vercel reconstruye y despliega automáticamente el sitio.

- `main` = producción estable
- Pull requests en ramas feature se prueban antes de fusionar
- Vercel actualiza el sitio en cada merge a `main`

---

> Aunque la página fue vendida originalmente, se cuenta con permiso para usarla libremente y compartir el código bajo los términos de esta licencia.
