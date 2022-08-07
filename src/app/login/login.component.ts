import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  flag:boolean=false;
  errorMessage:string="";
  constructor(private _authService:AuthService , private _router:Router) { }
  loginGroup:FormGroup=new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]\d{0,10}$/)]),
  });
  
  authLogin(){
    if(this.loginGroup.valid){
      this._authService.login(this.loginGroup.value).subscribe((data)=>{
        if(data.message=="success"){
          this._authService.saveCurrentUser(data.user.first_name,data.user.last_name,data.user.email,data.token);
          this._router.navigate(['/home']);
        }
        else{
          this.flag=true;
          this.errorMessage=data.message;
        }
      })
    }
  }
  ngOnInit(): void {
  }

}
