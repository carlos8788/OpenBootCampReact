import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {
    const defaultTask = new Task('Example1', 'Default description', true, LEVELS.BLOCKING);
    const defaultTask2 = new Task('Example2', 'Default das', true, LEVELS.NORMAL);
    const defaultTask3 = new Task('Example3', 'Default ', false, LEVELS.URGENT);

    const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false)
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks])

    const completeTask = (task) => {
        console.log('Complete this task: ', task);
        const index = tasks.indexOf(task)
        const tempTask = [...tasks]
        tempTask[index].completed = !tempTask[index].completed
        setTasks(tempTask)

    }

    const deleteTask = (task) => {
        setTasks(tasks.filter(t => t !== task))
    }
    const addTask = (task) => {
         
        const tempTask = [...tasks]
        tempTask.push(task)
        setTasks(tempTask)
        // console.log(task)
    }


    return (
        <div className='d-flex justify-content-center'>
            <div className="col-6 m-auto">
                <div className="card bg-success">
                    <div className="card-header p-3 text-light">
                        <h5>Your Tasks:</h5>
                    </div>
                    <div className="card-body my-5" data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: 'auto' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <TaskComponent task={defaultTask}></TaskComponent>
                                <TaskComponent task={defaultTask2}></TaskComponent>
                                <TaskComponent task={defaultTask3}></TaskComponent> */}
                                {tasks.map((task, key) => {
                                    return (
                                        <TaskComponent complete={completeTask} task={task} key={key} deleteTask={deleteTask} />
                                    )
                                })}
                            </tbody>
                        </table>
                        <TaskForm add={addTask} />
                    </div>
                </div>
            </div>


        </div>
    );
};


export default TaskListComponent;
