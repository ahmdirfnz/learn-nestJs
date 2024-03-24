import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { updateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) { }

    // http://localhost:3000/tasks
    // @Get()
    // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    //     // if we have any filters defined, call taskService.getTaskWithFilters
    //     // if not just get all tasks

    //     if(Object.keys(filterDto).length) {
    //         return this.taskService.getTaskWithFilters(filterDto);
    //     } else {
    //         return this.taskService.getAllTask();
    //     }

    // }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Promise<Task> {
        return this.taskService.getTaskById(id);
    }

    // @Get('/:id')
    // getTaskById(@Param('id') id: string): Task {
    //     return this.taskService.getTaskById(id);
    // }

    // @Delete('/:id')
    // deleteTaskById(@Param('id') id: string): void {
    //     this.taskService.deleteTaskbyId(id);
    // }

    // @Post()
    // createTask(
    //     @Body()
    //     createTaskDto: CreateTaskDto
    // ): Task {
    //     return this.taskService.createTask(createTaskDto);
    // }

    // @Patch('/:id/status')
    // updateTaskStatus(
    //     @Param('id') id: string, 
    //     @Body() updateTaskStatusDto: updateTaskStatusDto, 
    // ): Task {
    //     const { status } = updateTaskStatusDto;
    //     return this.taskService.updateTaskStatus(id, status);
    // }

}
