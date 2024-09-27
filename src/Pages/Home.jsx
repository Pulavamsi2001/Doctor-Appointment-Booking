import React from 'react'
import Header from '../Components/Header'
import SpecialityMenu from './../Components/SpecialityMenu';
import TopDoctors from '../Components/TopDoctors';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
     <Header />
     <SpecialityMenu />
     <TopDoctors />
      <h1></h1>
      <Footer />
    </div>
  )
}

export default Home