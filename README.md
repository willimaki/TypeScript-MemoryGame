# Memory Game Project

This project is a memory card game built with React and TypeScript, inspired by a JavaScript course but enhanced with TypeScript for better type safety and developer experience.

## Course Overview

We covered:

### React
1. Props
2. Hooks:
   - useState
   - useEffect
   - useRef
3. Form
4. Reusable components

### TypeScript
1. HTML entities
2. Destructuring assignment
3. Spread operator
4. Array methods:
   - map
   - includes
   - find
   - slice
5. Randomness
6. Type annotations
7. Interfaces & types
8. Generics
9. Enums

### Accessibility
1. Aria attributes:
   - label
   - live
   - atomic
2. Focus

## Project Setup: React + TypeScript + Vite

This project uses a minimal setup to get React working in Vite with HMR and ESLint rules.

### Official Plugins Used
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### TypeScript Advantages

While the original course may have used JavaScript concepts, our implementation with TypeScript brings numerous advantages:

#### Development Experience
- **Intelligent code completion** - Get suggestions based on variable types
- **Early error detection** - Catch errors at compile time rather than runtime
- **Improved IDE support** - Better refactoring tools and navigation
- **Self-documenting code** - Types serve as inline documentation

#### Code Quality
- **Type safety** - Prevent common bugs like undefined property access
- **Explicit interfaces** - Clear contracts between components
- **Stricter null/undefined checking** - Avoid "cannot read property of undefined" errors
- **Reduced need for unit tests** - Many type errors caught before running code

#### Scalability
- **Better code organization** - Interfaces and types create clear structures
- **Enhanced refactoring** - Change code more confidently with type checking
- **Superior maintainability** - Easier for new developers to understand code intent
- **Predictable behavior** - Function signatures clearly indicate expected inputs/outputs

#### React-Specific Benefits
- **Typed props and state** - No more guessing component API
- **Event handling typings** - Proper event types for all DOM events
- **Component return type checking** - Ensure components return valid JSX
- **Typed hooks** - useState, useRef, and other hooks with proper generic types

## Expanding the ESLint configuration

For production applications, it's recommended to update the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property:

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

## How to Run the Project

1. Clone this repository
2. Install dependencies with `npm install`
3. Run development server with `npm run dev`
4. Build for production with `npm run build`

## Features

- Card matching gameplay
- Score tracking
- Animations for card flips
- Accessible UI with ARIA attributes
- Responsive design for all device sizes

## Implementation Details

The memory game was built as a learning project, incorporating all the technologies and concepts covered in the course while adding TypeScript for improved developer experience and code quality.

## Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
