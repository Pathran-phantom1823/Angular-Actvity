import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  // @Input() parentMessage: String;
  @Input() fname: String;
  @Input() enr: String;
  @Input() gend: String;
  @Output() childEvent = new EventEmitter();
  @Output() infoEvent = new EventEmitter();
  public childMessage: String;
  students: Array<any> = [];
  disapprovedstudents: Array<any> = [];
  counter: Number;

  onChange(value: string = "Your Being Approved") {
    console.log(this.counter)
    this.childEvent.emit(value);
    this.students.push({ id: this.counter, fullname: this.fname, enrolled: this.enr, gender: this.gend })
    console.log(this.students)
    for (var i = 0; i < this.students.length; ++i) {
      this.counter = i;
    }this.counter = i;
    

  }

  disapproved(value: string = "Your Not Approved") {
    this.childEvent.emit(value);
    this.disapprovedstudents.push({ id: this.counter, fullname: this.fname, enrolled: this.enr, gender: this.gend })
    console.log(this.disapprovedstudents)
    this.infoEvent.emit(this.disapprovedstudents)
    for (var i = 0; i < this. disapprovedstudents.length; ++i) {
      this.counter = i;
    }this.counter = i;

  }

  toggleEditable(event) {
    if (event.target.checked) {
      this.childMessage = "Your Form Has Been Approved ";
    } else {
      this.childMessage = "Sorry!, Your Form Has Not Approved";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
