import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-niv-leer',
  templateUrl: './niv-leer.page.html',
  styleUrls: ['./niv-leer.page.scss'],
})
export class NivLeerPage implements OnInit {

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

  // GET INPUT VALUES
  async getValueInput() {
    const value_one = (document.getElementById("img_read1") as HTMLInputElement).value;
    console.log("Value: ",value_one);
  }
  async getValueInput2() {
    const value_two = (document.getElementById("img_read2") as HTMLInputElement).value;
    console.log("Value: ",value_two);
  }
  async getValueInput3() {
    const value_tree = (document.getElementById("img_read3") as HTMLInputElement).value;
    console.log("Value: ",value_tree);
  }
  async getValueInput4() {
    const value_four = (document.getElementById("img_read4") as HTMLInputElement).value;
    console.log("Value: ",value_four);
  }
  ngOnInit() {
  }

}
