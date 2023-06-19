import React from 'react'
import { Task } from '../../models/task.class'
import PropTypes from 'prop-types'

function TaskComponent({task}) {
  return (
    <div>
        <h2>
            Nombre: {task.name}
        </h2>
        <h3>
            Descripción: {task.description}
        </h3>
        <h4>
            Nivel: {task.level}
        </h4>
        <h5>
            This task is: {task.completed ? 'Completed' : 'In progress'}
        </h5>
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent;