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
    const value_one = (document.getElementById("img_read1") as HTMLInputElement).value;
    const check_one = (document.getElementById("img_read1") as HTMLInputElement).checked;
    const value_two = (document.getElementById("img_read2") as HTMLInputElement).value;
    const check_two = (document.getElementById("img_read2") as HTMLInputElement).checked;
    const value_tree = (document.getElementById("img_read3") as HTMLInputElement).value;
    const check_tree = (document.getElementById("img_read3") as HTMLInputElement).checked;
    const value_four = (document.getElementById("img_read4") as HTMLInputElement).value;
    const check_four = (document.getElementById("img_read4") as HTMLInputElement).checked;

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'CORRECTO FELICITACIONES',
      buttons: ['Aceptar']
    });
    const alert2 = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: 'INCORRECTO SIGA INTENTANDO',
      buttons: ['Aceptar']
    });

    if(check_one == true && parseInt(value_one) == 2) {
      await alert.present();
    } else if (check_two == true && parseInt(value_two) == 2){
      await alert.present();
    } else if (check_tree == true && parseInt(value_tree) == 2) {
      await alert.present();
    } else if (check_four == true && parseInt(value_four) == 2) {
      await alert.present();
    } else {
      await alert2.present();
    }
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
