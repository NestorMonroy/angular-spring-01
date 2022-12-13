import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, of, map, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = "http://localhost:8080/api/clientes"

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })


  constructor(private http: HttpClient, private router:Router) { }

  getClientes(): Observable<Cliente[]> {
    //return this.http.get<Cliente[]>(this.urlEndPoint)
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as Cliente[])
    )
    //return of(CLIENTES);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post(this.urlEndPoint, cliente, { headers: this.httpHeaders }).pipe(
      map( (response: any ) => response.cliente as Cliente),
      catchError(e => {

        if(e.status == 400){
          return throwError(() => e)
        }

        console.log(e.error.mensaje);
        swal( e.error.mensaje,e.error.error, 'error')
        return throwError(() => e)
      })
    )
  }

  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {

        this.router.navigate(['/clientes'])
        console.log(e.error.mensaje)
        swal('Error al editar', e.error.mensaje, 'error');
        return throwError(() => e)
      })
    )
  }

  update(cliente:Cliente):Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e => {

        if(e.status == 400){
          return throwError(() => e)
        }

        console.log(e.error.mensaje);
        swal(e.error.error, e.error.mensaje, 'error')
        return throwError(() => e)
      })
    )
  }

  delete(id:number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.log(e.error.mensaje);
        swal(e.error.error, e.error.mensaje, 'error')
        return throwError(e)
      })
    )
  }

}
