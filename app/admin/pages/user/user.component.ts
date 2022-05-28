import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  isShowEnterAccount: boolean = false;
  isShowEditAccount: boolean = false;
  isShowButton: boolean = true;
  accounts: Account[] = [];
  oneaccount: Account = new Account();
  currentIndex: number = 0;
  constructor() { }
  ngOnInit(): void {
    this.doLoad();
  }
  //Nhận vị trí của 1 đối tượng trong mảng accounts
  getAccountIndex(index: number) {
    this.isShowEditAccount = true;
    this.isShowButton = !this.isShowEditAccount;
    this.oneaccount = this.accounts[index];
    this.currentIndex = index;
  }
  //Nhận dữ liệu đã đc chỉnh sửa từ EditComponet và cập nhật lại dữ liệu
  getAccountEdited(arg: Account) {
    this.isShowEditAccount = false;
    this.isShowButton = !this.isShowEditAccount;
    arg.birthday = new Date();
    this.accounts[this.currentIndex] = arg;
  }
  //show form viết ghi chú
  showEnterAccount() {
    this.isShowEnterAccount = true;
    this.isShowButton = !this.isShowEnterAccount;
  }
  //Nhận dữ liệu của 1 ghi chú từ MyFormComponet
  getAccount(data: Account) {
    this.isShowEnterAccount = false;
    this.isShowButton = !this.isShowEnterAccount;
    this.accounts.push(data);
    this.doSave();
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
