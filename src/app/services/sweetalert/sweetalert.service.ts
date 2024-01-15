import { Injectable, OnInit } from '@angular/core';
import { Director } from './classes/director';
import { BasicAlert } from './classes/basic-alert';
@Injectable({
  providedIn: 'root'
})
export class SweetalertService{
  director!: Director;
  builder!: BasicAlert;

  constructor() {
    this.builder = new BasicAlert();
    this.director = new Director;
    this.director.setBuilder(this.builder);
  }

  successAlert(message: string): void{
    this.director.buildBasicHtmlAlert('Good job!', message, 'success');
    this.builder.getProduct().listParts();
  }

  errorAlert(message: string): void{
      this.director.buildBasicHtmlAlert('Oops...', message, 'error');
      this.builder.getProduct().listParts();
  }
}
