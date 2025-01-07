import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Journal from './components/Journal'
import JournalListing from './components/JournalListing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <JournalListing />
    </>
  )
}

export default App
