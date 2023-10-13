import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Showtimes from './pages/Showtimes/Showtimes'
import { useDispatch } from 'react-redux'
import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import Film from './pages/Film/Film'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'APP_STARTUP' })
  }, [])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lich-chieu" element={<Showtimes />} />
        <Route exact path="/all-phim" element={<Film />} />
      </Routes>
      <Footer />
    </Router>
  )
}
