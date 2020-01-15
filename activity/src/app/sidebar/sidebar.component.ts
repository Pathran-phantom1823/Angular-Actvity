import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `<mat-card class="sidebar"><h1>Sidebar works!</h1><p>This is an Internal template</p></mat-card>`,
  styles: [`h1,p{color:yellowgreen;  justify-content: center; display: flex} .sidebar{max-width: 400px; margin-left: 70vh;
    background-color: blue}`]
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
