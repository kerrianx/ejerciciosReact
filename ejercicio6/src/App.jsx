
import { useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre]=useState('');
  const [edad, setEdad]=useState('');
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    setNombre('');
  setEdad('')
  }
  

  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder='nombre' value={nombre} onChange={e=>setNombre(e.target.value)}></input>
    <input type="number" placeholder='edad' value={edad} onChange={e=>setEdad(e.target.value)}></input>
    <button onClick={()=>alert(`hola ${nombre} tienes ${edad} años`)}>presioname</button>
    </form>
    </>
  )
}

export default App
