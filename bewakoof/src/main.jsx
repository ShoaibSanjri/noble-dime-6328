import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"
import Routing from "../src/Components/Routes"
import ContextApiProvider from './Components/Context/ContextApi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ContextApiProvider>
  <ChakraProvider>
    <Routing />
  </ChakraProvider>
  </ContextApiProvider>
    </BrowserRouter>
)



