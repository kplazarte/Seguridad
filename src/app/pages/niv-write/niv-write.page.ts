import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-niv-write',
  templateUrl: './niv-write.page.html',
  styleUrls: ['./niv-write.page.scss'],
})
export class NivWritePage implements OnInit {

  constructor(public alertController: AlertController,
    private router: Router) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'CORRECTO FELICITACIONES',
      buttons: ['Aceptar']
    });
    const alert2 = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'INCORRECTO SIGUE INTENTANDO',
      buttons: ['Aceptar']
    });

    // GET INPUT VALIE
    const value_write_one = (document.getElementById("value_write") as HTMLInputElement).value;
    console.log("Value: ",value_write_one);

    if (value_write_one == 'carro' || value_write_one == 'Carro' || value_write_one == 'CARRO') {
      await alert.present();
    } else {
      await alert2.present();
    }
     // CLEAR INPUT VALUE
     (document.getElementById("value_write") as HTMLInputElement).value = "";
       
  }
  
  ngOnInit(): void {
  }

}
