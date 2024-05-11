import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'


// import './App.css'

export function App() {

  return (
    <Router>
      <section className='app-layout'>
        <AppHeader></AppHeader>
        <Routes>
          <Route element={<HomePage />} path='/' />
        </Routes>
      </section>
    </Router>
  )
}

