# Directrices Generales del Proyecto DNGR

## 1. Visión General

### Descripción

El Sistema de Gestión de Recursos de la DNGR es una aplicación institucional diseñada para administrar eficientemente los recursos policiales, incluyendo personal, despliegues operativos, servicios especiales, generación de informes y seguimiento de actividades. Esta herramienta permite centralizar la información crítica operativa para facilitar la toma de decisiones al mando policial.

### Objetivos

- **Centralización de información**: Unificar los datos de recursos humanos y operativos en un solo sistema.
- **Optimización de gestión**: Facilitar la administración del personal, despliegues y recursos.
- **Seguimiento en tiempo real**: Proporcionar visibilidad actualizada sobre el estado y disponibilidad de recursos.
- **Generación de reportes**: Permitir la creación de informes detallados para análisis y toma de decisiones.
- **Mejora en planificación**: Optimizar la asignación de recursos según necesidades operativas.
- **Interfaz intuitiva**: Desarrollar una experiencia de usuario simple y eficiente adaptada a las necesidades institucionales.

### Usuarios

- Directores y mandos policiales
- Personal administrativo
- Oficiales de operaciones
- Analistas de recursos
- Personal encargado de planificación

### Dominio

Gestión de recursos policiales en el ámbito ministerial/gubernamental, con enfoque en operatividad, personal y recursos materiales.

## 2. Tecnología y Stack

> **NOTA IMPORTANTE:** La fase actual del proyecto se enfoca EXCLUSIVAMENTE en el desarrollo frontend con almacenamiento en caché local. No se implementará backend, base de datos ni pruebas automatizadas por el momento.

### Gestor de Paquetes

- **pnpm**: Gestor de paquetes principal para el proyecto, seleccionado por su eficiencia, velocidad y mejor manejo de dependencias

### Frontend (FASE ACTUAL)

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Lenguaje**: TypeScript
- **Renderizado**: Híbrido (SSR/CSR según necesidad)
- **UI/Componentes**: Componentes personalizados desarrollados por el equipo
- **Estilos**: Tailwind CSS con tema personalizado
- **Estado Global**: Context API + Zustand
- **Formularios**: React Hook Form + Zod para validaciones
- **Documentación**: Documentación en código mediante comentarios descriptivos

### Gestión de Datos (Fase Actual)

- Almacenamiento temporal: localStorage/sessionStorage
- Servicios simulados para operaciones CRUD
- Modelos de datos bien tipados con TypeScript
- Sin persistencia de datos más allá del almacenamiento local

### Fases Futuras (No incluidas en el alcance actual)

- **Testing**: Jest + Testing Library
- **Documentación**: Storybook para componentes
- **Backend**: API REST o GraphQL
- **Autenticación**: JWT
- **Base de datos**: Por definir en fase correspondiente

## 3. Estructura del Proyecto

