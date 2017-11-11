import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gotologin(){
    this.router.navigateByUrl('/login');
  }
}
