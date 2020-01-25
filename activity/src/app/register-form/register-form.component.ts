import { Component, OnInit } from '@angular/core';
import { RequestService } from "../request.service";
import { User } from "../model/users";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public values: User[] = [];
  public data: any

  isSubmit = true;
  isEdit = false;
  edit = false

  public id: Number


  public fname: string
  public username: string
  public emailAdd: string
  public website: string

  constructor(private http: RequestService) { }

  onSubmit(form) {
    if (this.edit == false) {
      console.log('click');
      this.id = this.values.length + 1
      this.data = new User;
      this.http.createUser(this.data).subscribe(res => {
        console.log("Submit Data", res)
        this.data = res
        this.data.id = this.id
        this.data.name = this.fname
        this.data.email = this.emailAdd
        this.data.username = this.username
        this.data.website = this.website
        this.values.push(this.data)
        Swal.fire('Success', 'Student Save!', 'success')
      })

    } else {
      this.isEdit = false
      this.isSubmit = true
      this.edit = false
        this.http.updateUser(this.data,this.id).subscribe((res) => {
          Swal.fire('Edited', `Student ${this.id} Edited!`, 'success')
          console.log("Edited Data: ", res)
        });
     
      this.values.forEach(info => {
        if (info.id == this.id) {
          // this.data = new User;
          // info.id = this.id
          info.name = this.fname
          info.email = this.emailAdd
          info.username = this.username
          info.website = this.website
          form.form.reset()
        }
      })
    }

  }

  onEdit(data) {
    this.isSubmit = false
    this.edit = true
    this.id = data.id
    this.fname = data.name
    this.emailAdd = data.email
    this.username = data.username
    this.website = data.website
    Swal.fire(`You Will Edit ID: ${data.id}`)
  }

  reset(form) {
    form.form.reset()
    this.isEdit = false
    this.isSubmit = true
    this.edit = false
  }

  ngOnInit() {
    this.http.getAllUsers().subscribe((data) => {
      this.values = data
    })
  }
}
