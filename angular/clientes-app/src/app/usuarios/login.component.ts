import { Component } from '@angular/core';
import swal from 'sweetalert2';
import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent {

  titulo: string ='Por favor Sign in'
  usuario: Usuario;

  constructor(private authService:AuthService, private router:Router) {
    this.usuario = new Usuario();

  }

  ngOnInit(){
    if(this.authService.isAuthenticated()){
      swal('login', `Hola ${this.authService.usuario.username} ya estas autenticado`, 'info');
      this.router.navigate(['/clientes'])
    }
  }

  login():void {
    console.log(this.usuario);
    if(this.usuario.username == null || this.usuario.password ==null){
      swal('Error login', 'Username o password vacias', 'error');
      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);
      
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario= this.authService.usuario;
      this.router.navigate(['/clientes'])
      swal('Login', `Hola ${usuario.username}, has iniciado`, 'success')
    }, err => {
      if(err.status == 400 ){
        swal('Error login', 'Usuario o password incorrectas', 'error');
      }
    })
  }
}
