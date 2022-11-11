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
    </div>
  )
}

export default App
