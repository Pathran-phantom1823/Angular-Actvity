import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  public fullname: String;
  public enrolled:String;
  public gender: String;
  // public parentMessage: String;
  public fname: String
  public enr: String
  public gend: String
  public list = ["Male", "Female"];
  @Output() parentEvent = new EventEmitter();
  

  onChange() {
    console.log('clik')
    this.fname = this.fullname;
    this.enr = this.enrolled;
    this.gend = this.gender;
  }

  toggleEditable(event) {
    if ( event.target.checked ) {
        this.enrolled = "Yes";
   }else{
    this.enrolled = "No";
   }
}


  constructor() { }

  ngOnInit() {
  }

}
