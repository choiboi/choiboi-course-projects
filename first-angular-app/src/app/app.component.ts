import { Component, OnInit } from '@angular/core';

import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  // For Header Component.
  loadedFeature = 'services';
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
