import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userpane-ws',
  templateUrl: './userpane-ws.component.html',
  styleUrls: ['./userpane-ws.component.css']
})
export class UserpaneWsComponent implements OnInit{
  login_username: string = '';
  login_photo:string='';
    admindetails:any={}
  // admin_name:object={}

  constructor(private api: ApiService, private router: Router, private viewRouter:ActivatedRoute){}

  ngOnInit(): void {
        this.admindetails = JSON.parse(localStorage.getItem('database')!)
    // console.log(this.admindetails);
    

    this.login_username = localStorage.getItem('user') || "";


    // console.log(this.login_username);
    // to access photo from localStorage
    this.login_photo = this.admindetails[this.login_username].photo
    // console.log(this.login_photo);
    
  
  }
  logout(){
    this.api.logout()
    this.ngOnInit()
  }
}
