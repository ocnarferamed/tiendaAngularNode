import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService} from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  miFormulario: FormGroup;
 
  constructor(public LoginService : LoginService, private router: Router) {}

  ngOnInit() {
    this.miFormulario = new FormGroup({
      'email' : new FormControl(),
      'password' : new FormControl()
    })
  }

  enviarFormulario(){
    
    this.LoginService.createUser(this.miFormulario.value)
    .subscribe(res=>{
      if(res=="User has been created"){
        this.router.navigate(['/']);
      }else{
        console.log('error');
      }
    })
  }
}
