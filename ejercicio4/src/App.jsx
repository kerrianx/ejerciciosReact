
import { useState } from 'react'
import './App.css'

function App() {
  const [edad, setEdad]=useState(0);
  

  return (
   <div>
   <h1>Edad de una persona</h1>
   <h3>Edad de la persona es: {edad} </h3>
   <h3>la persona es {edad>=18?'MAYOR':'MENOR'} de edad</h3>
   <div className='boton'>
   <button className='boton1' onClick={()=>setEdad(edad+1)}>incrementar</button>
   <button onClick={()=>setEdad(edad-1)}>decrementar</button>
   </div>
   </div>
  )
}

export default App
