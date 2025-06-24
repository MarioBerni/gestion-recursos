# 🔄 DNGR: Manual de Desarrollo

> **Actualización (2025-06-24)**: El diseño de la aplicación utiliza ahora un tema claro como estándar. Los desarrolladores deben asegurarse de que todos los nuevos componentes respeten esta especificación de diseño.

## 1. Proceso de Desarrollo

### Planificación

Antes de comenzar cualquier tarea:

1. **Revisar documentación relevante**
   - README.md para visión general
   - TECHNICAL_STANDARDS.md para estándares de código
   - DESIGN_SYSTEM_CORE.md para componentes UI

2. **Documentar la tarea**
   - Crear archivo descriptivo de la tarea en `/tasks/TASK_nombre_tarea.md`
   - Dividir en subtareas manejables con estimaciones

3. **Validar enfoque técnico**
   - Consultar con otros desarrolladores si es necesario
   - Investigar soluciones existentes para problemas similares
   - Documentar decisiones técnicas importantes

### Implementación

**Lista de verificación durante desarrollo**:

- [ ] ¿Se están siguiendo los estándares de código?
- [ ] ¿Se respetan los límites máximos? (líneas, complejidad)
- [ ] ¿Se reutilizan componentes existentes cuando es posible?
- [ ] ¿El código está suficientemente modularizado?
- [ ] ¿Se manejan adecuadamente los errores?
- [ ] ¿La nomenclatura es clara y consistente?

### Revisión

**Auto-revisión antes de solicitar review**:

1. Revisar el código como si fueras otro desarrollador
2. Ejecutar linters y verificar que no hay errores/warnings
3. Verificar que la funcionalidad cumple los requisitos
4. Comprobar cumplimiento de todos los estándares

**Lista de verificación pre-push**:

- [ ] **Límites de Tamaño:** archivos (300 líneas), funciones (30 líneas)
- [ ] **Modularización:** componentes con responsabilidad única
- [ ] **Prevención de Duplicación:** verificado catálogo de componentes
- [ ] **Rendimiento:** uso apropiado de memoización y optimizaciones
- [ ] **Documentación:** componentes documentados adecuadamente

## 2. Solución de Problemas Frecuentes

### Rendimiento

#### Problema: Renderizaciones innecesarias en componentes

**Soluciones:**
```tsx
// Memoizar componentes que reciben las mismas props
const MemoizedComponent = React.memo(function Component(props) {
  // Implementación
});

// Memoizar cálculos costosos
const calculatedValue = useMemo(() => {
  return expensiveCalculation(dependencyValue);
}, [dependencyValue]);
```

#### Problema: Carga lenta de datos iniciales

**Soluciones:**
```tsx
// Implementar skeletons
{isLoading ? <SkeletonLoader /> : <ActualContent data={data} />}

// Usar carga diferida para componentes grandes
const LazyComponent = lazy(() => import('./HeavyComponent'));
```

### Gestión de Estado

#### Problema: Prop drilling excesivo

**Soluciones:**
```tsx
// Usar Context API para estado compartido
const MyContext = createContext();

// Proveedor en componente padre
<MyContext.Provider value={value}>{children}</MyContext.Provider>

// Consumir en componente profundo
const value = useContext(MyContext);
```

#### Problema: Actualizaciones de estado asíncronas inesperadas

**Soluciones:**
```tsx
// Usar callback para acceder al estado más reciente
setCounter(prevCounter => prevCounter + 1);

// Usar useEffect para efectos secundarios
useEffect(() => {
  // Código que depende del nuevo valor
}, [dependency]);
```

### Formularios

#### Problema: Validación inconsistente

**Soluciones:**
```tsx
// Usar React Hook Form con Zod
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: zodResolver(schema),
});
```

#### Problema: Rendimiento lento en formularios grandes

**Soluciones:**
- Desacoplar renderizados con Controller de React Hook Form
- Dividir formularios grandes en pasos o secciones
- Usar componentes no controlados para campos no críticos

### UI y Estilos

#### Problema: Inconsistencia visual entre componentes

**Soluciones:**
- Usar siempre variables CSS del sistema de diseño
- Crear componentes base reutilizables
- Seguir patrones establecidos en DESIGN_SYSTEM_CORE.md
- Mantener la consistencia del tema claro en toda la aplicación
- Utilizar las variables RGB (`--color-*-rgb`) para efectos con transparencia

#### Problema: Interfaces no responsivas

