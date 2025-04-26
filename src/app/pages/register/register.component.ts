import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

type RegisterForm = {
  name:FormControl;
  email:FormControl;
  password:FormControl;
  passwordConfirm:FormControl
}

@Component({
  selector: 'app-register',
  imports: [DefaultLoginLayoutComponent,
    ReactiveFormsModule, PrimaryInputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!:FormGroup<RegisterForm>

  constructor(private router:Router, private toastr: ToastrService,){
    this.registerForm = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(6)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      passwordConfirm:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }



  submit(){
    this.toastr.success(
      `Email: ${this.registerForm.value.email}<br>
       Senha: ${this.registerForm.value.password}<br>
       Confirmação Senha: ${this.registerForm.value.passwordConfirm}<br>
       Pronto para enviar ao backend!`,
      'Dados de registro',
      {
        enableHtml: true,
        timeOut: 5000
      }
    )
  }
  navigate(){
    this.router.navigate(['login'])
  }
}
