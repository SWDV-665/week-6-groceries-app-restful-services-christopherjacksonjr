import { Injectable } from '@angular/core';

@Injectable()
export class GroceriesServiceProvider {
  items = [];

  constructor() { }

  /*Get items array*/
  getItems() {
    return this.items;
  }

  /*Removing item from array*/
  removeItem(index) {
    this.items.splice(index, 1);
  }

  /*Adding item to array*/
  addItem(item) {
    this.items.push(item);
  }

  /*Saving item to array with new information*/
  editItem(item, index) {
    this.items[index] = item;
  }
}
