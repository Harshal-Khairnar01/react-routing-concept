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

#### Using Link
- Basic navigation using `Link` component:
```jsx
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/cart">Cart</Link>
```

#### Using NavLink
- Enhanced navigation with `NavLink` for styling active links:
```jsx
<NavLink 
  style={({ isActive }) => ({
    color: isActive ? 'blue' : 'black'
  })} 
  to="/"
>
  Home
</NavLink>
```

Key features of NavLink:
- Automatically adds an `active` class when the link matches the current URL
- Provides an `isActive` boolean in style/className functions
- Perfect for navigation menus where you want to highlight the current page
- Can customize active styles using inline styles or CSS classes

Example with custom styling:
```jsx
const getStyles = ({isActive}) => ({
  color: isActive ? 'blue' : 'black',
  textDecoration: 'none',
  fontSize: '20px'
});

<NavLink style={getStyles} to="/">Home</NavLink>
```

#### Programmatic Navigation
- Using the `useNavigate` hook for programmatic navigation:
```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/cart');  // Basic navigation
    navigate(-1);       // Go back one step
    navigate(1);        // Go forward one step
    
    // Navigation with state
    navigate('/cart', { 
      state: { fromHome: true }
    });
  };
}
```

Key features of useNavigate:
- Enables programmatic navigation in response to events (clicks, form submissions, etc.)
- Can navigate to specific routes using paths
- Supports relative and absolute paths
- Can pass state data to the target route
- Allows navigating back/forward in history using numbers (-1, 1)
- Returns a function that can be called anywhere in your component

Example from our Home component:
```jsx
const Home = () => {
  const navigate = useNavigate();

  const onGoCart = () => {
    navigate('/cart');
  };

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <button onClick={onGoCart}>Go to cart</button>
    </div>
  );
}


### 4. Protected Routes

Protected routes (also known as private routes) are routes that can only be accessed by authenticated users. If an unauthenticated user tries to access these routes, they are redirected to the login page.

#### Implementation

- Creating a `PrivateRoute` component wrapper:
```jsx
const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};
```

- Using the `PrivateRoute` component in route configuration:
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route
    path="/cart"
    element={
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    }
  />
  <Route path="/login" element={<Login />} />
</Routes>
```
Key features of Protected Routes:
- Prevents unauthorized access to restricted pages
- Automatically redirects to login page when needed
- Works with authentication context/state
- Reusable across multiple routes
- Maintains clean URL structure

#### Authentication Context

The project uses React Context API for managing authentication state:

```jsx
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
```

Using authentication state in components:
```jsx
const MyComponent = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  
  // Use authentication state here
};
```

[previous sections about Project Structure, Key Components remain the same...]

## Project Features

- Basic routing with React Router v7
- Navigation using Link and NavLink components
- Protected routes implementation
- Authentication state management using Context API
- Login/Logout functionality
- Programmatic navigation

## Authentication Flow

1. User attempts to access a protected route (e.g., /cart)
2. PrivateRoute component checks authentication status
3. If authenticated, shows requested page
4. If not authenticated, redirects to login page
5. After successful login, user can access protected routes

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
- Contains navigation links using NavLink for active state styling
- Defines route configurations

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
- Using React Router's components (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`)
- Implementing active link styles with NavLink
- Using programmatic navigation with useNavigate hook
- Handling navigation events and state management during routing
- Implementing protected routes for authenticated access
- Managing authentication state with Context API
- Creating reusable route protection components
- Handling authentication-based navigation
- Understanding route protection patterns in React applications