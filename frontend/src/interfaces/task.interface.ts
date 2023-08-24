export interface Task {
    id: number;
    title: string;
    description: string;
    done?: boolean;
}


export type CreatedTask = Omit<Task, 'id'>;//Crea una interface como task, pero omite todo lo que le digamos luego de la ,