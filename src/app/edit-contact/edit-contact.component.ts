import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ContactSchema } from 'src/models/contactSchema';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  contact: ContactSchema = {};
  genders:any
  constructor(
    private editActivatedRoute: ActivatedRoute,
    private api: ApiService,
    private editRouter: Router
  ) {}

  ngOnInit(): void {
    this.editActivatedRoute.params.subscribe({
      next: (pathparameter: any) => {
        // console.log(pathparameter);
        const {id} = pathparameter;
        // console.log(id);

        this.api.viewContact(id).subscribe({
          next: (response: any) => {
            // console.log(response);
            this.contact = response
          },
        });
      },
    });

   this.api.Getgenders().subscribe({
    next:(response:any)=>{
      // console.log(response);
      this.genders = response
    }
   }) 
  }

  editContact(id:any){
    this.api.editContact(id,this.contact).subscribe({
      next:(response:any)=>{
        // console.log(response);
        this.editRouter.navigateByUrl("")
        
      }
    })
  }

}
