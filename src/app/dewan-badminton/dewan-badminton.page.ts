import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-dewan-badminton',
  templateUrl: './dewan-badminton.page.html',
  styleUrls: ['./dewan-badminton.page.scss'],
})
export class DewanBadmintonPage implements OnInit {

  divCard1 : boolean
  divCard2 : boolean
  divCard3 : boolean

  date: string;
  type: 'string';

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
