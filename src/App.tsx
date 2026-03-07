import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {

  const PROJECT_NAME = '/dev-portfolio';

  return (
    <main className="app-container">
      <Routes>
        <Route path={PROJECT_NAME} element={<Home />} />
        <Route path={`${PROJECT_NAME}/about`} element={<About />} />
        <Route path={`${PROJECT_NAME}/projects`} element={<Projects />} />
        <Route path={`${PROJECT_NAME}/skills`} element={<Skills />} />
        <Route path={`${PROJECT_NAME}/contact`} element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
