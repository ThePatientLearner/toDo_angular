import { Component,Input,EventEmitter, Output, inject } from '@angular/core';
import { TASK } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
// PARA METER UN OBJETO EN UNA VARIABLE SE USA INPUT COMBINADO CON interface o type
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-itask',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './itask.component.html',
  styleUrl: './itask.component.css'
})
export class ItaskComponent {
@Input({required: true}) chosenTask!: TASK
@Output() completeTask = new EventEmitter<string>()
private taskService = inject(TaskService)

onCompleteTask() {
  this.taskService.removeTask(this.chosenTask.id)
}


}
