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
  public airships: Observable<Airship[]>
  public alist: AngularFireList<Airship>
  public view: string = 'radar'

  public nSelected: number
  public nX: number
  public nY: number
  public nAngulo: number
  public nDistanciaMin: number
  public nTempoMin: number

  constructor(
    public FireService: AirshipProvider,
    public navCtrl: NavController) { }

  ionViewDidLoad() {
    this.canvas = new Canvas(this.canvasEl.nativeElement)
    this.data = new Airship
    this.canvas.configurar()
    this.airships = this.FireService.airships
    //this.airships = this.FireService.mapListKeys<Airship>(this.alist)
    this.run()
  }

  public loop(): void {
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
    this.drawAirships()
  }

  public drawAirships() {
    /*this.airships.forEach(item => {
      item.map(oi => console.log(oi))
    })*/
  }

  public start() {
    this.loop()
  }

  public goToForm() {
    this.navCtrl.push('FormPage')
  }

  public limparCampos() {
    this.nAngulo = 0
    this.nDistanciaMin = 0
    this.nSelected = 0
    this.nTempoMin = 0
    this.nX = 0
    this.nY = 0
  }

  /* TRANSFORMACOES ************************************************************
    FICO XANFES EU SEI
  **/
  private atualizarTodos(metodo, parametros) {
    this.airships.forEach(arr => {
      arr.map(function (item) {
        let cmd = `this.data.${metodo}(${parametros})`
        let novoItem = eval(cmd)
        this.FireService.createOrUpdate(novoItem)
      }.bind(this))
    })
  }

  private atualizarSomenteUm(metodo, parametros) {
    this.airships.forEach(arr => {
      arr.map(function (item) {
        if (item._id == this.nSelected) {
          let cmd = `this.data.${metodo}(${parametros})`
          let novoItem = eval(cmd)
          this.FireService.createOrUpdate(novoItem)
        }
      }.bind(this))
    })
  }

  public mover(): void {
    if (this.nSelected == 0 || this.nSelected == undefined) {
      this.atualizarTodos('move', 'this.nX, this.nY, item')
    } else {
      this.atualizarSomenteUm('move', 'this.nX, this.nY, item')
    }
    this.limparCampos()
  }

  public escalonar(): void {
    if (this.nSelected == 0 || this.nSelected == undefined) {
      this.atualizarTodos('escalonar', 'this.nX, this.nY, item')
    } else {
      this.atualizarSomenteUm('escalonar', 'this.nX, this.nY, item')
    }
    this.limparCampos()
  }

  public rotacionar(): void {
    if (this.nSelected == 0 || this.nSelected == undefined) {
      this.atualizarTodos('rotacionar', 'this.nX, this.nY, this.nAngulo item')
    } else {
      this.atualizarSomenteUm('rotacionar', 'this.nX, this.nY, this.nAngulo item')
    }
    this.limparCampos()
  }
}

