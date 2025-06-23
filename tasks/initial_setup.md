# Configuración Inicial - Next.js

## Descripción General

Este documento describe las tareas iniciales para configurar el proyecto de reconstrucción del sistema de gestión de recursos de la DNGR, enfocado exclusivamente en el frontend utilizando Next.js.

## Tareas de Configuración

### 1. Estructura del Proyecto

- [x] Crear proyecto Next.js con TypeScript
  ```bash
  npx create-next-app@latest gestion-dngr-next --typescript
  ```
- [x] Organizar estructura de carpetas:

  ```
  /src
    /app                    # App router de Next.js
      /components           # Componentes compartidos
      /hooks                # Hooks compartidos
      /context              # Contextos globales
      /utils                # Funciones utilitarias
      /styles               # Estilos globales
      /(routes)             # Rutas de la aplicación
        /personal           # Módulo de Personal
        /despliegues        # Módulo de Despliegues
        ...
    /types                  # Tipos y interfaces globales
    /lib                    # Librerías y configuraciones
    /mock                   # Datos de prueba
  ```

  > **Nota:** Estructura completada el 22/06/2025. Se utilizó la carpeta `/mock` a nivel de src en lugar de public.

### 2. Configuración de Estilos

- [x] Implementar sistema de estilos (se sugiere Tailwind CSS):
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
- [x] Crear tema personalizado para la aplicación:
  ```
  /src/app/styles/theme.css      # Definiciones de colores, tipografía, etc.
  ```
- [x] Definir variables CSS globales:
  ```css
  :root {
    --color-primary: #1a56db;
    --color-secondary: #1e429f;
    --color-accent: #4f46e5;
    --color-success: #046c4e;
    --color-danger: #c81e1e;
    --color-warning: #f59e0b;
    --color-info: #2563eb;
    --color-background: #f9fafb;
    --color-text: #111827;
    --color-text-light: #6b7280;
    --font-family: 'Inter', system-ui, sans-serif;
  }
  ```
- [x] Crear reset CSS para normalizar estilos entre navegadores

  > **Nota:** Configuración de estilos completada el 22/06/2025. Se creó el archivo `tailwind.config.js` con tema personalizado y `theme.css` con variables CSS.

### 3. Instalación de Dependencias Principales

- [x] Componentes UI y utilidades:
  ```bash
  # Utilidades (INSTALADAS)
  pnpm install zustand              # Gestión de estado
  pnpm install react-hook-form      # Manejo de formularios
  pnpm install zod                  # Validación de esquemas
  pnpm install date-fns             # Manipulación de fechas
  pnpm install uuid                 # Generación de IDs únicos
  ```
- [x] Librerías adicionales para exportación:

  ```bash
  # Exportación y documentos
  pnpm install xlsx                 # Exportación a Excel
  pnpm install jspdf                # Generación de PDFs
  pnpm install jspdf-autotable      # Tablas avanzadas en PDFs
  ```

- [ ] Opciones de librerías UI (decisión: crear componentes personalizados):

  ```bash
  # Opciones consideradas pero no instaladas
  # pnpm install @radix-ui/react    # Si se desea mantener Radix
  # pnpm install @headlessui/react  # Headless UI components
  # pnpm install shadcn-ui          # Componentes minimalistas
  ```

  > **Nota:** Se decidió utilizar pnpm como gestor de paquetes por su eficiencia y velocidad. Dependencias principales instaladas el 22/06/2025. Librerías para exportación (xlsx, jspdf y jspdf-autotable) instaladas el 23/06/2025.

### 4. Configuración de Linters y Formatters

- [x] Configurar ESLint:

  ```bash
  pnpm install -D eslint eslint-config-next @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react eslint-plugin-react-hooks
  ```

- [x] Crear archivo de configuración ESLint (`.eslintrc.js`):

  ```javascript
  module.exports = {
    root: true,
    // ... configuración completa con reglas para TypeScript y React
  };
  ```

- [x] Crear archivo de ignorado para ESLint (`.eslintignore`):

  ```
  # Build outputs
  .next/**/*
  out/**/*
  # ... otros patrones de archivos a ignorar
  ```

- [x] Configurar Prettier:

  ```bash
  pnpm install -D prettier eslint-plugin-prettier eslint-config-prettier
  ```

- [x] Crear archivo de configuración Prettier (`.prettierrc.js`):

  ```javascript
  module.exports = {
    semi: true,
    trailingComma: 'es5',
    singleQuote: true,
    // ... otras opciones de formato
  };
  ```

- [x] Crear archivo de ignorado para Prettier (`.prettierignore`):

  ```
  # Build outputs
  .next/**/*
  out/**/*
  # ... otros patrones de archivos a ignorar
  ```

- [x] Configurar scripts en package.json para validación y formato:

  ```json
  {
    "scripts": {
      "lint": "next lint",
      "lint:fix": "next lint --fix",
      "format": "prettier --write .",
      "check-format": "prettier --check .",
      "check-types": "tsc --noEmit",
      "validate": "tsc --noEmit && prettier --check . && next lint",
      "fix-all": "prettier --write . && next lint --fix"
    }
  }
  ```

  > **Nota:** Configuración completada el 23/06/2025. Se crearon archivos `.eslintrc.js`, `.eslintignore`, `.prettierrc.js` y `.prettierignore`. Se configuraron scripts unificados para validación de tipos, formato y lint.
  > npm install -D prettier eslint-config-prettier eslint-plugin-prettier

  ```

  ```

- [ ] Crear archivos de configuración:
  ```
  .eslintrc.js
  .prettierrc.js
  ```

### 5. Configuración del Estado Global

- [ ] Implementar Context API para:
  - [ ] Autenticación (mock inicial)
  - [ ] Gestión de temas/preferencias
  - [ ] Notificaciones/mensajes del sistema

### 6. Componentes Base Compartidos

- [ ] Diseñar e implementar componentes base:
  - [ ] Botones (primario, secundario, peligro)
  - [ ] Inputs y controles de formulario
  - [ ] Tablas y componentes de datos
  - [ ] Componentes de navegación (navbar, sidebar)
  - [ ] Componentes de layouts y contenedores
  - [ ] Modales y diálogos
  - [ ] Componentes de notificación

### 7. Configuración de Mock Data

- [x] Crear estructura para datos de prueba:
  ```
  /src/app/mock
    /personal.ts    # Pendiente de crear
    /despliegues.ts # Pendiente de crear
    ...
  ```
- [ ] Configurar servicio local para simular API

  > **Nota:** La estructura de carpetas para datos de prueba fue creada el 22/06/2025 en /src/app/mock.

### 8. Configuración de Rutas

- [ ] Implementar sistema de rutas usando App Router de Next.js
- [ ] Configurar layouts por sección
- [ ] Configurar middleware para autenticación (mock)

### 9. Configuración de Tests

- [ ] Configurar Jest y Testing Library:
  ```bash
  npm install -D jest @testing-library/react @testing-library/jest-dom
  ```
- [ ] Crear tests para componentes base

### 10. Documentación del Frontend

- [ ] Configurar Storybook para documentar componentes:
  ```bash
  npx storybook init
  ```
- [ ] Crear documentación de convenciones y patrones

## Notas

- El enfoque inicial es solo frontend, sin implementación de backend
- Asegurarse de que la estructura sea escalable para futuras integraciones
- Mantener consistencia en nombrado y estructura de archivos
- Priorizar componentes reutilizables
- Incluir comentarios en componentes y funciones clave
