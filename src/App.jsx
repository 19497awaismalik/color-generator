import React, { useState } from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'

const App = () => {
  let [Color, setColor] = useState([]);
const [NavColor, setNavColor] = useState('');
  const handle=()=>{
  
  let red=Math.random()*256;
  let green=Math.random()*256;
  let blue=Math.random()*256;
  red=Math.ceil(red)
  green=Math.ceil(green)
  blue=Math.ceil(blue)
  let color=`rgb(${red},${green},${blue})`
  
  // setColor(...Color,color)
  // return color

  setNavColor(color)
  Color= Color.concat(color)
  setColor(Color)
  }
  return (
    <div>
      <Navbar Color={NavColor}/>
      <Home handle={handle} Color={Color}/>

    </div>
  )
}

export default App
