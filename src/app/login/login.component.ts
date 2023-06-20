import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  content:string = "user"
  username:string = ""
  password:string = ""
  loginphoto:string = ''
  outputcontent:any

  constructor(private loginRouter:Router, private data:ApiService){}

  getusername(event:any){
    // console.log(event.target.value);
    this.username=event.target.value
  }

  getuserpswd(event:any){
    // console.log(event.target.value);
    this.password=event.target.value 
  }

  login(){
    
    this.data.loginusername = this.username
    this.data.loginuserpswd = this.password
    this.loginphoto = this.data.registerphoto
    this.data.getData()
    if(!this.data.userDetails){
      this.outputcontent = '<h3>Incorrect Username</h3>';
    }
    else if(this.username && this.password){
      if(this.username in this.data.userDetails){
        if(this.password == this.data.userDetails[this.username].password){
          alert(`Login successful, Welcome Admin ${this.username}  `)
          localStorage.setItem("user",this.username)
          this.loginRouter.navigateByUrl('')
        }
        else{
          this.outputcontent = '<h3>Incorrect Password</h2>';
        }
      }
      else{
        this.outputcontent = '<h3>Incorrect Username</h2>';
      }
    }
    else{
      this.outputcontent = '<h3>Enter valid Details</h2>';
    }
  }
}
