import { Component, OnInit } from '@angular/core';
import { ContactSchema } from 'src/models/contactSchema';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: ContactSchema = {};
  genders:any=[]
  constructor(
    private api:ApiService,private addcontactRouter:Router) {
      this.contact.genderId = "Select a Gender"
    }
    
  ngOnInit(): void {
    this.api.Getgenders().subscribe({
      next:(response:any)=>{
        // console.log(response);
        this.genders = response
      },
      error:(err:any)=>{
        console.log(err.message);
        
      }
    })
}
  addContact(contact:ContactSchema){
    this.api.addContact(contact).subscribe({
      next:(response:any)=>{
        // console.log(response);
        this.addcontactRouter.navigateByUrl('')
      },
      error:(err:any)=>{
        console.log(err);   
      }
    })
  }

}
