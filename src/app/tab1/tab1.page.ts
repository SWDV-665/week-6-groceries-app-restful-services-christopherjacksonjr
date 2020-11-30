import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceProvider } from './../groceries-service.service';
import { InputDialogServiceProvider } from './../input-dialog-service.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = 'Grocery List';

  constructor(private toastCtrl: ToastController, public alertController: AlertController, public dataService: GroceriesServiceProvider, public inputDialogService: InputDialogServiceProvider, public socialSharing: SocialSharing) {};

  /*Load items array from dataService*/
  loadItems() {
    return this.dataService.getItems();
  }

  /*Function to remove items from list*/ 
  async removeItem(item, index) {
    console.log('Removing ' + item.name + '.');
    /*Declaring toast then present to screen*/
    let toast = await this.toastCtrl.create({
      message: 'Removing ' + item.name + '.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();

    /*Removing item from array*/
    this.dataService.removeItem(index);
  }

  /*Function to share items from list*/ 
  async shareItem(item, index) {
    console.log('Sharing ' + item.name + '.');
    /*Declaring toast then present to screen*/
    let toast = await this.toastCtrl.create({
      message: 'Sharing ' + item.name + '.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();

    let message = "Grocery Item - Name: " + item.name + " - Quantity: " + item.quantity; 
    let subject = "Shared via Grocery App";
    // Check if sharing via email is supported
    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("Shared successfully!");
    }).catch(() => {
      // Sharing via email is not possible
      console.error("Error while sharing ", error);
    });
  }

  /*Function to add items to list*/
  addItem() {
    console.log('Adding new item.');
    this.inputDialogService.showPrompt();
  }

  /*Function to edit items in list*/ 
  async editItem(item, index) {
    console.log('Editing ' + item.name + '.');
    /*Declaring toast then present to screen*/
    let toast = await this.toastCtrl.create({
      message: 'Editing ' + item.name + '.',
      duration: 3000,
      position: 'top'
    });
  
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }
}
