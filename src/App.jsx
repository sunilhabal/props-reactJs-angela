import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'              
import Card from './Card'    



function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <Card name="Beyonce" 
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      cell="+123 456 789"
      email="b@beyonce.com"
        />
      <Card name="Jack Bauer" 
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      cell="+987 654 321"
      email="jack@nowhere.com"
        />
      <Card name="Chuck Norris" 
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      cell="+918 372 574"
      email="gmail@chucknorris.com"
        />
    </>
  )
}

export default App
