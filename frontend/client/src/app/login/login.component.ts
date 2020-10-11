import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService} from '../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  implements OnInit {
miFormulario: FormGroup;
 
constructor(public LoginService : LoginService, private router: Router) {}

  ngOnInit() {
    this.miFormulario = new FormGroup({
      'email' : new FormControl(),
      'password' : new FormControl()
    })
  }

  registrarme(){
    this.router.navigate(['/signup']);
  }

  enviarFormulario(){
    
    this.LoginService.authenticateUser(this.miFormulario.value)
    .subscribe(res=>{
      if(res=="Validated"){
        this.router.navigate(['/main']);
      }else{
        console.log('error');
      }
    })
  }
}
