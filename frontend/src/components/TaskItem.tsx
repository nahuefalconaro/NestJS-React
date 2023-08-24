import React from 'react'
import { Task } from '../interfaces/task.interface'

interface Props { 
    t: Task
}

function TaskItem({t}:Props) {
  return (
    <div key={t.id} className='bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer'>
        <h1>{t.title}</h1>
        <p>{t.description}</p>
    </div>
  )
}

export default TaskItem