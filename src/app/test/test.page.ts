import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  divCard1: boolean
  divcard2 : boolean
  divCard3 : boolean
  constructor() { }

  ngOnInit() {

    this.divCard1 = true;
    this.divcard2 = false;
    this.divCard3 = false;

  }

  selectdiv1(){
    this.divCard1 = true;
    this.divcard2 = false;
    this.divCard3 = false;
  }
  selectdiv2(){
    this.divCard1 = false;
    this.divcard2 = true;
    this.divCard3 = false;
  }
  selectdiv3(){
    this.divCard1 = false;
    this.divcard2 = false;
    this.divCard3 = true;
  }

}
