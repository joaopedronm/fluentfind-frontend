import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopTeachers from '../components/TopTeachers'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopTeachers />
      <Banner />
    </div>
  )
}

export default Home