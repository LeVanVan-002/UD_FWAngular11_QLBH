import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from 'src/app/models/user.model';
@Component({
  selector: 'app-editformm',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.scss']
})
export class Editform1Component implements OnInit {
  @Input('edit-formm') dataAccountEdit: Account = new Account();

  @Output('save-editt') saveAccountEdited: EventEmitter<any> = new EventEmitter();
  accounts: Account[] = [];
  // data: Account = new Account();
  constructor() { }

  ngOnInit(): void {
    this.doLoad();
  }
  //Gửi dữ liệu của 1 ghi chú đã đc chỉnh sửa đến ParentComponet Account
  saveAccountEdit() {
    this.saveAccountEdited.emit(this.dataAccountEdit);
    this.doSave();
    this.dataAccountEdit = new Account;
    alert("đã cập nhật nhân viên thành công !")
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
