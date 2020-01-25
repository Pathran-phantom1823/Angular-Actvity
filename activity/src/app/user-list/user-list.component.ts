import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RequestService } from "../request.service";
import { User } from "../model/users";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit { 
  @Input() values: User[];
  isEdit = false
  @Output() infoEvent = new EventEmitter();
  @Output() showEvent = new EventEmitter();
  // public data: any

  // public id:number
  // public name:string
  // public uname:string
  // public email:string
  // public web:string

  constructor(private http:RequestService) { }

  edit(item){
    this.infoEvent.emit(item)
    this.showEvent.emit(this.isEdit)
  }

  delete(id){
    this.http.deleteUser(id).subscribe(res =>{
      this.values.splice(id,1)
      console.log(id);
      
      console.log(res)
    })

  
    
      // for(let i = 0; i<this.values.length; ++i){
      //   if(this.values[i].id === id){
      //     this.values.splice(i, 1)
      //   }
      // }
  }

  // onSubmit(){
  //     console.log('click');
      
  //     this.id = this.values.length + 1
  //     this.data = new User;
  //     this.data.id = this.id
  //     this.data.name = this.name
  //     this.data.email = this.email
  //     this.data.username = this.uname
  //     this.data.website = this.web
  //     this.values.push(this.data)
      
  // }

  ngOnInit() {

      // this.http.getAllUsers().subscribe((data:Array<any>=[])=> {
      //     this.values = data
          
      // })
  }

}
