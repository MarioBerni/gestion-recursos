# Sistema de Gestión de Recursos DNGR

Este es un sistema institucional diseñado para administrar eficientemente los recursos policiales, incluyendo personal, despliegues operativos, servicios especiales, generación de informes y seguimiento de actividades. El proyecto está desarrollado con [Next.js 14](https://nextjs.org).

## Requisitos Previos

- Node.js 18.x o superior
- pnpm (gestor de paquetes recomendado)

## Instalación

```bash
# Instalar dependencias usando pnpm
pnpm install
```

## Desarrollo

Ejecutar el servidor de desarrollo:

```bash
# Utilizar pnpm (recomendado)
pnpm dev

# Alternativas
npm run dev
yarn dev
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Estructura del Proyecto

```
/src
  /app                    # App router de Next.js
    /components           # Componentes compartidos
    /hooks                # Hooks compartidos
    /context              # Contextos globales
    /utils                # Funciones utilitarias
    /styles               # Estilos globales
    /personal             # Módulo de Personal
    /despliegues          # Módulo de Despliegues
    /mock                 # Datos de prueba
  /types                  # Tipos y interfaces globales
  /lib                    # Librerías y configuraciones
```

## Gestor de Paquetes

Este proyecto utiliza [pnpm](https://pnpm.io/) como gestor de paquetes por su eficiencia en almacenamiento, velocidad y mejor manejo de dependencias.

```bash
# Comandos comunes con pnpm
pnpm install           # Instalar dependencias
pnpm add <paquete>     # Añadir una nueva dependencia
pnpm remove <paquete>  # Eliminar una dependencia
pnpm run <script>      # Ejecutar un script del package.json
```

## Tecnologías Principales

- **Next.js 14**: Framework React con SSR/CSR
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Utilidades CSS
- **Zustand**: Gestión de estado
- **React Hook Form + Zod**: Manejo y validación de formularios
