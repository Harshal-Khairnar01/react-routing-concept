# React Router Learning Project

This project demonstrates the implementation of client-side routing in React using React Router v7. It shows how to create multiple pages and navigate between them using React Router's components.

## Project Overview

The application has three main pages:
- Home page
- About page 
- Cart page

Each page is accessible through navigation links and has its own unique URL path.

## Key Concepts Learned

### 1. React Router Setup

- Using `BrowserRouter` to enable routing functionality:
```jsx
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### 2. Route Configuration

- Defining routes using `Routes` and `Route` components:
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/cart" element={<Cart />} />
</Routes>
```

### 3. Navigation

- Using `Link` component for navigation between pages:
```jsx
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/cart">Cart</Link>
```

## Project Structure

```
src/
├── pages/
│   ├── Home/
│   │   └── index.jsx
│   ├── About/
│   │   └── index.jsx
│   └── Cart/
│       └── index.jsx
├── App.jsx
└── main.jsx
```

## Key Components

### App.jsx
- Main component that sets up the routing configuration
- Contains navigation links and route definitions

### Page Components
- `Home`: Landing page component
- `About`: About page component
- `Cart`: Shopping cart page component

## Getting Started

1. Install dependencies:
```sh
npm install
```

2. Start the development server:
```sh
npm run dev
```

## Dependencies

- `react-router-dom`: For implementing routing functionality
- `react`: Core React library
- `vite`: Build tool and development server

## Learning Outcomes

- Understanding React Router's core concepts
- Implementing client-side routing in React applications
- Creating a multi-page application with React Router
- Using React Router's components (`BrowserRouter`, `Routes`, `Route`, `Link`)

