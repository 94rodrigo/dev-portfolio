import { Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { SECTIONS } from './constants'

function App() {
  const { t } = useTranslation();

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        {t('skipToContent')}
      </a>
      <Navbar />
      <main id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Legacy multi-page URLs (/about, /projects…) scroll to their section (see Home) */}
          {SECTIONS.map((id) => <Route key={id} path={`/${id}`} element={<Home />} />)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
