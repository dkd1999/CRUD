import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { AdminSchema } from 'src/models/adminSchema';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-pane',
  templateUrl: './user-pane.component.html',
  styleUrls: ['./user-pane.component.css'],
})
export class UserPaneComponent implements OnInit {
  // id: any;
  login_username: string = '';
  login_photo:string='';
  admindetails:any={}
  // admindata: AdminSchema = {};
  // admin:any={}
  admin_name:object={}
  constructor(private api: ApiService, private router: Router, private viewRouter:ActivatedRoute){}
  ngOnInit(): void {
    // this.admin_name=this.api.userDetails
    // this.viewRouter.params.subscribe((data:any)=>{
    //   const {id} = data
    //   console.log(id);
    //   this.api.viewadmin(id).subscribe({
    //     next:(response:any)=>{
    //       console.log(response);
    //       this.admin = response
    //     }
    //   })
      
    // })
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

  // addadmin(admindata:AdminSchema) {
  //   this.api.addadmin(admindata).subscribe({
  //     next: (res: any) => {
  //       console.log(res);
  //       this.router.navigateByUrl('')
  //     },
  //     error:(err:any)=>{
  //       console.log(err);
        
  //     }
  //   });
  // }

  

}
