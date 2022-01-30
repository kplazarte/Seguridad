import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-niv-write',
  templateUrl: './niv-write.page.html',
  styleUrls: ['./niv-write.page.scss'],
})
export class NivWritePage implements OnInit {
  id:any;
  public list: Array<any>;
  img1: string;
  answer:string;
  answer2:string;
  id_pregunta:number;
  id_user:any;

  constructor(public alertController: AlertController,
    private route: ActivatedRoute,public dataservice: DataService,
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

    if (value_write_one.toUpperCase() == this.answer.toUpperCase() || value_write_one.toUpperCase() == this.answer2.toUpperCase()) {
      await alert.present();
      this.respCorrecta(this.id_user,this.id,1,0,this.id_pregunta,2);
    } else {
      await alert2.present();
      this.respCorrecta(this.id_user,this.id,0,1,this.id_pregunta,2);
    }
     // CLEAR INPUT VALUE
     (document.getElementById("value_write") as HTMLInputElement).value = "";

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.id_user = this.dataservice.usuarioLoged.id_usuario;
    this.dataservice.getWriteLevelList(this.id_user,this.id,(status)=>{
      console.log(status);
      this.list = status;
      console.log(this.list);
      if (this.list[0]!=undefined) {
        this.id_pregunta = this.list[0].id_pregunta;
        this.img1 = this.list[0].imagen;
        this.answer = this.list[0].answer;
        this.answer2 = this.list[0].answer2;
      } else {
        this.presentAlert2();
        this.router.navigate(['/lista-niveles']);
      }


    });
  }

  
  respCorrecta(idU,nivel,acierto,error,idP,modo){
    this.dataservice.respuestaContestada(idU,nivel,acierto,error,idP,modo,(status)=>{
      console.log(status);
      this.ngOnInit();
    });
    
  }

  async presentAlert2() {
    const alert2 = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      message: 'Todas las preguntas ya fueron respondidas',
      buttons: ['OK']
    });

    await alert2.present();
  }

}
