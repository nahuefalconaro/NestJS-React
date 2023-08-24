import { CreatedTask } from "../interfaces/task.interface";

const API = 'http://localhost:3000/api';


export const createTaskRequest = (task:CreatedTask) => {
    return fetch(`${API}/tasks`,{
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type':'application/json'
        }
    })
}

export const getTask = () => {
    return fetch(`${API}/tasks`)//ruta de findAll
}