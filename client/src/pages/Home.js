import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProducts from '../components/BannerProducts'
import HorizontalCartProduct from '../components/HorizontalCartProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

function Home() {
  return (
    <div>
     <CategoryList/>   
      <BannerProducts/>

      <HorizontalCartProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <HorizontalCartProduct category={"watches"} heading={"Popular's Watches"}/>

      <VerticalCardProduct category={"mobile"} heading={"Mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>

    </div>
  )
}

export default Home
