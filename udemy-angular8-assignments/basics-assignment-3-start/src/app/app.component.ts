import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	displaycontent:boolean = false;
	clickLog: number[] = [];


	toggleDisplayContent() {
		this.displaycontent = !this.displaycontent;
		this.clickLog.push(Date.now());
	}
}
