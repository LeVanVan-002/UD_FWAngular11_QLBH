import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/models/user.model';
@Component({
  selector: 'app-myformm',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class Myform1Component implements OnInit {
  @Output('write-userr') userData: EventEmitter<any> = new EventEmitter();
  accounts: Account[] = [];
  data: Account = new Account();

  userForm : FormGroup|any;
  
  constructor() { }

  ngOnInit(): void {
    this.doLoad();
    this.initForm1();
  }

  initForm1(){
    this.userForm = new FormGroup({
      'name':new FormControl(null,[Validators.required,Validators.minLength(3)]),
      'image':new FormControl(null,[Validators.required]),
      'address':new FormControl(null,[Validators.required,Validators.minLength(3)]),
      'phone':new FormControl(null,[Validators.required]),
      'price':new FormControl(null,[Validators.required]),
      'birthday':new FormControl(null,[Validators.required]),
    })
   }
   onSubmit1(){
    if(this.userForm.invalid){
      alert('bạn phải nhập đầy đủ thông tin')
    }else{
      this.data =new Account;
      this.data.name =this.userForm.controls.name.value;
      this.data.image =this.userForm.controls.image.value;
      this.data.address =this.userForm.controls.address.value;
      this.data.phone =this.userForm.controls.phone.value;
      this.data.price =this.userForm.controls.price.value;
      this.data.birthday =this.userForm.controls.birthday.value;
      this.writeAccount();
    }
   
  }
  // thêm 
  writeAccount() {
    let currentData = Object.assign({}, this.data);
    this.userData.emit(currentData);
    this.doSave();
    this.data = new Account;
    alert("thêm nhân viên mới thành công !")
  }
  doSave() {
    localStorage.setItem('user1', JSON.stringify(this.accounts));
  }
  doLoad() {
    let strUser = localStorage.getItem('user1');
    if (strUser) {
      this.accounts = JSON.parse(strUser);
    }
  }
}
