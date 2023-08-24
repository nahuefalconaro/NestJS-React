//esto es un hook
import { useContext } from "react";
import { TaskContext } from './TaskContext'

export const useTasks = () => {
    const context = useContext(TaskContext)
    if(!context) throw new Error("useTasks debe estar dentro de tasksprovider");
    return context; //esto devuelve el arreglo de tasks
}