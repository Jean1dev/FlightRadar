import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Airship } from '../../models/Airship';
import { AirshipProvider } from '../../providers/airship/airship';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
  providers: [
    AirshipProvider
  ]
})
export class FormPage {

  public dataForm: Airship

  constructor(
    public navCtrl: NavController, 
    private service: AirshipProvider,
    public navParams: NavParams) {
    this.dataForm = new Airship
  }

  ionViewDidLoad() {
    
  }

  public put() {
    this.service.createOrUpdate(this.dataForm)
    this.navCtrl.pop()
  }

}
