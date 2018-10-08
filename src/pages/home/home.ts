import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import Grid from '../../models/Grid';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /**
  * 'plug into' DOM canvas element using @ViewChild
  */
  @ViewChild('canvas') canvasEl: ElementRef;
  /**
    * Reference Canvas object
    */
  private _CANVAS: any;
  /**
    * Reference the context for the Canvas element
    */
  private _CONTEXT: any;
  private grid: Grid

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this._CANVAS = this.canvasEl.nativeElement;
    this._CANVAS.width = 500;
    this._CANVAS.height = 500;

    this.initialiseCanvas();
    //this.drawCircle();
    this.grid = new Grid
    this.grid.configurar(this._CANVAS)
    this.drawMap()
  }


  initialiseCanvas() {
    if (this._CANVAS.getContext) {
      this.setupCanvas();
    }
  }

  setupCanvas() {
    this._CONTEXT = this._CANVAS.getContext('2d');
    this._CONTEXT.fillStyle = "#3e3e3e";
    this._CONTEXT.fillRect(0, 0, 500, 500);
  }

  clearCanvas() {
    this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
    this.setupCanvas();
  }

  drawCircle() {
    this.clearCanvas();
    this._CONTEXT.beginPath();

    // x, y, radius, startAngle, endAngle
    this._CONTEXT.arc(this._CANVAS.width / 2, this._CANVAS.height / 2, 80, 0, 2 * Math.PI);
    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
  }

  drawMap() {
    this._CONTEXT.beginPath()
    for (let i = 0; i <= this._CANVAS.width; i += this.grid.cell.width) {
      this._CONTEXT.moveTo(i, 0)
      this._CONTEXT.lineTo(i, this._CANVAS.height)
    }

    for (let i = 0; i <= this._CANVAS.height; i += this.grid.cell.height) {
      this._CONTEXT.moveTo(0, i)
      this._CONTEXT.lineTo(this._CANVAS.width, i)
    }

    this._CONTEXT.strokeStyle = 'white'
    this._CONTEXT.lineWidth = 1
    this._CONTEXT.stroke()
  }

  private configurar() {

  }
}
