import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Showtimes from './pages/Showtimes/Showtimes'
import { useDispatch } from 'react-redux'
import Navbar from './components/NavBar/Navbar'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'APP_STARTUP' })
  }, [])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/lich-chieu" element={<Showtimes />} />
      </Routes>
    </Router>
  )
}
