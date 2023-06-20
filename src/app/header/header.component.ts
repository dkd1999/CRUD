import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router){}
  login_username:string=""

  ngOnInit(): void {
    this.login_username = localStorage.getItem('user') || ""
    // console.log(this.login_username);
    
  }
  addcon(){
    this.route.navigate([{outlets: {dyna: ['addcontact']}}])
  }
}
