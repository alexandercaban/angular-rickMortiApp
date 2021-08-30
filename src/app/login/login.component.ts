import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private cookieService: CookieService, private router: Router) { }
  form :FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      frmLogin    : ['', Validators.required],
      frmPassword : ['' , Validators.required]
    })
  }

  login(){
   this.cookieService.set('login', this.form.value.frmLogin);
   this.cookieService.set('password', this.form.value.frmPassword);
   this.router.navigate(['/home']);
  }

}
