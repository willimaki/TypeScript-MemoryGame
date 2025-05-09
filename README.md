# Modern Web Development with React + TypeScript + Vite

This project is a TypeScript implementation inspired by a JavaScript course. It provides a comprehensive foundation for modern web development using React, TypeScript, and Vite.

## Course Overview

We covered the following core concepts across three main areas:

### React

1. **Props**
   - Understanding props as a way to pass data between components
   - Prop types and TypeScript interfaces

2. **Hooks**
   - `useState`: Managing component state
   - `useEffect`: Handling side effects in components
   - `useRef`: Creating mutable references

3. **Form**
   - Form handling in React
   - Controlled components
   - Form validation

4. **Reusable Components**
   - Creating modular, reusable UI elements
   - Component composition patterns

### JavaScript/TypeScript

1. **HTML Entities**
   - Properly handling special characters

2. **Destructuring Assignment**
   - Extracting values from objects and arrays

3. **Spread Operator**
   - Expanding iterables into individual elements

4. **Array Methods**
   - `map`: Transforming array elements
   - `includes`: Checking if an array contains a value
   - `find`: Locating elements in arrays
   - `slice`: Extracting portions of arrays

5. **Randomness**
   - Implementing random selection
   - Managing randomness in UI elements

### Accessibility

1. **ARIA Attributes**
   - `label`: Properly labeling elements
   - `live`: Creating live regions for screen readers
   - `atomic`: Controlling how updates are announced

2. **Focus Management**
   - Programmatically managing focus
   - Creating accessible navigation flows

## Project Setup

This template provides a minimal setup to get React working in Vite with HMR (Hot Module Replacement) and some ESLint rules.

### Official Vite Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

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

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
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
```

## Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`
4. Build for production with `npm run build`

## TypeScript Implementation Notes

This project implements the concepts from a JavaScript course using TypeScript, providing additional type safety and developer experience improvements. Key TypeScript features used include:

- Interface definitions for component props
- Type annotations for state hooks
- Generic typing for array methods
- Type guards for conditional rendering

## Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
