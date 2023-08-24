import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskDTO } from 'src/dto/task.dto';
import { Task } from 'src/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {

    constructor(@InjectRepository(Task) private readonly taskRepository: Repository<Task>){

    }

    async create(task: TaskDTO){
        const newTask = this.taskRepository.create(task);//crea instancia de task
        return this.taskRepository.insert(newTask);//no usar save, hace viaje de ida y vuelta, si existe updatea, si no inserta
    }

    async findOne(id: number){
        const taskFound = await this.taskRepository.findOne({ where: { id } });
        return taskFound;
    }

    async delete(id:number){
        //to-do
    }

    async update(id:number, task: TaskDTO){
        //to-do
    }
}
