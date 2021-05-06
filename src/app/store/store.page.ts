import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemPage } from'../item/item.page';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  async showModal() {  
    const modal = await this.modalCtrl.create({  
      component: ItemPage  
    });  
    return await modal.present();  
  }  

  ngOnInit() {
  }

}
