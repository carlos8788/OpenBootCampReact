import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/pure/greeting'
import TaskComponent from './components/pure/Task'
import TaskListComponents from './components/container/task_list'

function App() {
  
  return (
    <>
      <Greeting name='Luis'/>
      <TaskListComponents />
    </>
  )
}

export default App
