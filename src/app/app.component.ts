import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  homeScreen: boolean = true;
  menuClicked() {
    this.homeScreen = false;
  }
}
