/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-var */
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

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
    // this.http.post('https://api-edusmart.herokuapp.com/users',body.toString(),this.httpOptions).toPromise().then(msg=>console.log(msg));
    this.http.post('http://localhost:3000/users',body.toString(),this.httpOptions).toPromise().then(msg=>console.log(msg));
  }

  obtenerDatos(){
    //return this.http.get('https://api-edusmart.herokuapp.com/users');
    return this.http.get('http://localhost:3000/users');

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
  logearse(usuario,callback){
    this.obtenerDatos()
    .subscribe(
      (data)=>{
        this.usuarios = data;
        this.productoEncontrado = this.usuarios.find(user=>user.usuario === usuario.usuario && user.password === usuario.password );
        if (this.productoEncontrado) {
          callback(this.productoEncontrado);
        } else{
          callback(false);
        }
      },
      (error)=>console.log(error)
    );
  }
}
