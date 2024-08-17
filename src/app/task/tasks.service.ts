import { Injectable } from "@angular/core";
import { NewTaskData } from "./itask/task.model";

 // con esto le dices a angular que va a crear un objeto de esta clase para dar servicio 
 // a toda la aplicacion y compartirlo
@Injectable({providedIn: 'root'})
export class TaskService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks){
        this.tasks = JSON.parse(tasks);
        // como no encuentra nada en local storage que meter en tasks y esta null
        //pues no mete nada en el task y sale el array inicial
        // tras hacer algun cambio el constructor ya actualiza el array de tasks
    }
  }

  getUserTasks(userId: String){
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({ // podriamos usar unshit en vez de push si queremos la tarea al principiod el array y no al final
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.dueDate
      })

      this.saveTasks();
    }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }  

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks)); 
    // asi conviertes el objeto en un string que luego es convertible a un json y 
    // lo guardas en la variable tasks
  }
}
