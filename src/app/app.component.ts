import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: Row[] = [];

  constructor() {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(new Row(this.getRndInteger(20, 200), index));
    }
  }

  private getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
}

export class Row {
  constructor(public height, public index) {
  }
}
