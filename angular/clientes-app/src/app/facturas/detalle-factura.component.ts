import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Factura } from './models/factura';
import { FacturaService } from './services/factura.service';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  
})
export class DetalleFacturaComponent {

  factura: Factura;
  titulo: string = 'Factura';


  constructor(private facturaService:FacturaService,
     private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(p => {
      let id = +p.get('id');
      this.facturaService.getFactura(id).subscribe(factura => this.factura = factura)
    })
  }
}
