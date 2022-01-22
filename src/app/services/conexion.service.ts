/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-var */
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import { isThisHour } from 'date-fns';
@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  usuarios: any;
  public productoEncontrado;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(public http: HttpClient) {}

  createUser(user){
    const body = new HttpParams({fromObject: user});
    this.http.post('http://localhost:3000/users/',body.toString(),this.httpOptions).toPromise().then(msg=>console.log(msg));
  }

  obtenerDatos(){
    return this.http.get('http://localhost:3000/users/');
  }

  getUsers(usuario,callback){
    this.obtenerDatos()
    .subscribe(
      (data)=>{
      this.usuarios = data;
      this.productoEncontrado = this.usuarios.find(user=>user.usuario === usuario );
      if (this.productoEncontrado) {
        callback(true);
      } else {
        callback(false);
      }
    },
    (error)=>console.log(error.message));
  }
}
