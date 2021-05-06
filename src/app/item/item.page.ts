import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  
  dismiss(){
    this.modalCtrl.dismiss();
  }

}
