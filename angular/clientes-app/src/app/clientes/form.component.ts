import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  public cliente: Cliente = new Cliente();

  public titulo: string = "Crear cliente";

  public errores: string[];

  constructor(private clienteService: ClienteService,
    private router: Router,
    private activatedRouter:ActivatedRoute
  ){}

  ngOnInit(){
    this.cargarCliente()
  }

  cargarCliente(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente)
      }
    })
  }

  public create(): void {
    this.clienteService.create(this.cliente)
      .subscribe(cliente => {
        this.router.navigate(['/clientes'])
        swal('Nuevo cliente', `El cliente ${cliente.nombre} ha sido creado con exito`, 'success')
      },
      err => {
        this.errores = err.error.errors as string[];
        console.log("Codigo del error desde el backend " + err.status);
        console.log(err.error.errors);
  
      })
  };

  update():void{
    this.clienteService.update(this.cliente)
    .subscribe(json => {
      this.router.navigate(['/clientes'])
      swal('Cliente Actualizado', `${json.mensaje}: ${json.cliente.nombre}`, 'success')
    },
    err => {
      this.errores = err.error.errors as string[];
      console.log("Codigo del error desde el backend " + err.error.status);
      console.log(err.error.errors);

    })
  }
}
