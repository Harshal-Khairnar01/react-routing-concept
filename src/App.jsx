
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Cart } from './pages/Cart'


function App() {
  return (
    <div className='App'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart</Link>

      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
