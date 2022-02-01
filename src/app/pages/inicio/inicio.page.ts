import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../../services/data.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario: any;
  nombre:string;
  public list: Array<any>;
  public list2: Array<any>;
  public list3: Array<any>;
  aclec:number = 0;
  acesc:number = 0;
  accom:number = 0;
  totalaciertos:number;
  constructor(private menu: MenuController,private storage: Storage,public dataservice: DataService,
    public alertController: AlertController,private router: Router) { }

  ngOnInit() {

    this.dataservice.obtenerUsuarioLogeado();
    const id = this.dataservice.usuarioLoged.id_usuario;
    //console.log("id User" ,id);
    this.dataservice.getProgresoByModo(id,1,(status)=>{
      this.list = status;
      for (let i = 0; i < this.list.length; i++) {
        const acierto = Number(this.list[i].aciertos);
        this.aclec+=acierto;
      }

    });
    this.dataservice.getProgresoByModo(id,2,(status2)=>{
      this.list2 = status2;
      for (let i = 0; i < this.list2.length; i++) {
        const acierto = Number(this.list2[i].aciertos);
        this.acesc+=acierto;
      }
      //console.log(this.acesc);

    });

    this.dataservice.getProgresoByModo(id,3,(status3)=>{
      this.list3 = status3;
      for (let i = 0; i < this.list3.length; i++) {
        const acierto = Number(this.list3[i].aciertos);
        this.accom+=acierto;

      }
      this.totalaciertos = (this.aclec+this.acesc+this.accom)*5;
      //console.log(this.totalaciertos);


    });



  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  async getData(key) {
    const keyVal = await this.storage.get(key);
    return keyVal;
  }

  async presentAlert2() {
    const alert2 = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `${this.dataservice.usuarioLoged.usuario}`,
      subHeader:`Representante: ${this.dataservice.usuarioLoged.nombre_padre}`,
      message: `<h4> Nombre:  ${this.dataservice.usuarioLoged.nombre_hijo} </h4> `,
      buttons: ['OK']
    });

    await alert2.present();


  }

  async presentAlert3() {
    const alert2 = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Tienes ${this.totalaciertos} puntos`,
      message: `
      <ul>
      <li><h4> Ganas 5 puntos por cada pregunta contestada correctamente </h4></li>
      </ul>
       `,
      buttons: ['Entendido']
    });

    await alert2.present();


  }



}
