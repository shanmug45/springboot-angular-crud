import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  newUser: User = { name: '', email: '' };

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  addUser() {
    if (!this.newUser.name || !this.newUser.email) return;
    this.userService.addUser(this.newUser).subscribe(() => {
      this.fetchUsers();
      this.newUser = { name: '', email: '' };
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => this.fetchUsers());
  }
}
