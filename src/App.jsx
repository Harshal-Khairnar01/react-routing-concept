import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Cart } from "./pages/Cart";
import Login from "./pages/Login";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const getStyles = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "black",
      textDecoration: "none",
      fontSize: "20px",
      margin: "10px",
    };
  };

  return (
    <div className="App">
      <div className="navbar">
        <NavLink style={getStyles} to="/">
          Home
        </NavLink>
        <NavLink style={getStyles} to="/about">
          About
        </NavLink>
        <NavLink style={getStyles} to="/cart">
          Cart
        </NavLink>
        <NavLink style={getStyles} to="/login">
          Login
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
    </div>
  );
}

export default App;
