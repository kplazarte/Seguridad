import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  usuarioLoged: any;

  constructor(public http: HttpClient) {
  }

  obtenerUsuarioLogeado(){
    this.usuarioLoged = JSON.parse(localStorage.getItem('logeado'));
  }

  getProgresoByLectura(id,modo,callback){
    this.http.get(`http://localhost:3000/niveles/${id}/${modo}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }
}
