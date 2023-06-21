import Ejemplo1 from "./hooks/Ejemplo1"
import Ejemplo2 from "./hooks/Ejemplo2"
import ComponentConContexto from "./hooks/Ejemplo3"
import Ejemplo4 from "./hooks/Ejemplo4"

function App() {
  
  return (
    <>
    <h1>Hooks</h1>
    {/* <Ejemplo1/> */}
    {/* <Ejemplo2/> */}
    {/* <ComponentConContexto/> */}
    <Ejemplo4 nombre='Luis'>
      <h3>Contenido Children</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, beatae.</p>
    </Ejemplo4>
    </>
  )
}

export default App
