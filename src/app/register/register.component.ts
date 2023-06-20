import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name: string = '';
  username: string = '';
  password: string = '';
  photo: string = '';
  confirmpassword: string = '';
  userDetails: any = {};
  outputcontent: any;
  

  constructor(private registerRouter:Router, private data: ApiService){}

  saveData() {
    if (this.userDetails) {
      localStorage.setItem('database', JSON.stringify(this.userDetails));
    }
  }

  
  getData(){
    this.userDetails = JSON.parse(localStorage.getItem('database')!)
}

getuserphoto(event:any){
  // console.log(event.target.value);
  this.photo = event.target.value
}
getusername(event:any){
  // console.log(event.target.value);
  this.username = event.target.value
}
getuserpswd(event:any){
  // console.log(event.target.value);
  this.password = event.target.value
}

getusercnfrmpswd(event:any){
  // console.log(event.target.value);
  this.confirmpassword = event.target.value
}

  register() {
    this.data.register()
    this.data.registerphoto = this.photo
    this.data.registername = this.username
    this.data.registerpswd = this.password
    this.data.registerconfirmpassword = this.confirmpassword

    let uname = this.username;
    let pswd = this.password;
    let phot  = this.photo
    
    if (uname && pswd && phot) {
      if (uname in this.userDetails) {
        this.outputcontent = '<h3>User already Exist</h2>';
      }
      else if(this.password != this.confirmpassword){
        this.outputcontent = '<h3>Passwords must the same'
      }
      else {
        this.userDetails[uname] = { username: uname, password: pswd ,photo : phot};
        // console.log(this.userDetails);
        // to store userDetails in local storage
        this.saveData();
        alert(`Registered Successfully as ${uname} , redirecting you to home`);
        this.registerRouter.navigateByUrl('login');
      }
    } else {
      this.outputcontent = '<h3>Enter valid details</h3>';
    }
  }

}
