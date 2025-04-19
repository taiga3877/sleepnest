import React from 'react'
import Header from './Components/Header/page'
import Footer from './Components/Footer/page'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  )
} 

export default App