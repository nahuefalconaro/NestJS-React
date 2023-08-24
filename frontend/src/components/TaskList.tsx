import React, { useEffect, useState } from 'react'
import { Task } from '../interfaces/task.interface';
import TaskItem from './TaskItem';
import { useTasks } from '../Context/useTasks';

function TaskList() {

  const {tasks} = useTasks();

  
  return (
    <div>
      {
        tasks.map((task:Task) => (
         <TaskItem t={task} key={task.id}/>
        ))
      }
    </div>
  )
}

export default TaskList