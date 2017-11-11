import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
  
})
export class PasswordComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotologin(){
    this.router.navigateByUrl('/login');
   }
}
