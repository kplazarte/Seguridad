import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario: any;

  constructor(private menu: MenuController,private storage: Storage,private userloged: DataService) { }

  ngOnInit() {
    const usuario = this.userloged.obtenerUsuarioLogeado();
    this.usuario = usuario;
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  async getData(key) {
    const keyVal = await this.storage.get(key);
    return keyVal;
  }

}
