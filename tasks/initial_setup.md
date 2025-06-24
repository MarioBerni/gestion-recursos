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

- [x] Implementar sistema de estilos:
  ```
  /src/app/styles/theme.css      # Definiciones de variables CSS (colores, tipografía, etc.)
  /src/app/globals.css           # Estilos globales y utilidades
  ```
- [x] Crear tema personalizado institucional para la aplicación con variables CSS para:
  - Colores primarios (azul marino institucional)
  - Colores secundarios (gris oxford formal)
  - Acentos (dorado ceremonial)
  - Rojo institucional para elementos oficiales
  - Elementos institucionales (bordes, sellos, etc.)
  - Variables RGB para efectos visuales con transparencia

  > **Actualización (2025-06-24)**: Se implementó un tema claro como estándar visual de la aplicación. Se actualizaron las variables CSS en theme.css para incluir versiones RGB de todos los colores para efectos de transparencia. Se refactorizó el formulario de inicio de sesión para mostrar el logo institucional como una marca de agua con un efecto de degradado.

- [x] Implementar sistema de clases de utilidad en CSS puro:
  - Flexbox y Grid
  - Espaciado consistente
  - Tipografía y colores
  - Bordes y sombras

- [x] Crear reset CSS para normalizar estilos entre navegadores

  > **Nota:** Configuración de estilos completada y refinada el 23/06/2025. Se actualizaron los archivos `theme.css` con variables CSS institucionales y `globals.css` con estilos y utilidades. La paleta de colores fue optimizada para mejor contraste visual.

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

- [x] Implementación de componentes UI custom:

  Se han creado los siguientes componentes base con CSS puro:
  - `Button.tsx` y `button.css` - Botones estilizados con variantes (primary, secondary, danger, outline, ghost)
  - `Input.tsx` y `input.css` - Campos de entrada con soporte para label, error, iconos y variantes
  - `Card.tsx` y `card.css` - Contenedores estilizados con variantes institucionales

  > **Nota:** Los componentes UI fueron implementados el 23/06/2025 siguiendo el diseño institucional formal.

- [ ] Opciones de librerías UI (decisión: crear componentes personalizados):

  ```bash
  # Opciones consideradas pero no instaladas
  # pnpm install @radix-ui/react    # Si se desea mantener Radix
  # pnpm install @headlessui/react  # Headless UI components
  # pnpm install shadcn-ui          # Componentes minimalistas
  ```

  > **Nota:** Se decidió utilizar pnpm como gestor de paquetes por su eficiencia y velocidad. Dependencias principales instaladas el 22/06/2025. Librerías para exportación (xlsx, jspdf y jspdf-autotable) instaladas el 23/06/2025.

### 4. Estructura de Páginas y Componentes

- [x] Crear estructura base de páginas:
  - [x] Página de inicio de sesión (`/login`)
    - Implementación con ruta en `/login`
    - Componente `LoginForm` con validación de campos
    - Estilos CSS personalizados en `login.css`
    - Redirección automática desde ruta raíz (`/`) a `/login`
  - [ ] Dashboard (`/dashboard`)
  - [ ] Layout global con menú lateral

  > **Nota:** Página de login completada el 23/06/2025 con diseño institucional optimizado y contraste adecuado.

- [ ] Implementar componentes reutilizables:
  - Componentes de navegación (menú principal, breadcrumbs)
  - Tablas de datos con ordenación y filtrado
  - Formularios con validación
  - Componentes modales y drawers

### 5. Configuración de Linters y Formatters

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

- [x] Diseñar e implementar componentes base:
  - [x] Botones (primario, secundario, peligro)
  - [x] Inputs y controles de formulario
  - [ ] Tablas y componentes de datos
  - [ ] Componentes de navegación (navbar, sidebar)
  - [ ] Componentes de layouts y contenedores
  - [ ] Modales y diálogos
  - [ ] Componentes de notificación
  
  > **Actualización (2025-06-24)**: Se implementaron componentes de Button e Input con estilos adaptados al tema claro y soporte para diferentes variantes. Los componentes utilizan variables RGB para efectos de foco y estado.

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
