import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from "@angular/router";
import { RequestService } from "../request.service";


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  UserId:number
  userInfo:Array<any>= []

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: RequestService
  ) { }

  ngOnInit() {
    this.UserId = this.route.snapshot.params['id']
    
    
    this.http.getUser(this.UserId).subscribe(res =>{
      
      this.userInfo.push(res)
      console.log(this.userInfo)
    })

  }

}
