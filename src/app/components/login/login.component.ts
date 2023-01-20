import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    private router: Router
  ) {
    this.loginForm();
  }

  requiredForm!: FormGroup;
  submitted = false;
  data: any;
  token: any;

  loginForm(){
    this.requiredForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required] ]
    });
  }

  ngOnInit(): void {
    this.loginForm();
  }

  get f() {
    return this.requiredForm.controls;
  }

  name = "Angular " + VERSION.major;
  @ViewChild("mm")
  mm!: ElementRef;
  message() {
    this.mm.nativeElement.innerHTML = "All fields are required!";
  }

  submit() {
    this.submitted = true;

    if(this.requiredForm.invalid){
      console.log('Tutti i campi sono obbligatori');
      return;
    }

    localStorage.setItem('isLogged', '0');
    console.log(this.requiredForm.value);
    this.formService.login(JSON.stringify(this.requiredForm.value)).subscribe(res => {
      this.data = res;
      console.log(this.data.message);

      if(this.data.message == '1') {
        localStorage.setItem('isLogged', '1');
      }else {
        console.log("Email o password errata");
        this.mm.nativeElement.innerHTML = "wrong username or password!";
      }
    });
  }
}
