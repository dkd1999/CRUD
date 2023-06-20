import { Component,OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{

  contact:any={}
  gender:any
  constructor(private api:ApiService, private viewRouter:ActivatedRoute){}
  ngOnInit(): void {
    this.viewRouter.params.subscribe((data:any)=>{
      const {id} = data
      // console.log(id);
      this.api.viewContact(id).subscribe({
        next:(response:any)=>{
          // console.log(response);

          const {genderId} = response
          this.api.Getgender(genderId).subscribe((data:any)=>{
            // console.log(data);
            const {type} = data
            this.gender = type
          })
          this.contact=response
        }
      })
      
    })
  }
}
