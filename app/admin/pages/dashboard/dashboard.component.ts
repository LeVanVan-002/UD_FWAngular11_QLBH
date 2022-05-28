import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title:string = 'Chào mừng bạn đến ứng dụng quản lý bán hàng !';
  birthday:Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
