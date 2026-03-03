import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ServerPage = lazy(() => import('./pages/ServerPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const AdminPage = lazy(() => import('./pages/AdminPage'))

function RouteFallback() {
  return (
    <div className='mx-auto w-full max-w-screen-2xl px-4 py-12 text-sm text-zen-text/70 sm:px-6 md:px-10 lg:px-12'>
      Loading...
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/server' element={<ServerPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
