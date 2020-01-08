import { Component } from '@angular/core';

@Component({
  selector: 'app-a3',
  templateUrl: './a3.component.html',
  styleUrls: ['./a3.component.css']
})
export class A3Component {
	displaycontent:boolean = false;
	clickLog: number[] = [];


	toggleDisplayContent() {
		this.displaycontent = !this.displaycontent;
		this.clickLog.push(Date.now());
	}
}
