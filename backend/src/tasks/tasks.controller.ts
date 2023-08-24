import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDTO } from 'src/dto/task.dto';
import { Task } from 'src/entities/task.entity';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @Post()
    createTask(@Body() createTaskDto: TaskDTO) {
      return this.tasksService.create(createTaskDto);
    }
  
    @Get(':id')
    findAll(@Param('id', ParseIntPipe) id: number): Promise<Task> {
      return this.tasksService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.tasksService.delete(id);
    }

    @Put(':id')//patch no es lo mismo que put
    update(@Param('id', ParseIntPipe) id: number, @Body() taskUpdate: TaskDTO) {
      return this.tasksService.update(id, taskUpdate);
    }
}
