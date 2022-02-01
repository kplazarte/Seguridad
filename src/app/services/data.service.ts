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

  getProgresoByModo(id,modo,callback){
    this.http.get(`http://localhost:3000/niveles/${id}/${modo}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  obtenerNiveles(callback){
    this.http.get(`http://localhost:3000/niveles`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  getReadLevelList(id,nivel,callback){

    this.http.get(`http://localhost:3000/questions/read/${id}/${nivel}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  getWriteLevelList(id,nivel,callback){

    this.http.get(`http://localhost:3000/questions/write/${id}/${nivel}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  getCompLevelList(id,nivel,callback){

    this.http.get(`http://localhost:3000/questions/comp/${id}/${nivel}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  getAnsweredReadList(id,nivel,callback){

    this.http.get(`http://localhost:3000/answered/read/${id}/${nivel}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  getAnsweredWriteList(id,nivel,callback){

    this.http.get(`http://localhost:3000/answered/write/${id}/${nivel}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  getAnsweredCompList(id,nivel,callback){

    this.http.get(`http://localhost:3000/answered/comp/${id}/${nivel}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

  respuestaContestada(idU,nivel,acierto,error,idP,modo,callback){
    this.http.get(`http://localhost:3000/questions/read/resp/${idU}/${nivel}/${acierto}/${error}/${idP}/${modo}`).subscribe(
      (data)=>{
        callback(data);
      },
      (error)=>console.log(error.message)
    );
  }

}
