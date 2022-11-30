
import './App.css'
import Coco from './components/coco'
import Fresa from './components/fresa'
import Mango from './components/mango'
import Naranja from './components/naranja'
import Sandia from './components/sandia'

function App() {
  
  const lista=['mango','naranja','fresa','coco','sandia']

  return (
    <>
    <div>
    
    <ul>
      <h1>Ejercicio 5</h1>
    <li><Mango Mango={lista[0]}/></li>
    <li><Naranja Naranja={lista[1]}/></li>
    <li><Fresa fresa={lista[2]} /></li>
    <li><Coco Coco={lista[3]}/></li>
    <li><Sandia Sandia={lista[4]}/></li>
    </ul>
    </div>
    </>
  )
}

export default App
