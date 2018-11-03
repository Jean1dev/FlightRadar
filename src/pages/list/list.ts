import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AirshipProvider } from '../../providers/airship/airship';
import { Airship } from '../../models/Airship';
import { Observable } from 'Rxjs';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [
    AirshipProvider
  ]
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Observable< Airship[] >

  constructor(
    public navCtrl: NavController,
    private service: AirshipProvider,
    public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = this.service.airships
    
  }

  public itemTapped(event, item) {

  }

  public itemRemove(item) {
    console.log(item)
    this.service.remove(item.$key)
  }
}

