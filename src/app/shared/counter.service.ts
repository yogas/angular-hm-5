import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

export interface ICounter {
  active: number
  inactive: number
}

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter: ICounter = {
    active: 0,
    inactive: 0
  }

  constructor(private usersService: UsersService) { 
    this.usersService.actionsEmitter.subscribe(action => {
      this.counter[action]++;
    })
  }
}
