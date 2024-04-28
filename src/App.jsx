import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar from './components/Calendar'

const App = () =>{
  return(
    <div className='App'>
      <h1>Iternerary for 7 Days in New York</h1>
      <h2>Welcome to New York, Mo! Check out this calendar to get to know the city better!</h2>
      <Calendar />
    </div>
  )
}

export default App
