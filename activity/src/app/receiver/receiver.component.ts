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
  public childMessage: String;

  onChange(value:string = "Your Being Approved"){
      this.childEvent.emit(value);
  }

  disapproved(value:string = "Your Not Approved"){
    this.childEvent.emit(value);
}

  toggleEditable(event) {
    if ( event.target.checked ) {
        this.childMessage = "Your Form Has Been Approved ";
   }else{
    this.childMessage = "Sorry!, Your Form Has Not Approved";
   }
}

  constructor() { }

  ngOnInit() {
  }

}
