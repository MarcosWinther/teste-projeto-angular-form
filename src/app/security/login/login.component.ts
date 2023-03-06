import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm:FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.loginForm = this.criarFormLogin();
  }

  ngOnInit(): void {
  }

  public criarFormLogin():FormGroup {
    return this.fb.group({
      username: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  submitForm() {
    if(this.loginForm.valid) {
      this.router.navigate(['valid-access']);
    }
  }

  private validarFormFields(formGroup:FormGroup) {

  }
}
