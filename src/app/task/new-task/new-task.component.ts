import { Component, Input,Output,signal, inject } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // para usar ngModel y poder recoger los datos
import { type NewTaskData } from '../itask/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule], // esto va a preveer que el submit del form se envie a ningún sitio fuea del cliente
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter <NewTaskData>();
  @Input({required: true}) userId! : string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TaskService) // injeccion del servicio en vez de por el contructor, por aqui.

onCancel() {
  this.close.emit(); 
}

onSubmit(){ // cuando se pulsa el boton submit se ejecuta esta funcion
  this.tasksService.addTask({
    title: this.enteredTitle,
    summary: this.enteredSummary,
    dueDate: this.enteredDate
  }, this.userId
); 
this.close.emit();
}

}
