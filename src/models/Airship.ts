export interface AirshipAttributes {
    _id?: any
    width?: number
    height?: number
    x?: number
    y?: number
    direction?: number
    velocity?: any
}

export class Airship {

    props?: AirshipAttributes
    airships?: [AirshipAttributes]
    timestamp?: any

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