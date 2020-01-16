import { Component, OnInit } from '@angular/core';
// import {FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });
  info = [];
  isSubmit = false;


  reactiveForm = this.fb.group({
    fname: ['', Validators.required],
    email: ['', Validators.required],
    lname: ['', Validators.required],
    address: this.fb.group({
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required]
    })
  })
  fname: string
  email: string
  lname: string
  str: string
  cty: string
  st: string
  zp: string
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  storeInfo(){
    this.info.push(JSON.stringify(this.reactiveForm.value))
  }

  onSubmit() {
    this.isSubmit =true
    this.storeInfo()
    console.log(this.info[0])
  }

}
