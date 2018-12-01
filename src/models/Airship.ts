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
}

export class Airship extends AirshipAttributes {

    props?: AirshipAttributes
    airships?: [AirshipAttributes]
    timestamp?: any
    matematica?: Matematica

    constructor() {
        super()
        this._id = this.generateId()
        this.timestamp = new Date().getTime()
        this.matematica = new Matematica
    }

    private generateId() {
        return Math.floor(Math.random() * (999 - 1))
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

    private somethingToThis(something): Airship {
        let ship = new Airship
        ship._id = this.tratarValor(something._id)
        ship.angle = this.tratarValor(something.angle)
        ship.direction = this.tratarValor(something.direction)
        ship.height = this.tratarValor(something.height)
        ship.width = this.tratarValor(something.width)
        ship.x = this.tratarValor(something.x)
        ship.y = this.tratarValor(something.y)
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