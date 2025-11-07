# React with TypeScript

This project demonstrates the use of React Hooks in a TypeScript-based React application. It showcases modern React development practices with type safety, including custom hooks, context API, and component-based architecture.

## Project Overview

This is a shopping application built with React 19, TypeScript, and Vite. The project features:

- **TypeScript Integration**: Full TypeScript support with strict type checking
- **React Hooks**: Extensive use of built-in hooks (useState, useEffect, useContext) and custom hooks
- **Context API**: State management using React Context for shopping cart and user authentication
- **Routing**: Client-side routing with React Router DOM
- **Styling**: Tailwind CSS for responsive design
- **UI Components**: Material-UI and DaisyUI for enhanced user interface

## Technology Stack

- **React 19**: Latest React version with concurrent features
- **TypeScript**: Static type checking for JavaScript
- **Vite**: Fast build tool and development server
- | **Tailwind CSS**: Utility-first CSS framew |  |  |
  | ------------------------------------------------ | - | - |
  |                                                  |  |  |
  |                                                  |  |  |
- **Material-UI**: React components implementing Google's Material Design
- **React Router DOM**: Declarative routing for React
- **Axios**: HTTP client for API requests

## TypeScript in React: Key Concepts

### 1. Component Props Typing

```typescript
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  // Component implementation
};
```

### 2. Custom Hooks with TypeScript

```typescript
interface UseShoppingCartReturn {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  total: number;
}

const useShoppingCart = (): UseShoppingCartReturn => {
  // Hook implementation with proper typing
};
```

### 3. Context API with TypeScript

```typescript
interface ShoppingContextType {
  items: CartItem[];
  quantity: number;
  addToCart: (product: Product) => void;
}

const ShoppingContext = createContext<ShoppingContextType | undefined>(undefined);

export const useShoppingContext = (): ShoppingContextType => {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error('useShoppingContext must be used within ShoppingProvider');
  }
  return context;
};
```

### 4. Interface Definitions

```typescript
// src/Types/product.types.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}
```

## Project Structure

```
src/
├── Components/          # Reusable UI components
├── Contexts/           # React Context providers
│   ├── Shopping/       # Shopping cart context
│   └── User/          # User authentication context
├── Hooks/             # Custom React hooks
├── Pages/             # Page components
├── Types/             # TypeScript type definitions
└── main.tsx           # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-hooks-typescript
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Type Checking

```bash
npx tsc --noEmit
```

## TypeScript Configuration

The project uses a strict TypeScript configuration with the following key settings:

- **Target**: ES2022
- **JSX**: react-jsx
- **Strict Mode**: Enabled
- **Module Resolution**: Bundler mode for Vite compatibility

## Best Practices Demonstrated

### 1. Type Safety

- All components use proper TypeScript interfaces
- Props are typed to prevent runtime errors
- Context values are strongly typed

### 2. Custom Hooks

- Business logic extracted into reusable hooks
- Proper typing for hook return values
- Error boundaries for context usage

### 3. Component Composition

- Functional components with hooks
- Proper prop drilling prevention using context
- Separation of concerns between UI and logic

### 4. State Management

- Local state with useState
- Global state with Context API
- Immutable state updates

## Contributing

1. Ensure TypeScript types are properly defined
2. Run type checking before committing
3. Follow the existing code structure and naming conventions
4. Add tests for new features

## License

This project is licensed under the MIT License.
