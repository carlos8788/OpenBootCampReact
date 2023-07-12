
import './styles/task.scss'
import GreetingStyled from './components/pure/greetingStyled'
import Clock from './components/container/Clock'

import TaskListComponent from './components/container/task_list';
import Father from './components/container/father';
function App() {

  return (
    <>
      <main className='main'>
        <h1 className="text-center">Hooks</h1>
        {/* <Ejemplo1/> */}
        {/* <Ejemplo2/> */}
        {/* <ComponentConContexto/> */}
        {/* <Ejemplo4 nombre='Luis'>
      <h3>Contenido Children</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, beatae.</p>
    </Ejemplo4> */}
        {/* <GreetingStyled name={'Luis'} /> */}
        {/* <Clock /> */}
        <TaskListComponent/>
        {/* <Father/> */}
      </main>
    </>
  )
}

export default App
