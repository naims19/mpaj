import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-kompaun',
  templateUrl: './kompaun.page.html',
  styleUrls: ['./kompaun.page.scss'],
})
export class KompaunPage implements OnInit {

  constructor( private alertController: AlertController) { }

  CreatePrompt ()
  {
    this.alertController.create({
      header : 'Tambah Akaun',
      message: 'Message <strong>text</strong>!!!',
      inputs : [
        {
          name : 'text',
          type : 'text',
          placeholder: 'Placeholder 1'
        }
      ],
      buttons :[
        {
          text: 'Tambah',
          handler : (data) => {
            console.log('Confirm tambah: data');
          }
        },
         {
          text: 'Batal',
          handler : () =>  {
            console.log('Confirm batal')
          }
        }
      ]
    }).then((promptElement)=>{
      promptElement.present();
    })
  }

  ngOnInit() {
  }

}
