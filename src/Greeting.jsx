import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting() {
  const [count, setCount] = useState(0);
  const [name, setName]=useState("ilyass");

  const increment = ()=>{setCount((count)=>count +1)}
  const decreament = ()=>{setCount((count)=>count -1)}
  const reset = ()=>{setCount((count)=>count =0)}
  const createName  = ()=>{setName((count)=>name.concat("mar"))}


  const [dataObj, setdataObj]= useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setdataObj(data))
  })
  

  let thatName="ilyass mar";
  return (
    <>
      {/* <div>Hello, this is the first component!</div>
      <Greeting name={thatName} hello="second"/>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <img src={viteLogo} onClick={increment} className='logo react' alt="" />
      <img src={viteLogo} onClick={decreament} className='logo react' alt="" />
      <img src={viteLogo} onClick={reset} className='logo react' alt="" />
      <img src={viteLogo} onClick={createName} className='logo react' alt="" /> */}

      <ul>
        {dataObj && dataObj.map((item) => (
          <li key={item.id}>
            {item.name} {item.email}</li>
        ))}
      </ul>

    </>
  )
}
export default Greeting;