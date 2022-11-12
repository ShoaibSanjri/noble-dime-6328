import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Box,HStack} from "@chakra-ui/react"
import OfferNavbar from './Components/OfferNavbar'
import Navbar from './Components/Navbar'
import CategoryBar from './Components/CategoryBar'
import MenFirstSwipper from './Components/MenFirstSwipper'
import CrazyPoster from './Components/CrazyPoster'
import DesignSection from './Components/DesignSection'
import PopularCategories from './Components/PopularCategories'
import Discount from './Components/Discount'
import { BellIcon } from '@chakra-ui/icons'
import Bestsellers from './Components/BestSellers'
import SecondSwipper from './Components/SecondSwipper'
import StoopidCollection from './Components/StoopidCollection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >
      <OfferNavbar />
      <Navbar />
      <hr style={{marginTop:"10px"}} ></hr>
      <CategoryBar />
      <MenFirstSwipper />
      <CrazyPoster  />
      <DesignSection />
      <PopularCategories style={{marginBottom:"30px"}} />
      <h1 style={{fontSize:"22px",fontWeight:"bold"}} >DISCOUNT PE DISCOUNT</h1>
      <Discount /> 
      {/* <Bestsellers /> */}
      <SecondSwipper />
      {/* <h1 style={{fontSize:"16px",fontWeight:"bold",letterSpacing:"2px"}} >CLEARANCE ZONE</h1> */}
      <StoopidCollection />
    </div>
  )
}

export default App
