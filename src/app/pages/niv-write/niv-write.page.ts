import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-niv-write',
  templateUrl: './niv-write.page.html',
  styleUrls: ['./niv-write.page.scss'],
})
export class NivWritePage implements OnInit {

  constructor(public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'FELICITACIONES',
      buttons: ['Aceptar']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  
  ngOnInit(): void {
  }

}
