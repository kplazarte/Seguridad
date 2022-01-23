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
      message: 'FELICITACIONES',
      buttons: ['Aceptar']
    });

    await alert.present();

    // GET INPUT VALIE
    const value_write_one = (document.getElementById("value_write") as HTMLInputElement).value;
    console.log("Value: ",value_write_one);

    // REFRESH PAGES
    this.router.navigate(['/niv-write']);

    // CLEAR INPUT VALUE
    const clear_value = (document.getElementById("value_write"))
    clear_value.innerHTML = "";
    
  }

  // GET INPUT VALUES
  // async getValueInput() {
    
  // }
  
  ngOnInit(): void {
  }

}
