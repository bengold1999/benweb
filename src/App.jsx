import { Route, Routes } from 'react-router-dom'
import './assets/style/main.scss'

import { HomePage } from './pages/HomePage.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'


// import './App.css'

export function App() {

  return (
      <section className='app-layout main-layout'>
        <Routes>
          <Route element={<HomePage/>} path='/' />
        </Routes>
      </section>
  )
}

