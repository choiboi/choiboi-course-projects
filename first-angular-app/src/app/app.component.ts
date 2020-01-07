import { Component, OnInit } from '@angular/core';

import { AccountsService } from './services/accounts.service';
import { UsersService } from './assignment5/services/users.service';
import { CounterService } from './assignment5/services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  // For Header Component.
  loadedFeature = 'services';
  accounts: {name: string, status: string}[] = [];

  // For Assignment 5 - Services
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private accountsService: AccountsService, private counterService: CounterService) { }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
