import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./Context/TaskContext";


function app() {
    return (
        <div className="bg-zinc-900 h-screen text-white flex items-center justify-center">
            <div className="bg-gray-950 p-4 w-1/3">
               <h1 className="text-3xl font-bold text-center block my-2"> Aplicacion de Tareas!</h1>
                <TaskProvider >
                    <TaskForm/>
                    <TaskList/>
                </TaskProvider>
            </div>
        </div>
    )
}

export default app;