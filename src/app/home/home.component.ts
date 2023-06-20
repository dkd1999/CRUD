import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mobile:any
constructor(private data:ApiService){
  
}

ngOnInit(): void {
  setInterval(()=>{
    if(window.screen.availWidth < 600){
      this.mobile = true
    }
  },200)
  
}

}
