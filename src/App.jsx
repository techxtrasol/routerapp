import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Navbar from './shared/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        < Route path='/' element={<HomePage />} />
        < Route path='/dashboard' element={<Dashboard />} />
        < Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
