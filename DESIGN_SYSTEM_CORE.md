# 🎨 DNGR: Sistema de Diseño Core

> **Actualización (2025-06-24)**: Se ha implementado un tema claro como estándar visual de la aplicación. Las interfaces ahora utilizan fondos claros con texto oscuro para mejorar la legibilidad y reducir la fatiga visual.

## 1. Variables CSS Globales

Todas las propiedades visuales deben usar estas variables en lugar de valores directos. Cada color tiene su versión en componentes RGB para efectos de transparencia con `rgba()`.

### Colores

```css
/* Colores primarios - Institucionales */
--color-primary-50: #e6f0f9;
--color-primary-50-rgb: 230, 240, 249;
--color-primary-100: #cce0f3;
--color-primary-100-rgb: 204, 224, 243;
--color-primary-200: #99c2e7;
--color-primary-200-rgb: 153, 194, 231;
--color-primary-300: #66a3db;
--color-primary-300-rgb: 102, 163, 219;
--color-primary-400: #3385cf;
--color-primary-400-rgb: 51, 133, 207;
--color-primary-500: #0066c3;
--color-primary-500-rgb: 0, 102, 195;
--color-primary-600: #0052a3;
--color-primary-600-rgb: 0, 82, 163;
--color-primary-700: #003d82;
--color-primary-700-rgb: 0, 61, 130;
--color-primary-800: #002961;
--color-primary-800-rgb: 0, 41, 97;
--color-primary-900: #001441;
--color-primary-900-rgb: 0, 20, 65;

/* Semánticos */
--color-success: #10b981;
--color-success-rgb: 16, 185, 129;
--color-warning: #f59e0b;
--color-warning-rgb: 245, 158, 11;
--color-error: #ef4444;
--color-error-rgb: 239, 68, 68;
--color-info: #3b82f6;
--color-info-rgb: 59, 130, 246;

/* Fondos y textos (tema claro) */
--color-bg-primary: #ffffff;
--color-bg-primary-rgb: 255, 255, 255;
--color-bg-secondary: #f9fafb;
--color-bg-secondary-rgb: 249, 250, 251;
--color-text-primary: #111827;
--color-text-primary-rgb: 17, 24, 39;
--color-text-secondary: #4b5563;
--color-text-secondary-rgb: 75, 85, 99;
--color-text-inverse: #f9fafb;
--color-text-inverse-rgb: 249, 250, 251;
```

### Espaciado y Tipografía

```css
/* Familia tipográfica */
--font-family-sans: 'Geist', system-ui, sans-serif;
--font-family-mono: ui-monospace, SFMono-Regular, monospace;

/* Tamaños de fuente */
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 1.875rem;
--font-size-4xl: 2.25rem;

/* Espaciados clave */
--spacing-2: 0.5rem;
--spacing-4: 1rem;
--spacing-6: 1.5rem;
--spacing-8: 2rem;
--spacing-12: 3rem;
--spacing-16: 4rem;
```

### Bordes, Sombras y Transiciones

```css
/* Radios de borde */
--border-radius-sm: 0.125rem;
--border-radius-md: 0.25rem;
--border-radius-lg: 0.5rem;
--border-radius-xl: 0.75rem;
--border-radius-full: 9999px;

/* Sombras */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

/* Transiciones */
--transition-duration-150: 150ms;
--transition-duration-300: 300ms;
```

## 2. Componentes UI Básicos

### Botones

| Componente | Ubicación | Props Principales |
|------------|-----------|-------------------|
| Button | `@/app/components/ui/Button.tsx` | `variant`, `size`, `color`, `onClick` |

```tsx
// Uso correcto
<Button 
  variant="primary" 
  size="md" 
  onClick={handleAction}
>
  Guardar Cambios
</Button>

// Variantes: "primary", "secondary", "outline", "ghost", "danger"
// Tamaños: "sm", "md", "lg", "xl"
```

### Inputs y Forms

| Componente | Ubicación | Props Principales |
|------------|-----------|-------------------|
| Input | `@/app/components/ui/Input.tsx` | `type`, `placeholder`, `error`, `onChange` |
| Select | `@/app/components/ui/Select.tsx` | `options`, `value`, `onChange` |
| FormField | `@/app/components/forms/FormField.tsx` | `name`, `label`, `children` |

```tsx
// Ejemplo de uso en formulario
<FormField name="email" label="Correo electrónico">
  <Input 
    type="email" 
    placeholder="ejemplo@dominio.com" 
    error={errors.email} 
    onChange={handleChange} 
  />
</FormField>
```

### Cards y Contenedores

| Componente | Ubicación | Props Principales |
|------------|-----------|-------------------|
| Card | `@/app/components/ui/Card.tsx` | `children`, `variant` |
| Alert | `@/app/components/ui/Alert.tsx` | `message`, `type` |
| Modal | `@/app/components/ui/Modal.tsx` | `isOpen`, `onClose`, `children` |

```tsx
// Ejemplo de Card
<Card variant="bordered">
  <h3>Título de la Tarjeta</h3>
  <p>Contenido de la tarjeta...</p>
</Card>

// Tipos de Alert: "info", "success", "warning", "error"
<Alert message="Operación completada con éxito" type="success" />
```

## 3. Layouts y Sistema de Grid

### Componentes de Layout

