import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Men from './pages/Men'
import Women from './pages/Women'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import NavigateBtns from './components/NavigateBtns'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-6 w-full py-4">
        {/* 👇 Add NavigateBtns here so they appear on your screen */}
        <NavigateBtns />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/product" element={<Product />}>
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App