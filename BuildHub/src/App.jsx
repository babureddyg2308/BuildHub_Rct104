import { useState } from 'react'
// import './App.css'
import Fitnes from './components/Fitnes'
import Video from './components/Video'
import BuildTransform from './components/BuildTransform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Fitnes/>
       {/* <Video/> */}
       {/* <BuildTransform/> */}
    </>
  )
}

export default App
