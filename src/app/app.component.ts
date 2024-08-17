import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './Data/dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  userName: string = ''
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.name === this.userName)!; 
    //devolverá un objeto usuario cuyo nombre sea igual al nombre del input 
  }

  onSelectUser(id: string) {
    console.log("User selected: " + id)

  }

  recieveName(name: string) {
    this.userName = name 
  }
}
