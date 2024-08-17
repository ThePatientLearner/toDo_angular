import { Component,EventEmitter,Input, Output } from '@angular/core';
import { ItaskComponent } from './itask/itask.component';
import { dummyTasks } from '../Data/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './itask/task.model';
import { TaskService } from './tasks.service';




@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ItaskComponent,NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) nameForTask! :any;
  @Input({required: true}) userId!:string;
  @Output() complete = new EventEmitter<string>();
  public tasksService : TaskService;

  // puedes usar el shortcut: constructor(public taskService: TaskService) { }  :para inicializar el objeto en vez de como ves en mi codigo

  constructor( taskService: TaskService) { // dependency injection , "con esto te aseguras que se compartirá el objeto de services"
    this.tasksService = taskService;
  }
  
  //tasks = dummyTasks;
  isAddingTask = false;
  

  get selectedTaskUser(){ 
    //return this.tasks.filter((task) => task.userId === this.userId);
    //filtrar todas las tareas que tengan el mismo userId 
    return this.tasksService.getUserTasks(this.userId);
  }

  
  onCompleteTask(id: string) {
    //this.tasks = this.tasks.filter((task) => task.id !== id);
    // de esta manera creamos una nueva lista sin la tarea que acabamos de completar
    //this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

 
}
