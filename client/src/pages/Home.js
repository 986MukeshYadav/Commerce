import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProducts from '../components/BannerProducts'
import HorizontalCartProduct from '../components/HorizontalCartProduct'

function Home() {
  return (
    <div>
     <CategoryList/>   
      <BannerProducts/>

      <HorizontalCartProduct category={"airpodes"} heading={"Top's Airpodes"}/>
    </div>
  )
}

export default Home
