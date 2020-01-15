import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  isSubmit = false;
  public message: String;
  public parentMessage: String;
  @Output() parentEvent = new EventEmitter();

  onChange() {
    console.log('clik')
    this.parentMessage = this.message;
  }
  constructor() { }

  ngOnInit() {
  }

}
