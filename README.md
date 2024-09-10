# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})


- Configurando Projeto e Instalando Dependencias e Bibliotecas
 
React Router Dom para rotas
npm i react-router


Redux para Controle de estado
npm install react-redux
npm install @reduxjs/toolkit

criar
src/store/index.ts

Axios para Api
npm i axios

Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

configure path 

tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

add no index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

npm i -D @types/node

tscongig.json
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },

defineConfig.ts
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

npm install shadcn-ui

npx shadcn@latest init


add Button
npx shadcn-ui@latest add button

add Card
npx shadcn-ui@latest add card

add Avatar
npx shadcn-ui@latest add avatar

add Sheed "side bar"
npx shadcn-ui@latest add sheet

add Tooltip "Hover"
npx shadcn-ui@latest add tooltip

add Input
npx shadcn-ui@latest add input

add DropDown menu "nao instalei, caso precisar"
npx shadcn-ui@latest add dropdown-menu


install
Biblioteca de icones
npm install lucide-react




Dependencias que iremos usar para testing

// Renderiza os componentes dentro do nosso teste, tem acesso a uma DOM virtual
npm install @testing-library/jest-dom -D

// Para usar a Libbry no react
npm install @testing-library/react -D

// Para Eventos de Clicks, Inputs...
npm install @testing-library/user-event -D

// Para gerar converage - saber oque ja foi testado e oque falta ser testado
npm install @vitest/coverage-v8 -D

// Gera uma Dom virtual, um ambiente de teste, sem usar o Navegador
npm install jsdom -D

// Fazer os testes
npm install vitest -D

// Navegar entre as paginas
npm install path -D
npm install --save-dev @types/node

// Instalando React Router Dom para navegar e sua dependencia
npm install react-router-dom
npm install @types/react-router-dom -D

// FakeJs Gera  Img, email etc dados fakes
//  https://fakerjs.dev/guide/
npm i --save-dev @types/jest ou  npm install @faker-js/faker --save-dev


npm i --save-dev @types/mocha

Configuracao

Criar arquivo na raiz do projeto 
    vitest.config.ts  {

        /// <reference types="vitest" />
        import { defineConfig } from "vite"
        import react from "@vitejs/plugin-react"
        import path from "path"

        export default defineConfig({
            plugins: [react()],
            test: {
                globals: true,
                environment: "jsdom",
                setupFiles: ["./src/setupTests.ts"]
            },
            resolve: {
                alias: [{ find: "@", replacement: path.resolve(__dirname, "./src")}]
            }
        })

    }



Dentro de SRC criar:
    Arquivo =
        vitest-env.d.ts {

            dentro :
            
            ///<reference types="vitest/globals"/>
        }

        setupTests.ts {
            import "@testing-library/jest-dom" 
        }


abrir arquivo package.json
ir em "script" e add:
{

    "test": "vitest",
    "test:coverage": "vitest run --coverage"
}

```
