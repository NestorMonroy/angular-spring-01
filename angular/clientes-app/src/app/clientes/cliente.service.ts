import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of, map, catchError, throwError, tap } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { formatDate, DatePipe, registerLocaleData } from '@angular/common';
import { Region } from './region';
import { AuthService } from '../usuarios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = "http://localhost:8080/api/clientes"

  //private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient, private router: Router, private authService:AuthService) { }
  /*
  private agregarAuthorizationHeader(){
    let token = this.authService.token;
    if(token != null ){
      return this.httpHeaders.append('Authorization', 'Bearer ' + token)
    }
    return this.httpHeaders;
  }*/

/*
  private isNoAutorizado(e): boolean {
    if (e.status == 401 ){
      if(this.authService.isAuthenticated()){
        this.authService.logout();
      }

      this.router.navigate(['/login'])
      return true;
    }
    if (e.status == 403){
      swal('Acceso denegado', `Hola ${this.authService.usuario.username} no tienes acceso a esto`, 'warning')
      this.router.navigate(['/clientes'])
      return true;
    }
    return false;
  };
*/

  getRegiones(): Observable<Region[]>{
    return this.http.get<Region[]>(this.urlEndPoint + '/regiones',/* {headers : this.agregarAuthorizationHeader()} */).pipe(
      catchError(e=>{
        //this.isNoAutorizado(e);
        return throwError(() => e)
      })
    )
  }

  getClientes(page: number): Observable<any> {
    //return this.http.get<Cliente[]>(this.urlEndPoint)
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      tap((response:any) => {
       
        console.log('ClienteService: tap 1');
        
        (response.content as Cliente[]).forEach(
          cliente =>{
            console.log(cliente.nombre);
            
          }
        )
      }),
      map((response:any) => {
         (response.content as Cliente[]).map(cliente => {
          cliente.nombre = cliente.nombre.toUpperCase();
       
          //let datePipe = new DatePipe('es')
          //cliente.createAt = datePipe.transform(cliente.createAt, 'EEEE dd, MMMM yyy')
          //cliente.createAt = formatDate(cliente.createAt, 'dd-MM-yyy', 'en-US')
          return cliente;
        });
        return response;
      }),
      tap(response => {
        console.log('ClienteService: tap 2');
        (response.content as Cliente[]).forEach(
          cliente =>{
            console.log(cliente.nombre);
            
          }
        )
      }),
    )
    //return of(CLIENTES);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post(this.urlEndPoint, cliente).pipe(
      map((response: any) => response.cliente as Cliente),
      catchError(e => {

       /* if (this.isNoAutorizado(e)) {
          return throwError(() => e)
        }
      */
        if (e.status == 400) {
          return throwError(() => e)
        }
        if(e.error.mensaje){
        console.log(e.error.mensaje)};
        return throwError(() => e)
      })
    )
  }

  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
       if(e.status != 401 && e.error.mensaje){
        this.router.navigate(['/clientes'])
        
        if(e.error.mensaje){
          console.log(e.error.mensaje)}
       }
 
        
        return throwError(() => e)
      })
    )
  }

  update(cliente: Cliente): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente, ).pipe(
      catchError(e => {
  
        if (e.status == 400) {
          return throwError(() => e)
        }

        console.log(e.error.mensaje);
        return throwError(() => e)
      })
    )
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, ).pipe(
      catchError(e => {
        if(e.error.mensaje){
          console.log(e.error.mensaje)}
        return throwError(() => e)
      })
    )
  }

  subirFoto(archivo: File, id):Observable<HttpEvent<{}>>{
    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("id", id);
    let httpHeaders = new HttpHeaders();
    let token = this.authService.token;
    if(token != null) {
      httpHeaders= httpHeaders.append('Authorization', 'Bearer '+ token)
    }
    const req = new HttpRequest("POST", `${this.urlEndPoint}/upload`, formData,{
      reportProgress:true,
      headers:httpHeaders
    })

    return this.http.request(req)
  }

}
