import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isSubmit = false;
  title = "Form"
  public value: String;

  submit(value: string){
    this.isSubmit = true;
    console.log("click")
    this.value = "Welcome! "+value;
  }

  isClick(){
    if(this.isSubmit == true){
      alert("Form is Submitted!")
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
