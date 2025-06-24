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
- **CSS Variables y Sistema de Diseño Propio**: Sistema CSS puro sin dependencias
- **Zustand**: Gestión de estado
- **React Hook Form + Zod**: Manejo y validación de formularios

## Documentación del Proyecto

Este proyecto cuenta con la siguiente documentación detallada para desarrolladores:

- [CODE_STANDARDS.md](./docs/CODE_STANDARDS.md) - Estándares de código y límites estrictos
- [MODULARIZATION_GUIDE.md](./docs/MODULARIZATION_GUIDE.md) - Guía para modularización correcta
- [COMPONENT_CATALOG.md](./docs/COMPONENT_CATALOG.md) - Inventario de componentes reutilizables
- [DEVELOPMENT_WORKFLOW.md](./docs/DEVELOPMENT_WORKFLOW.md) - Flujo completo de desarrollo
- [COMMON_PROBLEMS_SOLUTIONS.md](./docs/COMMON_PROBLEMS_SOLUTIONS.md) - Soluciones a problemas comunes

## Proceso de Verificación Pre-Desarrollo

Antes de crear cualquier nuevo componente, servicio o funcionalidad, cada desarrollador DEBE realizarse estas preguntas:

1. **¿Existe algo similar ya implementado?**
   - Verificar en el catálogo de componentes (`docs/COMPONENT_CATALOG.md`)
   - Revisar directorios de componentes compartidos (`/src/app/components/`)
   - Buscar implementaciones similares en módulos existentes

2. **¿Dónde debe ubicarse según la estructura del proyecto?**
   - Determinar si debe ser un componente compartido o específico de módulo
   - Seguir estrictamente la estructura de carpetas establecida
   - Ubicar en función de su reutilización potencial, no por conveniencia

3. **¿Cómo hacerlo suficientemente modular?**
   - Planificar la separación de responsabilidades antes de codificar
   - Identificar potenciales submódulos para evitar componentes monolíticos
   - Diseñar interfaces claras entre componentes
   - Considerar casos futuros de uso y extensión

## Límites Estrictos de Código

El proyecto establece los siguientes límites OBLIGATORIOS:

| Elemento                 | Límite Máximo | Acción si se excede                        |
| ------------------------ | ------------- | ------------------------------------------ |
| Archivos de componentes  | 300 líneas    | Refactorizar en múltiples componentes      |
| Funciones/métodos        | 30 líneas     | Extraer en helpers o subcomponentes        |
| Props de componente      | 10 props      | Usar composición o context                 |
| Nivel de anidamiento JSX | 3 niveles     | Extraer en componentes más pequeños        |
| Dependencias importadas  | 15 imports    | Revisar organización y posible duplicación |

**CRÍTICO:** Los revisores de código DEBEN rechazar cualquier PR que viole estos límites sin justificación documentada.
