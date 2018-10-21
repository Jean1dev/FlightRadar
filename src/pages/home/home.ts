import { AirshipProvider } from './../../providers/airship/airship';
import { Airship } from './../../models/Airship';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import Canvas from '../../models/Canvas';
import { Observable } from 'Rxjs/rx'
import { AngularFireList } from 'angularfire2/database';

//declare var canvas

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    AirshipProvider
  ]
})

export class HomePage {

  /**
  * 'plug into' DOM canvas element using @ViewChild
  */
  @ViewChild('canvas') canvasEl: ElementRef;

  public canvas: Canvas
  public data: Airship
  public airships: AngularFireList< Airship >

  constructor(
    public FireService: AirshipProvider,
    public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.canvas = new Canvas(this.canvasEl.nativeElement)
    this.data = new Airship
    this.canvas.configurar()
    this.airships = this.FireService.getAll()
    this.run()
  }

  public loop(): void{
    Observable.interval(1000 / this.canvas.getFPS()).subscribe(() => {
      this.run()
    })
  }

  public run() {
    this.canvas.clearCanvas()
    this.canvas.drawMap()
    this.canvas.configureRings()
    this.canvas.configureSweep()
    this.canvas.animateSweep()
  }

  start() {
    this.loop()
  }
}
