import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'

export default function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
