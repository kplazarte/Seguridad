import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPopoverPage } from '../../componentes/modal-popover/modal-popover.page';

@Component({
  selector: 'app-pronun',
  templateUrl: './pronun.page.html',
  styleUrls: ['./pronun.page.scss'],
})
export class PronunPage implements OnInit {

  modelData: any;
  public list: Array<any>;
  constructor(
              public modalController: ModalController) { }
  ngOnInit() {
    this.list = [
      {id:1,
      title: 'Nivel 1', progress: '85',
      aciertos:'15', fallos:'5' },

      {id:2,
      title: 'Nivel 2', progress: '50',
      aciertos:'10', fallos:'10' },

      {id:3,
      title: 'Nivel 3', progress: '25',
      aciertos:'0', fallos:'0',
      },

      {id:4,
      title: 'Nivel 4', progress: '10',
      aciertos:'0', fallos:'0',
      },

      {id:5,
      title: 'Nivel 5', progress: '0',
      aciertos:'0', fallos:'0',
      }

  ];
  }


  async openIonModal(id) {
    const resultado = this.list.find( level => level.id === id );
    const modal = await this.modalController.create({
      component: ModalPopoverPage,
      cssClass: 'my-custom-class',
      componentProps:{
        nombre: resultado.title,
        aciertos: resultado.aciertos,
        fallos: resultado.fallos
      }
    });
    modal.onDidDismiss().then((modelData)=>{
      if (modelData !== null) {

        this.modelData = modelData.data;
      }
    });
    return await modal.present();

  }

}
