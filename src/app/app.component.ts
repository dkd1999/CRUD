import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CRUD';
  windowWidth: String | any | number;
  showSplash: boolean = true;

  constructor() {
    // first null
    const isShowSplash = sessionStorage.getItem('isShowSplash');
    if (isShowSplash) {
      // don't show splash
      this.showSplash = false;
    } else {
      // show splash
      this.showSplash = true;
    }
    sessionStorage.setItem('isShowSplash', JSON.stringify(false));
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.windowWidth = '-' + window.innerWidth + 'px';
      setTimeout(() => {
        this.showSplash = false
        // console.log(this.showSplash);
      }, 100);
    }, 2550);
  }
}
