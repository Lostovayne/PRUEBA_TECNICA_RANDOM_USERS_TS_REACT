# Proyecto de React para entrevista laboral

Este es un proyecto de React creado para una entrevista laboral. A continuación se presenta el archivo `package.json` con las dependencias y scripts necesarios para el desarrollo del proyecto.

## package.json

```json
{
    "name": "Prueba_Tecnica_React_Ts",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
        "dev": "vite",
        "build": "tsc && vite build",
        "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
        "preview": "vite preview"
    },
    "dependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
    },
    "devDependencies": {
        "@types/react": "^18.0.28",
        "@types/react-dom": "^18.0.11",
        "@typescript-eslint/eslint-plugin": "^5.57.1",
        "@typescript-eslint/parser": "^5.57.1",
        "@vitejs/plugin-react-swc": "^3.0.0",
        "eslint": "^8.38.0",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-refresh": "^0.3.4",
        "typescript": "^5.0.2",
        "vite": "^4.3.2"
    }
}
```

## Dependencias

-   `react`: Librería de JavaScript para construir interfaces de usuario.
-   `react-dom`: Paquete que proporciona métodos específicos del DOM para manipular elementos de React.

## Dependencias de desarrollo

-   `@types/react`: Tipos de TypeScript para React.
-   `@types/react-dom`: Tipos de TypeScript para React DOM.
-   `@typescript-eslint/eslint-plugin`: Plugin de ESLint para TypeScript.
-   `@typescript-eslint/parser`: Parser de ESLint para TypeScript.
-   `@vitejs/plugin-react-swc`: Plugin de Vite para compilar React con SWC.
-   `eslint`: Herramienta de linting para JavaScript y TypeScript.
-   `eslint-plugin-react-hooks`: Plugin de ESLint para detectar problemas comunes en los hooks de React.
-   `eslint-plugin-react-refresh`: Plugin de ESLint para habilitar la recarga en caliente de React.
-   `typescript`: Lenguaje de programación tipado que se compila a JavaScript.
-   `vite`: Herramienta de construcción rápida para aplicaciones web modernas.

## Scripts

-   `dev`: Inicia un servidor de desarrollo con Vite.
-   `build`: Compila el proyecto con TypeScript y Vite.
-   `lint`: Ejecuta ESLint en los archivos TypeScript y TypeScript React.
-   `preview`: Inicia un servidor de previsualización con Vite.
