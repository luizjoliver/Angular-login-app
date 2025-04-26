import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  imports: [DefaultLoginLayoutComponent,
    ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!:FormGroup

  constructor(private router:Router, private toastr: ToastrService,){
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }



  submit(){
    this.toastr.success(
      `Email: ${this.loginForm.value.email}<br>
       Senha: ${this.loginForm.value.password}<br>
       Pronto para enviar ao backend!`,
      'Dados do Login',
      {
        enableHtml: true,
        timeOut: 5000
      }
    )
  }
  navigate(){
    this.router.navigate(['/signup'])
  }
}
