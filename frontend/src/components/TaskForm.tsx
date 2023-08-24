import React, { ChangeEvent, FormEvent, useState } from 'react'
import { createTaskRequest } from '../api/task'
import {useTasks} from "../Context/useTasks"
function TaskForm() {

  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  })
  const {createTask} = useTasks();//va al contexto, agarra las tareas, y las asigna a tasks

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //setTask, copia todos los datos previamente guardados, y luego de la coma
    //busca el name al que le seteo el valor, es decir
    //el name es title(igual al del input), matchea con el useState y le asigno el value
    //...task copia todos los datos previamente guardado, por si antes se cambio descripcion, no se pierde, sin eso, si uno cambia, luego se volveria blanco
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    createTask(task)
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='title'
          className='border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2'
          placeholder='Escribe un titulo...'
          onChange={handleChange}
        />
        <textarea name="description" rows={3}
          className='border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2'
          placeholder='Escribe una descripcion...'
          onChange={handleChange}
        />
        <label htmlFor="" className='inline-flex items-center gap-x-2'>
          <input type="checkbox" className='h-5 w-5 text-indigo-600'
            onChange={(e)=>{
              setTask({...task, done: !task.done})//o podria ser e.target.checked?
            }}
          />
          <span>Done</span>
        </label>
        <button 
        className='bg-indigo-500 px-3 block py-2 w-full'
        >Save</button>
      </form>
    </div>
  )
}

export default TaskForm