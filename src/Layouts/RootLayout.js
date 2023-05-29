import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollToTop from '../components/Common/ScrollToTop'

const RootLayout = () => {
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <ScrollToTop/>
        <Footer/>
    </div>
  )
}

export default RootLayout