import ComponenteA from "./ComponenteA"
import Contacto from "./ComponenteB"

function App() {
  
  return (
    <>
    <ComponenteA props={new Contacto('Luis', 'Pérez', 'luis@perez.com', false)}/>
    </>
  )
}

export default App
