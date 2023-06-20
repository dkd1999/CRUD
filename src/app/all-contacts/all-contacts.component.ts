import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css'],
})
export class AllContactsComponent implements OnInit {
  constructor(private router:Router, private api:ApiService) {}
  allContacts:any=[]
  gender:any=[]
  isLoading:boolean = true
  errorMsg:string=""
  searchKey:string=""
  output:any
  admin_name:object={}
  login_username: string = ''
  ngOnInit(): void {
    
    setInterval(()=>{
      this.login_username = localStorage.getItem('user') || "";
      this.allcontacts(),
    this.admin_name=this.api.userDetails
    },1000)
    

  // viewmob(){
  //   this.router.navigateByUrl('viewcontact-mobile')
  // }
}
allcontacts(){
  this.api.getAllContacts().subscribe({
  next:(response:any)=>{
    // console.log(response);
    
    // this.api.Getgenders().subscribe({
    //   next:(response:any)=>{
    //     console.log(response);
    //     this.gender = response
    //     console.log(this.gender);
        
    //   }

    // })

    setTimeout(()=>{
      // console.log(response);
      this.allContacts = response
      this.isLoading = false
    },1000);

  },
  error:(err:any)=>{
    console.log(err.message);
    console.log('Status : ',err.status);
    this.errorMsg = err.message
    this.isLoading = false
    
  }
})}

delContact(id:any){
  this.api.delContact(id).subscribe({
  next:(response:any)=>{
    console.log(response);
    this.router.navigateByUrl('')
  }})
}
}
