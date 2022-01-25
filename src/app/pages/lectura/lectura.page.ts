import { ModalPopoverPage } from '../../componentes/modal-popover/modal-popover.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.page.html',
  styleUrls: ['./lectura.page.scss'],
})
export class LecturaPage implements OnInit {

  modelData: any;
  public list: Array<any>;

  constructor(
              public modalController: ModalController,
              public dataservice: DataService) {
               }
  ngOnInit() {
    this.dataservice.obtenerUsuarioLogeado();
    const id = this.dataservice.usuarioLoged.id_usuario;
    this.dataservice.getProgresoByLectura(1,1,(status)=>{
      console.log(status);
      this.list = status;
    });
  }
/*   this.list = [
    {id:1,
    title: 'Nivel 1', progress: '50',
    aciertos:'18', fallos:'2' }
]; */

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
