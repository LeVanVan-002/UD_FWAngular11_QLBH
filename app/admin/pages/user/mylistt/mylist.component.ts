import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from 'src/app/models/user.model';
@Component({
  selector: 'app-mylistt',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss']
})
export class Mylist1Component implements OnInit {

  @Input('show-userr') listUsers: Account[] = [];
  accounts: Account[] = [];
  @Output('edit-userr') lol2: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.doLoad();
  }
  //Xóa 
  deleteAccount(index: number) {
    this.listUsers.splice(index, 1);
    this.doSave();
    alert("đã xóa Tài Khoản thành công ");
  }
  // chỉnh sửa đến 
  sendAccountIndex(index: number) {
    this.lol2.emit(index);
  }
  doSave() {
    localStorage.setItem('user', JSON.stringify(this.accounts));
  }
  doLoad() {
    let strUser = localStorage.getItem('user');
    if (strUser) {
      this.accounts = JSON.parse(strUser);
    }
  }

}