**Soluciones:**
- Usar clases responsivas del sistema CSS
- Implementar breakpoints consistentes
- Probar en múltiples tamaños de pantalla

#### Problema: Contraste insuficiente con tema claro

**Soluciones:**
- Verificar que el texto sobre fondos claros cumpla WCAG 2.1 AA (ratio mínimo 4.5:1)
- Utilizar `--color-text-primary` para texto principal y `--color-text-medium` para secundario
- Evitar texto gris claro sobre fondos blancos

## 3. Plantillas y Documentación

### Plantilla para Tareas

```markdown
# 📋 Tarea: [Nombre de la Tarea]

## Objetivo
[Descripción clara del objetivo]

## Requisitos
- [Requisito 1]
- [Requisito 2]

## Pasos de Implementación
1. [Paso detallado 1]
2. [Paso detallado 2]

## Criterios de Aceptación
- [ ] [Criterio 1]
- [ ] [Criterio 2]

## Notas y Decisiones
[Documentación de decisiones tomadas]

## Estado
- Fecha inicio: [YYYY-MM-DD]
- Fecha finalización: [YYYY-MM-DD]
- Desarrollador: [Nombre]
```

### Documentación de Componentes

```tsx
/**
 * Componente que muestra información detallada del usuario
 *
 * @param {IUser} user - Datos del usuario a mostrar
 * @param {boolean} isEditable - Determina si se muestran controles de edición
 * @returns {JSX.Element} - Tarjeta de usuario renderizada
 */
export function UserCard({ user, isEditable }: UserCardProps) {
  // Implementación
}
```

### Documentación de Problemas

```markdown
## Problema: [Breve descripción]

### Contexto
[Qué estaba intentando hacer]

### Síntomas
[Lo que está fallando]

### Intentado hasta ahora
[Soluciones probadas]

### Detalles técnicos
[Errores, logs, ambiente, etc]
```

## 4. Flujo de Trabajo con Git

### Estructura de Ramas
- `main`: Código listo para producción
- `develop`: Integraciones continuas
- `feature/<nombre>`: Nuevas características
- `bugfix/<nombre>`: Correcciones

### Ciclo de Vida de una Característica
1. Crear rama desde `develop`: `feature/<nombre>`
2. Desarrollar con commits regulares
3. Solicitar merge hacia `develop`
4. Revisar y aprobar
5. Eliminar rama de feature después del merge

### Convenciones de Commit

```
<tipo>(<alcance>): <descripción>
```

**Ejemplos:**
```
feat(personal): añadir filtro por rango
fix(despliegues): corregir cálculo de recursos disponibles
docs: actualizar README con nuevos comandos
```

## 5. Recursos y Herramientas

### Herramientas Recomendadas
- **VSCode**: Editor principal con extensiones para el proyecto
- **React DevTools**: Para debug de componentes y profiling
- **Lighthouse**: Para auditorías de rendimiento y accesibilidad
- **Contrast Checker**: Para verificar contraste de colores en tema claro
- **WCAG Color Contrast Analyzer**: Para validar accesibilidad visual

### Extensiones Recomendadas para VSCode
- ESLint: Linting de código
- Prettier: Formateo de código
- Git Lens: Mejora la experiencia con git
- TypeScript Error Translator: Mensajes de error más claros

### Recursos de Aprendizaje
- [Documentación oficial de React](https://reactjs.org/docs/getting-started.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

## 6. Checklists

### Checklist de Inicio de Proyecto
- [ ] Configurar editor con extensiones recomendadas
- [ ] Instalar dependencias (`pnpm install`)
- [ ] Verificar que la aplicación compila y corre
- [ ] Revisar documentación principal
- [ ] Configurar git hooks

### Checklist para Pull Requests
- [ ] Tests pasan correctamente
- [ ] No hay warnings de eslint
- [ ] Se sigue la guía de estilo
- [ ] Documentación actualizada si aplica
- [ ] Convenciones de commits respetadas
- [ ] Cambios revisados por al menos un desarrollador

### Checklist de Despliegue
- [ ] Tests de integración completados
- [ ] Verificación de rendimiento
- [ ] Validación de accesibilidad
- [ ] Generación correcta de versión
- [ ] Backup de la versión anterior
- [ ] Plan de rollback preparado

---

**Nota**: Este manual debe evolucionar con el proyecto. Si encuentras formas de mejorar este flujo, documenta tu propuesta y discútela con el equipo.
