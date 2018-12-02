import { Airship } from './Airship';
import BaseLayout from "./BaseLayout";
import Ferramentas from "../utils/Ferramentas";
import Rings from "./Rings";
import Grid from "./Grid";

export default class Canvas extends BaseLayout {

    private grid: Grid
    private rings: Rings
    private ferramentas: Ferramentas
    private sweepAngle: number
    private sweepSpeed: number
    private FPS: number

    constructor(canvas) {
        super(canvas)
        this.grid = new Grid
        this.rings = new Rings
        this.ferramentas = new Ferramentas
        this.valoresIniciais()
    }

    getFPS() {
        return this.FPS
    }

    valoresIniciais(): void {
        this.FPS = 120
        this.sweepAngle = 270
        this.sweepSpeed = 120
    }

    configurar() {
        this._CANVAS.width = this.grid.defaultWidth;
        this._CANVAS.height = this.grid.defaultHeight;

        if (this._CANVAS.getContext) this.setupCanvas()

        this.grid.configurar(this._CANVAS)
        this.rings.initializeValues(
            5,
            this.grid.cell.width * 10,
            this.grid.cell.width * 10 / 2,
            1
        )
    }

    setupCanvas() {
        this._CONTEXT = this._CANVAS.getContext('2d');
        this._CONTEXT.fillStyle = "#3e3e3e";
        this._CONTEXT.fillRect(0, 0, this.grid.defaultWidth, this.grid.defaultHeight);
    }

    clearCanvas() {
        this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
        this.setupCanvas();
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

    public configureRings() {
        for (let i = 0; i < this.rings.amount; i++) {
            this._CONTEXT.beginPath()
            this._CONTEXT.arc(this.grid.center.x, this.grid.center.y, ((this.rings.radius - (this.rings.lineWidth / 2)) / this.rings.amount) * (i + 1), 0, Math.PI * 2, false)
            this._CONTEXT.strokeStyle = 'green'
            this._CONTEXT.lineWidth = this.rings.lineWidth
            this._CONTEXT.stroke()
        }
    }


    public configureSweep() {
        //this.sweepAngle = 270
        this._CONTEXT.save()
        this._CONTEXT.translate(this.grid.center.x, this.grid.center.y)
        this._CONTEXT.rotate(this.ferramentas.d2R(this.sweepAngle))
        this._CONTEXT.beginPath()
        this._CONTEXT.moveTo(0, 0)
        this._CONTEXT.arc(0, 0, this.rings.radius, this.ferramentas.d2R(-1), this.ferramentas.d2R(1), false)
        this._CONTEXT.closePath()
        this._CONTEXT.fillStyle = this.configureGradient()
        this._CONTEXT.fill()
        this._CONTEXT.restore()
    }

    public configureGradient() {
        let ret = this._CONTEXT.createLinearGradient(this.rings.radius, 0, 0, 0),
            hueEnd = 170,
            hueStart = 120,
            hueDiff = Math.abs(170 - 120),
            saturation = 50,
            lightness = 40
        ret.addColorStop(0, 'hsla( ' + hueStart + ', ' + saturation + '%, ' + lightness + '%, 1 )')
        ret.addColorStop(1, 'hsla( ' + hueEnd + ', ' + saturation + '%, ' + lightness + '%, 0.1 )')

        return ret
    }


    public animateSweep() {
        this.sweepAngle += this.sweepSpeed / this.FPS
    }

    public putAirship(ship: Airship) {
        const img = new Image()
        img.src = 'assets/imgs/airship.png'
        const pixel = this.grid.converteToPx(ship.x, ship.y)
        const rad = (Math.abs(ship.direction - 360) * Math.PI / 180)
        const z =  Math.random() * (420 - (350) + 1) + (350)
        this._CONTEXT.save()
        this._CONTEXT.beginPath()
        this._CONTEXT.font = "12px Georgia"
        this._CONTEXT.fillStyle = 'red'
        this._CONTEXT.fillText(ship._id, pixel.x + ship.width / 2, pixel.y - ship.height / 2)
        //this._CONTEXT.translate(pixel.x, pixel.y - z / 10)
        //this._CONTEXT.translate(0, 0)s
        //    aviaozinho de texto      '✈'
        this._CONTEXT.rotate(rad)
       // this._CONTEXT.drawImage(img, ship.x , ship.y)
        this._CONTEXT.restore()
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
}