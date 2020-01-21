import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

import { IonicModule, AlertController } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {

  constructor(
    private AlertController: AlertController
  ){}

  async showAlert(){
  const  initAlert = await this.AlertController.create({
    header:'titutlo',
    subHeader:'subtitulo',
    message:'ae porra',
    buttons:['ok', 'beleza']
  });

 initAlert.present();
  }
  
}
