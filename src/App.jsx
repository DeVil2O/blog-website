import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/home'
import Header from './components/header';
import Footer from './components/footer';
import GetInTouch from './components/get-in-touch';
import About from './components/about';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<GetInTouch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
