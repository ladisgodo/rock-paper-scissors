import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Game from './components/Game.jsx'
import Header from './components/Header.jsx'
import Play from './components/Play.jsx'

function App() {

  const [myChoice, setMyChoice] = useState("")
  const [score, setScore] = useState(0)

  if (score < 0) {
    setScore(0);
  }

  return (
    <>
      <div className='container'>
        <Header score={score} />
        <Routes>
          <Route exact path='/' element={<Play setMyChoice={setMyChoice} />} />
          <Route exact path='/game' element={<Game myChoice={myChoice} score={score} setScore={setScore} />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
