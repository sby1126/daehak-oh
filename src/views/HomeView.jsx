import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Port from '../components/Port'
import Main from '../components/Main'
import Skip from '../components/Skip'

const HomeView = () => {
  return (
    <div>
        <Skip />
        <Header/>
        <Main>
            <Intro />
            <Port />
            <Contact />
        </Main>
        <Footer />
    </div>
  )
}

export default HomeView
