import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor ( private _AuthService:AuthService , private _FormBuilder:FormBuilder, private _Router:Router) {  }


  loading:boolean = false;
  errMessage:string = ''

  loginForm:FormGroup = this._FormBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]]
  })


  handleForm():void{
    this.loading = true
    const userData =  this.loginForm.value
    if (this.loginForm.valid === true) {
      this._AuthService.getLogin(userData).subscribe({
        next: (responce)=>{
          if (responce.message == 'success') {
            localStorage.setItem('eToken', responce.token)
            this.loading = false;
            this._Router.navigate(['/app/dashbord'])
          }
        },
        error: (err)=>{
          this.loading = false
          this.errMessage = err.error.message;
        },
      })
    }
    else{
      this.loginForm.markAllAsTouched();
    }
  }


  goToHome(){
    this._Router.navigate(['home'])
  }

}
