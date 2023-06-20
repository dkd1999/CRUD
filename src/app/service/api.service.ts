import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminSchema} from 'src/models/adminSchema';
import { ContactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  base_url = 'https://c-r-u-d-server.onrender.com';

  constructor(private http: HttpClient, private router:Router) {}
  // get all contacts
  getAllContacts() {
    // console.log(this.http.get(`${this.base_url}/users`));
    return this.http.get(`${this.base_url}/users`);
  }

  
   // particular gender
   Getgender(id: any) {
    return this.http.get(`${this.base_url}/genders/${id}`);
  }
  // get all genders
  Getgenders() {
    return this.http.get(`${this.base_url}/genders`);
  }
  // view a contact
  viewContact(id: any) {
    //arg as id as id changes on different contacts
    return this.http.get(`${this.base_url}/users/${id}`);
  }
  // edit contact
  editContact(id: any, contact: ContactSchema) {
    return this.http.put(`${this.base_url}/users/${id}`, contact);
  }
  // add contact
  addContact(contact: ContactSchema) {
    return this.http.post(`${this.base_url}/users`, contact);
  }
  // delete contact
  delContact(id: any) {
    return this.http.delete(`${this.base_url}/users/${id}`);
  }
  // add admin data
  // addadmin(admindata:AdminSchema){
  //   return this.http.post(`${this.base_url}/admin`, admindata)
  // }
  // view admin data
  // viewadmin(id:any) {
  //   return this.http.get(`${this.base_url}/admin/${id}`)
  // }



  // login
  loginusername: string = '';
  loginuserpswd: string = '';

  registername:string='';
  registerpswd:string=''
  registerphoto:string=''
  registerconfirmpassword:string=''
  username: any;
  password: string = '';
  userDetails: any = {};
  // photo: string = '';
  confirmpassword: string = '';
  outputcontent: any;

  saveData() {
    if (this.userDetails) {
      localStorage.setItem('database', JSON.stringify(this.userDetails));
    }
  }

  getData() {
    this.userDetails = JSON.parse(localStorage.getItem('database')!);
  }
  getusername(event: any) {
    console.log(event.target.value);
    this.username = localStorage.getItem('user');
  }

  getuserpswd(event: any) {
    console.log(event.target.value);
    this.password = event.target.value;
  }
  logout() {
    localStorage.removeItem('user');
    console.log('rem');
  }


  // getuserphoto(event:any){
  //   console.log(event.target.value);
  //   this.photo = event.target.value
  // }
  register() {
    let uname = this.registername;
    let pswd = this.registerpswd;
    let phot  = this.registerphoto
    console.log(uname);
    console.log(pswd);
   console.log(phot);
   
  }
}
