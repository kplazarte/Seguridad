import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  obtenerUsuarioLogeado(){
    return JSON.parse(localStorage.getItem('logeado'));
  }
}
