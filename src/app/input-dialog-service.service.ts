import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceProvider } from './groceries-service.service';

@Injectable()
export class InputDialogServiceProvider {

  constructor(public alertController: AlertController, public dataService: GroceriesServiceProvider) { }

  /*Pop up dialouge to allow users to edit item information to be updated to list*/
  async showPrompt(item?, index?) {
    /*Presenting alert with form for user to edit data of item*/
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: item ? 'Edit Item' : 'Add Item',
      message: item ? 'Please edit item...' : 'Please enter item...',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          type: 'text',
          placeholder: 'Quantity',
          value: item ? item.quantity : null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Confirm save', item);
            /*Saving item to array with new information*/
            if(index !== undefined) {
              this.dataService.editItem(item, index);
            } else {
              /*Adding item to array*/
              this.dataService.addItem(item);
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
