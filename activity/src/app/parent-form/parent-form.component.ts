import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../model/Student'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit {
  isSubmit = true;
  public Id = 0;
  public fullname: String;
  public emailAdd: String;
  public gender: String;
  public addr:String
  isEdit = false;
  // isShow = false;
  // public parentMessage: String;
  // public fname: String
  // public email: String
  // public gend: String
  studentData: Student[] = []
  data: any
  edit = false
  

  public list = ["Male", "Female"];
  @Output() parentEvent = new EventEmitter();


  onChange(form) {
   
    if (this.edit == false) {
      this.isSubmit = false
      this.Id = this.studentData.length + 1
      this.data = new Student;
      this.data.id = this.Id
      this.data.fullname = this.fullname
      this.data.email = this.emailAdd
      this.data.gender = this.gender
      this.data.address = this.addr
      this.studentData.push(this.data)
      Swal.fire('Success', 'Student Save!', 'success')
      form.form.reset()
      
    } else {
      this.isSubmit = true
      this.edit = false
      this.studentData.forEach(info => {
        if(info.id == this.Id){
          this.data = new Student;
          this.data.id = this.Id
          this.data.fullname = this.fullname
          this.data.email = this.emailAdd
          this.data.gender = this.gender
          this.data.address = this.addr
        this.studentData[this.studentData.indexOf(info)] = this.data
        form.form.reset()
        Swal.fire('Edited', `Student ${this.Id} Edited!`, 'success')

        }
      })
    }
  }

  onEdit(data) {
    this.isSubmit = false
    this.edit = true
    this.Id = data.id
    this.fullname = data.fullname,
    this.emailAdd = data.email
    this.gender = data.gender
    this.addr = data.address
    Swal.fire(`You Will Edit ID: ${data.id}`)
  }

  // reset(form){
  //   form.form.reset()
  //   this.isSubmit = true
  // }

  // add(){
  //   this.isShow = false
  //   console.log("click")
  // }

  constructor() { }

  ngOnInit() {
  }

}
