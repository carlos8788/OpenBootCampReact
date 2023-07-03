import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    const [tasks, setTasks] = useState([defaultTask])
    cosnt [loading, setLoading] = useState(true)


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
            <div>
                <h1>Your Tasks:</h1>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar un a lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
