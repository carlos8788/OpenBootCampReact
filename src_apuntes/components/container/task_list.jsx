import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/Task'

function TaskListComponents() {
    const defaultTask = new Task('React', 'lvl intermediate', false, LEVELS.NORMAL)

  return (
    <div>
        <div>
            Your Tasks:
        </div>
        <TaskComponent task={defaultTask}/>
    </div>
  )
}



export default TaskListComponents
