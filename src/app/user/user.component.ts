import { Component, Input,input ,computed, Output, EventEmitter} from '@angular/core';
// computed ,signal deben ser añadidos en el import si se quiere usar la 
//actualizacion de los datos del componente con signal y no zone(la manera basica)
import { DUMMY_USERS } from '../Data/dummy-users';
import {type User} from './user.model';
import { CardComponent } from '../shared/card/card.component';
const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
// type User = {
//   id : string,
//     avatar : string,
//     name : string
// }


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users = DUMMY_USERS
  // @Input ({required:true}) id! : string
  // @Input({required:true}) avatar! : string 
  // @Input({required:true}) name! : string

  @Input({required:true}) user!: User
  @Input({required:true}) selected!: boolean;

  //Crea un output para sacar datos del componente a otro a través de un evento
  // aqui se crea el evento llamado select
  @Output() select = new EventEmitter() 




 
  // name = input<string>()
  // avatar = input.required<string>()

  // imagePath = computed(() => `assets/users/${this.avatar}`)

  get imagePath() {
    return `assets/users/${this.user.avatar}`
  }

  // users = DUMMY_USERS;
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`)

  // get imagePath() {
  //   return `assets/users/${this.selectedUser.avatar}`;
  // }

  ClickUser () {
     console.log("clicked")
     this.select.emit(this.user.id) // usamos el objeto select para emitir el evento
     const randomIndex : number = Math.floor(Math.random()*DUMMY_USERS.length)
     this.user.name = DUMMY_USERS[randomIndex].name
     this.user.avatar = DUMMY_USERS[randomIndex].avatar
    //  this.avatar = DUMMY_USERS[randomIndex].avatar
   } 

   clickForTask() {
    this.select.emit(this.user.name)
   }
   

}
