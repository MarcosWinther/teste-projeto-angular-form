import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validate-access',
  templateUrl: './validate-access.component.html',
  styleUrls: ['./validate-access.component.css']
})
export class ValidateAccessComponent implements OnInit {

  public loginForm:FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.loginForm = this.criarFormLogin();
  }

  ngOnInit(): void {
  }

  public criarFormLogin():FormGroup {
    return this.fb.group({
      codeToken: ['', [Validators.required, Validators.minLength(1)]]
    })
  }

  submitForm() {
    if(this.loginForm.valid) {
      this.router.navigate(['clients']);
    }
  }

  voltarParaLogin() {
    this.router.navigate(['']);
  }
}
