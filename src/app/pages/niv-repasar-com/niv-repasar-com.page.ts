import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-niv-repasar-com',
  templateUrl: './niv-repasar-com.page.html',
  styleUrls: ['./niv-repasar-com.page.scss'],
})
export class NivRepasarComPage implements OnInit {

  modelData: any;
  public list: Array<any>;
  public long: Number;
  public progress: number;
  constructor(
              public modalController: ModalController,
              public dataservice: DataService) { }
  ngOnInit() {
    this.dataservice.obtenerUsuarioLogeado();
    const id = this.dataservice.usuarioLoged.id_usuario;
    this.dataservice.getProgresoByModo(id,3,(status)=>{
      console.log(status);
      this.list = status;
      this.long = this.list.length;
      //this.progress = this.list.
    });

  }

  getProgress(id){
    const resultado = this.list.find( level => level.id === id );
    //this.progress = ((resultado.fallos+resultado.aciertos)/10)*100;
    this.progress = ((resultado.aciertos + resultado.fallos)/10)*100;
    return this.progress;
  }

}
