import Matematica from "../Matematica/Matematica";

export abstract class AirshipAttributes {
    _id?: any
    width?: number
    height?: number
    x?: number
    y?: number
    direction?: number
    velocity?: any
    raio?: number // esqueci como e raio em ingles
    angle?: number
    isCartesiano?: boolean
}

export class Airship extends AirshipAttributes {

    props?: AirshipAttributes
    airships?: [AirshipAttributes]
    timestamp?: any
    matematica?: Matematica

    constructor() {
        super()
        this._id = this.generateId()
        this.isCartesiano = true
        this.timestamp = new Date().getTime()
        this.matematica = new Matematica
    }

    private generateId() {
        return Math.floor(Math.random() * (999 - 1))
    }

    public antesGravar(): void {
        if(this.isCartesiano){
            this.raio = this.matematica.calcular_raio(this.x, this.y)
            this.angle = this.matematica.calcular_angulo(this.x, this.y)    
        }else{
            this.x = this.matematica.calcular_X(this.raio, this.angle)
            this.y = this.matematica.calcular_Y(this.raio, this.angle)
        }
    }

    public avioesProximos(x, y, old_x, old_y, minDistance): string{
        let distance = this.matematica.distanceBetweenPoints(parseFloat(x), parseFloat(y), parseFloat(old_x), parseFloat(old_y))
        
        if(typeof distance == 'boolean') return ``
        if(distance < 0 ) distance *= -1

        let minDinstance = parseFloat(minDistance)
        if(distance < minDinstance) return String(distance)
        return ``
    }

    public move(x, y, ship): Airship {
        let obj = this.somethingToThis(ship)
        obj.raio = this.matematica.calcular_raio(x, y)
        obj.angle = this.matematica.calcular_angulo(x, y)
        obj.x = x
        obj.y = y
        return obj
    }

    public escalonar(x, y, ship): Airship {
        let obj = this.somethingToThis(ship)
        let temp = this.matematica.escalonar(x, y, obj.x, obj.y)
        obj.x = temp.x
        obj.y = temp.y
        obj.raio = temp.raio
        return obj
    }

    public rotacionar(x, y, angulo, ship): Airship {
        let obj = this.somethingToThis(ship)
        let rotacao = this.matematica.rotacionar(
            obj.angle,
            x,
            y,
            obj.x,
            obj.y
        )
        obj.x = rotacao.x + obj.x
        obj.y = rotacao.y + obj.y
        obj.angle = this.matematica.calcular_angulo(obj.x, obj.y)
        obj.raio = this.matematica.calcular_raio(obj.x, obj.y)
        return obj
    }

    public createNewAirship(obj): Airship {
        return this.somethingToThis(obj)
    }

    private somethingToThis(something): Airship {
        let ship = new Airship
        ship._id = this.tratarValor(something._id)
        ship.angle = this.tratarValor(something.angle)
        ship.direction = this.tratarValor(something.direction)
        ship.height = this.tratarValor(something.height)
        ship.width = this.tratarValor(something.width)
        ship.x = this.tratarValor(something.x)
        ship.y = this.tratarValor(something.y)
        ship.isCartesiano = this.tratarValor(something.isCartesiano)
        ship.velocity = this.tratarValor(something.velocity)
        return ship
    }

    private tratarValor(txValor) {
        if(txValor == undefined) return 0
        return txValor
    }

    mockAirships() {
        this.airships.push({
            _id: 1,
            width: 32,
            height: 32,
            x: Math.random() * (3 - (-3) + 1) + (-3),
            y: Math.random() * (3 - (-3) + 1) + (-3),
            direction: Math.floor(Math.random() * 360),
            velocity: Math.random() * 150
        })

        this.airships.push({
            _id: 2,
            width: 32,
            height: 32,
            x: Math.random() * (3 - (-3) + 1) + (-3),
            y: Math.random() * (3 - (-3) + 1) + (-3),
            direction: Math.floor(Math.random() * 360),
            velocity: Math.random() * 150
        })
        this.airships.push({
            _id: 3,
            width: 32,
            height: 32,
            x: Math.random() * (3 - (-3) + 1) + (-3),
            y: Math.random() * (3 - (-3) + 1) + (-3),
            direction: Math.floor(Math.random() * 360),
            velocity: Math.random() * 150
        })
        this.airships.push({
            _id: 4,
            width: 32,
            height: 32,
            x: Math.random() * (3 - (-3) + 1) + (-3),
            y: Math.random() * (3 - (-3) + 1) + (-3),
            direction: Math.floor(Math.random() * 360),
            velocity: Math.random() * 150
        })

    }

}