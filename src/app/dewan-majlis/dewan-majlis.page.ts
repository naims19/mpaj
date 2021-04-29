import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dewan-majlis',
  templateUrl: './dewan-majlis.page.html',
  styleUrls: ['./dewan-majlis.page.scss'],
})
export class DewanMajlisPage implements OnInit {

  date: string;
  type: 'string';

  divCard1 : boolean
  divCard2 : boolean
  divCard3 : boolean

  constructor() { }

  ngOnInit() {
    this.divCard1 = true;
    this.divCard2 = false;
    this.divCard3 = false;
  }

  selectdiv1(){
    this.divCard1 = true;
    this.divCard2 = false;
    this.divCard3 = false;
  }

  selectdiv2(){
    this.divCard1 = false;
    this.divCard2 = true;
    this.divCard3 = false;
  }

  selectdiv3(){
    this.divCard1 = false;
    this.divCard2 = false;
    this.divCard3 = true;
  }

  onChange($event) {
    console.log($event);
  }

}
