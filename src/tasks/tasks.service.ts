import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksRepository } from './task.repository';
import { Task } from './task.entity';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TasksRepository)
        private taskRepository: TasksRepository,
    ){}

    // private tasks: Task[] = [];

    // getAllTask(): Task[] {
    //     return this.tasks;
    // }

    // getTaskWithFilters(filterDto: GetTasksFilterDto): Task[] {
    //     const { status, search } = filterDto;

    //     // define a temp array to hold the task result

    //     let tasks = this.getAllTask();

    //     // condition if status
    //     if (status) {
    //         tasks = tasks.filter((task) => task.status === status)
    //     }

    //     // condition if search
    //     if(search) {
    //         tasks = tasks.filter((task) => {
    //              if (task.title.includes(search) || task.description.includes(search)) {
    //                 return true;
    //              }
    //              return false;
    //         });
    //     }

    //     // return final result
    //     return tasks;


    // }

    async getTaskById(id: string): Promise<Task> {
        const found = await this.taskRepository.findOne({where: {id: id}});

        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;

    }

    // getTaskById(id: string): Task {
    //     // return this.tasks.find((task) => task.id === id);

    //     const found = this.tasks.find((task) => task.id === id);

    //     if (!found) {
    //         throw new NotFoundException(`Task with ID: ${id} not found`);
    //     }

    //     return found;
    // }

    // deleteTaskbyId(id: string) {
    //     // const index = this.tasks.findIndex((task) => task.id == id);
    //     // if (index > -1) {
    //     //     this.tasks.splice(index, 1); 
    //     // } else {
    //     //     console.log('Index not found');
    //     // }
    //     let found = this.getTaskById(id);

    //     this.tasks = this.tasks.filter((tasks) => tasks.id !== found.id);
    // }

    // // updateTaskByID(id: string) {
    // //     this.tasks.
    // // }

    // createTask(createTaskDto: CreateTaskDto): Task {

    //     const { title, description } = createTaskDto

    //     const task: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     };

    //     this.tasks.push(task);

    //     return task;
    // }

    // updateTaskStatus(id: string, status: TaskStatus) {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }
    
}