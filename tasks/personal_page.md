# Especificación de Página "Personal"

## Descripción General

La página "Personal" es un módulo central del sistema de gestión de recursos de la DNGR, que permite administrar información del personal policial, incluyendo datos personales, asignaciones, regímenes de trabajo y licencias.

## Funcionalidad Principal

Esta página debe permitir:

1. Visualizar listado de personal con filtros
2. Crear, editar, eliminar y ver detalles del personal
3. Gestionar licencias del personal
4. Exportar datos a formatos como Excel/PDF
5. Filtrar y buscar personal por diversos criterios

## Modelo de Datos

### Personal

```typescript
interface Personal {
  id: string;
  documento: string;
  nombre: string;
  apellido: string;
  grado: string;
  unidad: string;
  realizaServicio222: boolean;
  turnoEntrada?: string;
  turnoSalida?: string;
  tipoRegimen: string;
  cargo: string;
  escalafon: string;
  trabajando: boolean;
  licencias: Licencia[];
  servicios: any[]; // Para futura implementación
  fechaInicioRegimen?: string;
}
```

### Licencia

```typescript
interface Licencia {
  id: string;
  tipo: string;
  fechaInicio: string;
  fechaFin: string;
  observaciones?: string;
}
```

### Filtros

```typescript
interface PersonalFilters {
  busqueda: string;
  unidad: string;
  grado: string;
  estado: string;
  tipoRegimen: string;
  realizaServicio222: string;
  cargo: string;
  escalafon: string;
}
```

## Catálogos/Constantes

### Unidades

```javascript
const UNIDADES = [
  'Dirección I',
  'Dirección II',
  'GEO',
  'Regional Norte',
  'Regional Este',
  'Dirección IV',
  'Dirección V',
  'Direccion VI',
  'Esmapo',
  'Sub Direccion',
  'Direccion',
];
```

### Grados

```javascript
const GRADOS = [
  'Agente',
  'Guardia Republicano',
  'Cabo',
  'Sargento',
  'Sub Oficial',
  'Alferez',
  'Teniente',
  'Tte. 1°',
  'Capitán',
  'Cte. Mayor',
  'Cte. General',
];
```

### Regímenes

```javascript
const REGIMENES = [
  'Semana por semana',
  '12 por 36',
  '24 por 48',
  'Lunes a Viernes',
  '8 hs. (6 por 1)',
];
```

### Cargos

```javascript
const CARGOS = [
  'Director',
  'Sub Director',
  'Jefe de Unidad',
  'Ayudante',
  'Encargado',
  'Administrativo',
  'Patrullaje',
  'Tareas de Apoyo',
];
```

### Escalafones

```javascript
const ESCALAFONES = ['Ejecutivo', 'Administrativo', 'Especializado'];
```

## Componentes UI

### 1. PersonalPageContent

Componente principal que gestiona la visualización de la página según el modo actual (lista, crear, editar, detalle).

### 2. PersonalTable

Tabla interactiva que muestra el listado de personal con opciones para:

- Ordenar por columnas
- Seleccionar filas
- Acciones por fila (editar, eliminar, ver detalles)

### 3. PersonalFilters

Componentes de filtrado divididos en:

- Barra de búsqueda rápida
- Filtros avanzados (drawer/panel lateral)

### 4. PersonalForm

Formulario para creación y edición de personal con:

- Validación de campos
- Pestañas organizadas por secciones
- Gestión de licencias (añadir/eliminar)

### 5. PersonalDetail

Vista detallada de la información del personal seleccionado.

### 6. ExportDialog

Diálogo para exportar datos del personal a diferentes formatos.

## Estados y Lógica de Componentes

### Estados Principales

1. **pageMode**: 'list' | 'create' | 'edit' | 'detail'
2. **selectedPersonId**: ID del personal seleccionado
3. **filters**: Estado de los filtros aplicados
4. **filterDrawerOpen**: Control de visibilidad del panel de filtros
5. **deleteConfirmation**: Confirmación para eliminación de registros
6. **exportDialogOpen**: Control del diálogo de exportación

### Flujo de Navegación

1. Página inicia en modo 'list'
2. Al hacer clic en "Nuevo" → modo 'create'
3. Al hacer clic en "Editar" en una fila → modo 'edit' + selectedPersonId
4. Al hacer clic en "Ver detalles" → modo 'detail' + selectedPersonId
5. Al hacer clic en "Volver" desde cualquier modo → regresa a 'list'

## Funciones y Lógica de Negocio

### Cálculo de Estado Actual

Determinar si el personal está:

- **En servicio**: Trabajando normalmente
- **De licencia**: Verificando licencias activas según la fecha actual
- **Fuera de servicio**: Otras condiciones especiales

### Gestión de Régimen de Trabajo

Cada personal tiene un régimen de trabajo que determina sus horarios y días laborables.

### Validaciones en Formulario

- Documento único no duplicado
- Campos obligatorios: documento, nombre, apellido, grado, unidad
- Validaciones de formato para fechas y horas

## Interfaces de Usuario

### Vista Principal (Lista)

- Tabla con paginación
- Filtros en la parte superior
- Botones de acción (Nuevo, Exportar)
- Acciones por fila (íconos)

### Formulario (Crear/Editar)

- Formulario en modal o página completa
- Pestañas para organizar la información
- Sección para gestionar licencias
- Botones de guardar/cancelar

### Vista Detalle

- Información completa organizada por secciones
- Historial de licencias
- Botones para editar/volver

## Pruebas Requeridas

- [ ] Listado filtra correctamente según diferentes criterios
- [ ] Formulario valida correctamente los campos requeridos
- [ ] CRUD completo funciona correctamente
- [ ] Exportación genera archivos válidos
- [ ] Cálculo de estado actual es preciso
- [ ] Responsive en diferentes tamaños de pantalla

## Notas Adicionales

- Considerar implementar un sistema de notificaciones para licencias próximas a vencer
- Evaluar la posibilidad de mostrar estadísticas de personal (gráficos)
- Permitir la carga masiva de datos mediante archivos Excel
- Considerar integración con módulos de despliegues y servicios

## Preguntas Pendientes

- ¿Se requiere integración con sistema de autenticación para acceso a esta página?
- ¿Existen permisos diferenciados para visualizar/editar personal?
- ¿Se necesita historial de cambios en los datos del personal?
- ¿Qué campos adicionales podrían requerirse en el futuro?
