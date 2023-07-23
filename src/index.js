import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Body from './components/main/Body'
import Header from './components/header/Header'
import ForParents from './components/for_parents/ForParents'
import InterestingFacts from './components/interest_facts/InterestingFacts'
import Footer from './components/footer/Footer'
import NotFound from './components/notFound/NotFound'


const HomePageLayot = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: ' rgb(202, 216, 240', fontFamily: 'Montserrat'}}>
      <div style={{ flex: '1' }}>
        <Header />
        <Body />
      </div>
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePageLayot />} />
      <Route path='/for-parents/' element={<ForParents />} />
      <Route path='/interest-facts/' element={<InterestingFacts />} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
)


reportWebVitals()
