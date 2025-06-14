
import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Cart } from './pages/Cart'


function App() {

  const getStyles = ({isActive}) => {
    return {
      color: isActive ? 'blue' : 'black',
      textDecoration: 'none',
      fontSize: '20px',
      margin: '10px'
    }
  }

  return (
    <div className='App'>
      <NavLink style={getStyles} to="/">Home</NavLink>
      <NavLink style={getStyles} to="/about">About</NavLink>
      <NavLink style={getStyles} to="/cart">Cart</NavLink>

      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
