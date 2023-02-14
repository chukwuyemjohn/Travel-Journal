import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar'
import Main from './components/main'
import Data from "./components/data"


function App() {
const travelData = Data.map(item => {
        return( 
          <Main
           item = {item}
          />
          )
        })
  
        return (
          <div>
          <Navbar />
          
          {travelData}
         
          
    </div>
  )
}

export default App


