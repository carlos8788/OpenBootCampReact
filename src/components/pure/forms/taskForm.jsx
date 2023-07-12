import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'
const TaskForm = ({add}) => {

  const nameRef = useRef('')
  const descriptionRef = useRef('')
  const levelRef = useRef(LEVELS.NORMAL)

  const addTask = (e) => {
    e.preventDefault()
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    )
    add(newTask)
  }

  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
    <div className="form-outline flex-fill ">
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">Task Name</label>
        <input type="text" ref={nameRef} id='inputName' className='form-control' placeholder="Enter task name" required autoFocus/>
      </div>
      <div className="mb-3">
        <label htmlFor="inputDescription" className="form-label">Task Description</label>
        <input type="text" ref={descriptionRef} id='inputDescription' className='form-control' placeholder="Enter task description"/>
      </div>
      <div className="mb-3">
        <label htmlFor="selectLevel" className="form-label">Priority</label>
        <select id="selectLevel" ref={levelRef} className="form-select" defaultValue={LEVELS.NORMAL}>
          <option value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.URGENT}>Urgent</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
        </select>
      </div>
      <button type='submit' className='btn btn-primary'>Add</button>
    </div>
</form>

  )
}

TaskForm.prototype = {
  add: PropTypes.func.isRequired
}

export default TaskForm