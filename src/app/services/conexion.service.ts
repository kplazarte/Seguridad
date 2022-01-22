/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-var */
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(public http: HttpClient) {}

  createUser(user){
    const body = new HttpParams({fromObject: user});
    console.log(body.toString());
    this.http.post('http://localhost:3000/users/',body.toString(),this.httpOptions).toPromise();
  }
}
