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

    const changeComplete = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div className="col-6 m-auto">
                <div className="card bg-success">
                    <div className="card-header p-3 text-light">
                        <h5>Your Tasks:</h5>
                    </div>
                    <div className="card-body" data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
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
                                {tasks.map((task, key) =>{
                                    return(
                                        <TaskComponent task={task} key={key}/>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <TaskForm/>

        </div>
    );
};


export default TaskListComponent;
