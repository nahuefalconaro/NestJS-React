import {createContext, useState, useEffect} from 'react'
import { createTaskRequest, getTask } from '../api/task'
import { CreatedTask, Task } from '../interfaces/task.interface'

interface TaskContextValue {
    tasks: Task[],
    createTask: (task:CreatedTask) => void;
}

export const TaskContext = createContext<TaskContextValue>({//nos da un objeto, el objeto task arreglo de tareas
    tasks: [],
    createTask: ()=>{}
})

interface Props {
    children: React.ReactNode
}

export const TaskProvider: React.FC<Props> = ({children}) =>{
    
    const [tasks, setTasks] = useState<Task[]>([]) 

    useEffect(() => {
        getTask()//ejecuta al inicio del componente el getTask
          .then((r)=> r.json())
          .then((data)=> setTasks(data));
      }, [])

      const createTask = async (task:CreatedTask) =>{
        const res = await createTaskRequest(task);
        const data = await res.json();
        setTasks([...tasks, data])//funcion en contexto, para que todos puedan usarla, manda elemento a base de datos, lo mismo seria, delete, update...
      }

    return (
        <TaskContext.Provider value={{tasks, createTask}}>
            {children}
        </TaskContext.Provider>
    )
}
//children indica que son componentes, es decir, todos los componentes hijos a taskContext, pueden acceder
// al valor tasks
//esto sirve para compartir usuario, etc