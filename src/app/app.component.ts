import { Component, OnInit } from '@angular/core';
import { CounterService, ICounter } from './shared/counter.service';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  activeUsers: string[];
  inactiveUsers: string[];
  counter: ICounter;
  
  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.counter = this.counterService.counter;
  }
}
