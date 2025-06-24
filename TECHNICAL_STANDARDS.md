# 📏 DNGR: Estándares Técnicos

## 1. Reglas de Oro

### Límites Críticos
- **Archivos**: Máximo 300 líneas por archivo
- **Funciones**: Máximo 30 líneas por función/método
- **Anidamiento JSX**: Máximo 3 niveles
- **Props**: Máximo 10 props por componente
- **Imports**: Máximo 15 imports por archivo

### Principio de Responsabilidad Única
- Cada componente, archivo y función debe tener una única responsabilidad clara
- Si un componente hace más de una cosa, debe dividirse

## 2. Nomenclatura y Estructura

### Convenciones de Nombres
- **Componentes React**: PascalCase (ej. `UserProfile.tsx`)
- **Archivos de utilidad**: camelCase (ej. `formatDate.ts`)
- **Hooks**: Prefijo "use" + PascalCase (ej. `useAuth.ts`)
- **Contextos**: NombreContexto.tsx (ej. `AuthContext.tsx`)
- **Variables**: camelCase descriptivo (ej. `userData`)
- **Constantes globales**: UPPER_SNAKE_CASE (ej. `API_URL`)
- **Tipos/interfaces**: Prefijo "I" para interfaces, "T" para tipos

### Estructura de Directorios
```
/app
  /components        # Componentes reutilizables compartidos
    /ui              # Componentes básicos de UI
    /layouts         # Estructuras de layout
    /forms           # Componentes específicos de formularios
  /[módulo]          # Módulos funcionales (personal, despliegues)
    /components      # Componentes específicos del módulo
    /hooks           # Hooks específicos del módulo
    /context         # Contexto específico (si necesario)
    page.tsx         # Página principal del módulo
  /styles            # Estilos globales
  /hooks             # Hooks compartidos
  /utils             # Utilidades compartidas
```

## 3. Modularización y Arquitectura

### Principios Clave
- **Bajo Acoplamiento**: Minimizar dependencias entre módulos
- **Alta Cohesión**: Agrupar código relacionado
- **Composición sobre Props Drilling**: Usar children cuando sea posible
- **Reutilización**: Verificar componentes existentes antes de crear nuevos
- **Consistencia Visual**: Mantener el tema claro en todos los módulos

### Patrones Recomendados
- Separar componentes en presentacionales y contenedores
- Extraer lógica compleja a hooks personalizados
- Usar composición para evitar props drilling excesivo
- Implementar render props para componentes flexibles

## 4. Gestión de Estado

### Cuándo usar cada solución
- **Estado local (useState)**: Para estado que solo afecta al componente actual
- **Context API**: Para estado compartido entre componentes cercanos
- **Zustand**: Para estado global, complejo o compartido ampliamente

### Estructura de Stores Zustand
```tsx
// UserStore.ts
export const useUserStore = create<IUserStore>((set, get) => ({
  // Estado
  users: [],
  selectedUser: null,
  
  // Acciones
  fetchUsers: async () => {
    // Implementación
  },
  selectUser: (id) => {
    // Implementación
  },
}));
```

## 5. TypeScript

### Buenas Prácticas
- Preferir interfaces para objetos
- Usar tipos para uniones/intersecciones
- Evitar `any` - preferir `unknown`
- Definir tipos para todos los props de componentes

### Ejemplo
```tsx
// Definición de tipos
interface IUser {
  id: string;
  name: string;
  role: UserRole;
}

type UserRole = 'admin' | 'editor' | 'viewer';

// Componente con tipos
interface UserCardProps {
  user: IUser;
  onSelect: (userId: string) => void;
}

function UserCard({ user, onSelect }: UserCardProps) {
  // Implementación
}
```

## 6. Control de Versiones

### Estructura de Ramas
- `main`: Código estable y listo para producción
- `develop`: Integraciones continuas
- `feature/<nombre>`: Desarrollo de nuevas características
- `bugfix/<nombre>`: Correcciones de errores

### Convenciones de Commit
Usar formato [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<alcance>): <descripción>
```

**Tipos**:
- `feat`: Nueva característica
- `fix`: Corrección de error
- `docs`: Cambios en documentación
- `style`: Cambios que no afectan el código
- `refactor`: Refactorización
- `perf`: Mejoras de rendimiento
- `test`: Añadir o corregir tests
- `build`: Cambios en sistema de build
- `ci`: Cambios en integración continua
- `chore`: Otros cambios


---

**Nota**: Estos estándares buscan el balance entre calidad y productividad. Su objetivo es mantener un código mantenible y escalable sin sacrificar la velocidad de desarrollo.
