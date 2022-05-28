import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user2.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User = new User;
  
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(frm:NgForm){
    if(frm.valid){
      if(this.authService.doLogin(this.user)){
        this.router.navigate(['admin']);
      }else{
        alert('Thông tin đăng nhập sai');
      }
    }else{
      alert('Vui lòng nhập đủ thông tin đăng nhâp')
    }
  }

}
