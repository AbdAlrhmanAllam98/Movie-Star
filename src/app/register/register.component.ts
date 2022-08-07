import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  flag:boolean=false;
  errors:string="";
  constructor(private _authService:AuthService , private _router:Router) { }
  registerForm:FormGroup=new FormGroup({
    'first_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'last_name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]\d{3,10}$/)])
  });
  getRegisterInfo(){
    if(this.registerForm.valid){
      this._authService.register(this.registerForm.value).subscribe((data)=>{
        if(data.message=="success"){
          this._router.navigate(['/home']);
        }
        else{
          this.flag=true;
          this.errors=data.errors.email.message;
        }
      });
    }

  }
  

  ngOnInit(): void {
  }

}
