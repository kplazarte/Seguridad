import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-niv-comp',
  templateUrl: './niv-comp.page.html',
  styleUrls: ['./niv-comp.page.scss'],
})
export class NivCompPage implements OnInit {

  id:any;
  public list: Array<any>;
  audio: string;
  img1: string;
  img2:string;
  img3: string;
  img4:string;
  answer:number;
  id_pregunta:number;

  constructor(public alertController: AlertController,
    private route: ActivatedRoute,public dataservice: DataService) { }

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

    if(check_one == true && parseInt(value_one) == this.answer) {
      await alert.present();
    } else if (check_two == true && parseInt(value_two) == this.answer){
      await alert.present();
    } else if (check_tree == true && parseInt(value_tree) == this.answer) {
      await alert.present();
    } else if (check_four == true && parseInt(value_four) == this.answer) {
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
    this.id = this.route.snapshot.paramMap.get('id');
    const id_user = this.dataservice.usuarioLoged.id_usuario;
    this.dataservice.getCompLevelList(id_user,this.id,(status)=>{
      console.log(status);
      this.list = status;
      //console.log(this.list);
      this.audio = this.list[0].audio;
      this.id_pregunta = this.list[0].id_pregunta;
      this.img1 = this.list[0].op1;
      this.img2 = this.list[0].op2;
      this.img3 = this.list[0].op3;
      this.img4 = this.list[0].op4;
      this.answer = Number(this.list[0].answer);
      console.log(this.audio);

    });
  }

}
