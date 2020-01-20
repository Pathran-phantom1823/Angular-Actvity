import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {Student} from '../model/Student'

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {
  @Input() student:Student[];
  
  public filterData:Array<Student>
  data: any
  @Output() hideEvent = new EventEmitter();
  @Output() infoEvent = new EventEmitter();

  

  

  onEdit(each){
    this.infoEvent.emit(each)
  }

  

  constructor() { }

  ngOnInit() {
  }

}
