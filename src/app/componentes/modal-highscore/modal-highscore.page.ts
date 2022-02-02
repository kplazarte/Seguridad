import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-highscore',
  templateUrl: './modal-highscore.page.html',
  styleUrls: ['./modal-highscore.page.scss'],
})
export class ModalHighscorePage implements OnInit {

  @Input() lista:Array<any>;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModel() {

    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const close: string = 'Modal Removed';
    await this.modalController.dismiss(close);
  }

}
