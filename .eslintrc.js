module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // Asegura que ESLint no entre en conflicto con Prettier
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    // React 17+ no necesita importar React en cada archivo
    'react/react-in-jsx-scope': 'off',
    // Permitir props spreading en componentes
    'react/jsx-props-no-spreading': 'off',
    // Evitar funciones no utilizadas
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // Evitar console.log en producción
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // Forzar uso de ===
    eqeqeq: ['error', 'always'],
    // Reglas de Prettier
    'prettier/prettier': ['error'],
    // Evitar importaciones duplicadas
    'no-duplicate-imports': 'error',
    // Forzar uso de tipos en props de componentes
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Prevenir dependencias faltantes en hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // Nuevas reglas para solucionar errores frecuentes
    '@typescript-eslint/no-unused-expressions': 'warn', // Bajar a warning
    '@typescript-eslint/no-this-alias': 'warn', // Bajar a warning
    'react/display-name': 'off', // Deshabilitar advertencia de displayName
    '@typescript-eslint/ban-ts-comment': 'off', // Permitir comentarios TS
    '@typescript-eslint/no-explicit-any': 'warn', // Permitir any con advertencia
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  // Ignorar ciertos archivos y directorios
  ignorePatterns: [
    '.next/**/*',
    'node_modules/**/*',
    'public/**/*',
    'build/**/*',
    'dist/**/*',
    'out/**/*',
    '**/*.min.js',
    '**/*.config.js',
  ],
};
