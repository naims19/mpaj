import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { PaymentMethodPage } from '../payment-method/payment-method.page';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  async showModal() {  
    const modal = await this.modalCtrl.create({  
      component: PaymentMethodPage  
    });  
    return await modal.present();
  }

  ngOnInit() {
  }

}
