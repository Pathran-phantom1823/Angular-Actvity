import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentMessage: String;
  @Output() childEvent = new EventEmitter();
  public childMessage: String;

  onChange(value:string){
      this.childEvent.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
