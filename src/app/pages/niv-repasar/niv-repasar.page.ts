import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-niv-repasar',
  templateUrl: './niv-repasar.page.html',
  styleUrls: ['./niv-repasar.page.scss'],
})
export class NivRepasarPage implements OnInit {

  modelData: any;
  public list: Array<any>;
  public myFlag: boolean = false;
  constructor(
              public modalController: ModalController) { }
  ngOnInit() {
    this.list = [
      {id:1,
      title: 'Nivel 1', progress: '50',
      aciertos:'18', fallos:'2', estado:'init' },

      {id:2,
      title: 'Nivel 2', progress: '50',
      aciertos:'15', fallos:'5', estado:'init' },

      {id:3,
      title: 'Nivel 3', progress: '0',
      aciertos:'0', fallos:'0',  estado:'noin'
      },

      {id:4,
      title: 'Nivel 4', progress: '0',
      aciertos:'0', fallos:'0',estado:'noin'
      },

      {id:5,
      title: 'Nivel 5', progress: '0',
      aciertos:'0', fallos:'0', estado:'noin'
      }

  ];





  }

}
