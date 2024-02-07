import { Injectable } from "@nestjs/common";
import { Task,TaskStatus } from "./tasks.entity";
import {v4} from 'uuid';

@Injectable()
  
export class TasksService{

    private tasks: Task[] = [{
        id: '1',
        description: 'This is an example of a task description',
        title: 'Task #1',
        status: TaskStatus.PENDING
    }   
    ];

    getAllTasks() {
        return this.tasks;
    }

    createTask(title: string,description:string){
        
        const newTask = {
            id: v4(),
            title,
            description,
            status:TaskStatus.PENDING
        }
       
        const sucessfullTask = this.tasks.push(newTask)
        if(!sucessfullTask) {
            return 'An error ocurred';
        } 

        return newTask;
    }

    updateTask(id:){


    }

    deleteTask(){

    }

}