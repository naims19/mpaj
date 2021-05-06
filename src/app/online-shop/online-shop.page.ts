import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemPage } from'../item/item.page';

@Component({
  selector: 'app-online-shop',
  templateUrl: './online-shop.page.html',
  styleUrls: ['./online-shop.page.scss'],
})
export class OnlineShopPage implements OnInit {

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