| Componente | Ubicación | Propósito |
|------------|-----------|-----------|
| MainLayout | `@/app/components/layouts/MainLayout.tsx` | Layout principal con sidebar y header |
| DashboardLayout | `@/app/components/layouts/DashboardLayout.tsx` | Layout para páginas de dashboard |
| PageContainer | `@/app/components/layouts/PageContainer.tsx` | Contenedor con padding estándar |

```tsx
// Estructura básica de página
<MainLayout>
  <PageContainer title="Dashboard de Personal">
    {/* Contenido de la página */}
  </PageContainer>
</MainLayout>
```

### Sistema Grid Responsive

```tsx
<div className="grid-container">
  <div className="col-full md-col-half lg-col-third">
    {/* Contenido que ocupa ancho completo en móvil,
        mitad en tablet y un tercio en desktop */}
  </div>
</div>
```

## 4. Feedback y Estados

### Componentes de Estado

| Componente | Ubicación | Propósito |
|------------|-----------|-----------|
| Spinner | `@/app/components/ui/Spinner.tsx` | Indicador de carga |
| Toast | `@/app/components/feedback/Toast.tsx` | Notificación temporal |
| ErrorState | `@/app/components/feedback/ErrorState.tsx` | Estado de error |
| LoadingState | `@/app/components/feedback/LoadingState.tsx` | Estado de carga |

```tsx
// Ejemplo de spinner con diferentes tamaños
<Spinner size="md" color="primary" />

// Ejemplo de estados
{isLoading ? (
  <LoadingState message="Cargando datos..." />
) : error ? (
  <ErrorState message={error} retry={fetchData} />
) : (
  <DataDisplay data={data} />
)}
```

## 5. Navegación y Tablas

### Componentes de Navegación

| Componente | Ubicación | Props Principales |
|------------|-----------|-------------------|
| Navbar | `@/app/components/navigation/Navbar.tsx` | `user`, `onLogout` |
| Sidebar | `@/app/components/navigation/Sidebar.tsx` | `items`, `activeItem` |
| Breadcrumbs | `@/app/components/navigation/Breadcrumbs.tsx` | `items` |
| TabNav | `@/app/components/navigation/TabNav.tsx` | `tabs`, `activeTab`, `onChange` |

### Tablas y Datos

| Componente | Ubicación | Props Principales |
|------------|-----------|-------------------|
| Table | `@/app/components/tables/Table.tsx` | `columns`, `data`, `onRowClick` |
| Pagination | `@/app/components/tables/Pagination.tsx` | `currentPage`, `totalPages`, `onChange` |
| FilterBar | `@/app/components/tables/FilterBar.tsx` | `filters`, `onChange` |

```tsx
// Ejemplo de tabla con paginación
<Table
  columns={[
    { key: 'name', label: 'Nombre' },
    { key: 'position', label: 'Cargo' },
    { key: 'status', label: 'Estado' }
  ]}
  data={officers}
  onRowClick={handleRowClick}
/>
<Pagination
  currentPage={page}
  totalPages={totalPages}
  onChange={setPage}
/>
```

## 6. Hooks de UI Personalizados

| Hook | Propósito | Uso |
|------|-----------|-----|
| useToast | Sistema de notificaciones | `showToast()`, `hideToast()` |
| useForm | Gestión de formularios | `values`, `errors`, `handleChange()` |
| usePagination | Lógica de paginación | `page`, `setPage()`, `pageCount` |

```tsx
// Ejemplo de uso de useToast
const { showToast } = useToast();

const handleSuccess = () => {
  showToast({
    message: 'Operación completada con éxito',
    type: 'success',
    duration: 3000
  });
};
```

## 7. Sistema de Iconos

Utilizamos una biblioteca centralizada de iconos ubicada en:
```
src/app/components/icons/
```

```tsx
// Importación de iconos
import { UserIcon, SettingsIcon, LogoutIcon } from '@/app/components/icons';

// Uso
<Button>
  <UserIcon size={16} /> Usuario
</Button>
```

## 8. Reglas de Uso del Diseño

1. **Siempre usar componentes centralizados** en lugar de crear nuevos
2. **Nunca usar valores hardcodeados** para colores, espaciados o tipografía
3. **Verificar el catálogo completo** antes de crear nuevos componentes
4. **Mantener consistencia visual** en toda la aplicación
5. **Seguir patrones de accesibilidad** en todos los componentes UI
6. **Usar variables RGB para efectos con transparencia** (por ejemplo, `rgba(var(--color-primary-500-rgb), 0.2)`) en lugar de colores hardcodeados
7. **Respetar el tema claro** como estándar visual del sistema

## 9. Implementación del Tema Claro

La aplicación utiliza un tema claro como estándar para todas las interfaces. Las principales características son:

- **Fondos claros**: Blanco (`#ffffff`) para elementos primarios y gris muy claro (`#f9fafb`) para fondos secundarios
- **Texto oscuro**: Negro suave (`#111827`) para texto principal y gris (`#4b5563`) para texto secundario
- **Acentos coloridos**: Los colores primarios y semánticos se utilizan para elementos interactivos, botones y estados
- **Efectos sutiles**: Sombras ligeras y efectos de foco usando `rgba()` con las variables RGB

### Beneficios del tema claro

- Mayor legibilidad en entornos con buena iluminación
- Menor fatiga visual durante uso prolongado
- Consistencia con aplicaciones gubernamentales modernas
- Mejor contraste para elementos visuales institucionales

---

**Nota**: Consultar `COMPONENT_CATALOG.md` en `/docs` para la lista completa de componentes disponibles.
