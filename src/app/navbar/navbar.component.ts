import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logoImgSrc:string="assets/images/logo-dark.png";
  isLogin:boolean=false;
  constructor(public _authService:AuthService) {
    _authService.currentUser.subscribe((data)=>{
      this.isLogin =(data ==null?false:true);
    })
   }
  ngOnInit(): void {
  }
}
