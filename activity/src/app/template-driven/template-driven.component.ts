import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  public fname: string;
  public gend:string;
  public email:string;
  public newfname: string;
  public newgend:string;
  public newemail:string;
  isSubmit = false;
  public list = ["Male", "Female"];

  constructor() { }

  ngOnInit() {
  }

  storeInfo(){
    this.newfname = this.fname
    this.newemail = this.email
    this.newgend = this.gend
    // this.info.push({FirstName:this.fname, Email:this.email, Gender:this.gend})
    
  }

  // store(){
  //   for(var i = 0; i < )
  // }
  

  onSubmit(){
    this.storeInfo();
    console.log(this.fname);
    this.isSubmit = true;
  }
}