```
/
├── public/                      # Assets estáticos
├── src/
│   ├── app/                     # App router de Next.js
│   │   ├── components/          # Componentes compartidos
│   │   ├── context/             # Contexto global
│   │   ├── hooks/               # Hooks compartidos
│   │   ├── utils/               # Utilidades
│   │   ├── styles/              # Estilos globales
│   │   ├── personal/            # Módulo de Personal
│   │   ├── despliegues/         # Módulo de Despliegues
│   │   └── [otros módulos]/     # Otros módulos del sistema
│   ├── lib/                     # Código reutilizable y configuraciones
│   ├── types/                   # Tipos globales
│   └── mock/                    # Datos de prueba
├── tasks/                       # Documentación de tareas y guías
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

### Estructura de Módulos

Cada módulo funcional (como personal, despliegues, etc.) sigue esta estructura:

```
/[módulo]/
├── components/                  # Componentes específicos del módulo
├── hooks/                       # Hooks específicos
├── context/                     # Contexto específico (si es necesario)
├── models/                      # Interfaces y tipos
├── utils/                       # Funciones utilitarias
├── styles/                      # Estilos específicos
└── page.tsx                     # Página principal
```

## 4. Principios de Diseño y Desarrollo

### Principios de Diseño UI/UX

- **Claridad**: Interfaces limpias y comprensibles
- **Consistencia**: Patrones de diseño unificados en toda la aplicación
- **Eficiencia**: Minimizar pasos para tareas frecuentes
- **Accesibilidad**: Cumplir con estándares WCAG AA
- **Responsive**: Funcionalidad completa en dispositivos de escritorio y adaptable a tablets
- **Institucional**: Respetar la identidad visual institucional

### Principios de Desarrollo

- **Componentes atómicos**: Diseño de componentes reutilizables y modulares
- **Separación de responsabilidades**: Distinguir claramente entre presentación, lógica y datos
- **Code splitting**: Cargar recursos según necesidad
- **Rendimiento**: Optimizar la carga inicial y la interactividad
- **Mantenibilidad**: Código legible, documentado y testeable
- **Seguridad**: Prácticas seguras incluso en fase de frontend

## 5. Funcionalidad Principal

### Módulos Iniciales

1. **Personal**

   - Gestión de información de oficiales/personal
   - Seguimiento de licencias, disponibilidad y regímenes de trabajo
   - Asignación a unidades y servicios

2. **Despliegues**

   - Planificación de operativos
   - Asignación de personal a despliegues
   - Seguimiento de estado y recursos

3. **Servicios Especiales (222)**

   - Gestión de servicios adicionales
   - Seguimiento de asignaciones y compensaciones

4. **Informes y Estadísticas**
   - Generación de reportes personalizables
   - Dashboard con KPIs relevantes
   - Exportación en formatos estándar

### Flujo de Usuario Típico

1. Ingreso al sistema (autenticación simulada en fase inicial)
2. Navegación entre módulos mediante menú principal
3. Operaciones CRUD en los diferentes módulos
4. Aplicación de filtros y búsquedas
5. Generación de informes y visualización de estadísticas

## 6. Convenciones y Estándares

### Directrices para Evitar Duplicación

> **REGLA CRÍTICA:** Antes de crear cualquier archivo, componente o fragmento de código, SIEMPRE verificar que no exista ya una implementación similar o idéntica en el proyecto.

- **Verificación previa**: Revisar exhaustivamente el proyecto en busca de implementaciones existentes
- **Abstracción**: Priorizar la abstracción y reutilización de componentes existentes
- **Refactorización**: Si un componente puede ser generalizado para múltiples usos, refactorizar en lugar de duplicar
- **Documentación**: Mantener un inventario actualizado de componentes reutilizables
- **Naming consistente**: Usar nombres descriptivos y consistentes para facilitar la búsqueda

### Convenciones de Código

- **Naming**: camelCase para variables/funciones, PascalCase para componentes/interfaces
- **Componentes**: Preferentemente funcionales con hooks
- **Tipado**: Uso exhaustivo de TypeScript, evitar "any"
- **Importaciones**: Ordenadas y agrupadas (React, luego externos, luego internos)
- **Comentarios**: Documentar funciones complejas, hooks personalizados y lógica de negocio

### Control de Calidad

- **Linting**: ESLint con configuración estricta
- **Formatting**: Prettier
- **Testing**: Componentes críticos y lógica de negocio
- **Code Review**: Requerido para PRs

## 7. Roadmap y Fases

> **NOTA IMPORTANTE:** El proyecto actual se centra SOLO en el desarrollo frontend. Las fases relacionadas con backend, pruebas y otros elementos están fuera del alcance actual.

### Fase 1: Desarrollo Frontend Inicial (ACTUAL)

- Desarrollo de la estructura base con Next.js
- Implementación de UI/UX y componentes clave
- Configuración de almacenamiento en caché local
- Mock data y servicios simulados

### Fase 2: Módulos Adicionales Frontend (ACTUAL)

- Implementación del resto de módulos principales
- Refinamiento de componentes compartidos
- Mejoras en UX basadas en feedback

### Fases Futuras (FUERA DEL ALCANCE ACTUAL)

- Implementación de tests automatizados
- Desarrollo de API y servicios reales
- Integración con base de datos
- Implementación de autenticación y seguridad

## 8. Seguridad y Privacidad

Aunque el enfoque inicial es solo frontend, se deben considerar desde el inicio:

- Protección de datos sensibles incluso en almacenamiento local
- Diseño pensando en futuras implementaciones de roles y permisos
- Validación robusta de inputs para prevenir vulnerabilidades
- Manejo seguro de sesiones/tokens en el futuro

## 9. Métricas de Éxito

> **NOTA:** Estas métricas se enfocan exclusivamente en el frontend para la fase actual.

- **Funcionalidad**: Implementación completa de los requerimientos de UI y experiencia de usuario
- **Usabilidad**: Facilidad de uso por parte de los usuarios objetivo
- **Rendimiento**: Tiempos de carga y respuesta optimizados en el frontend
- **Escalabilidad**: Facilidad para agregar nuevos módulos en la interfaz
- **Mantenibilidad**: Facilidad para realizar cambios y mejoras en componentes y flujos

## 10. Consideraciones Adicionales

- **Multiidioma**: Estructurar pensando en posible internacionalización futura
- **Modo Offline**: Evaluar capacidades offline para operaciones críticas
- **Integraciones**: Considerar futuras integraciones con otros sistemas institucionales
- **Escalabilidad**: Diseñar pensando en crecimiento de usuarios y datos
