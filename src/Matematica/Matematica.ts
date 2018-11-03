export default class Matematica {

    constructor() {}

    public calcular_raio(x:number, y:number): number {
        let raio = Math.pow(x, 2) + Math.pow(y, 2)
        return Math.sqrt(raio)
    }

    public calcular_X(raio: number, angulo: number): number {
        return raio * Math.cos(this.degrees_to_radians(angulo))
    }

    public calcular_Y(raio: number, angulo: number): number {
        return raio * Math.sin(this.degrees_to_radians(angulo))
    }

    public rotacionar(
        angulo: number,
        new_position_x: number,
        new_position_y: number,
        old_plane_position_x: number,
        old_plane_position_y: number
    ){
        if(old_plane_position_x != 0) new_position_x = new_position_x - old_plane_position_x

        if(old_plane_position_y != 0) new_position_y = new_position_y - old_plane_position_y
        
        let seno = Math.sin(this.degrees_to_radians(angulo))
        let x = (new_position_x * Math.cos(this.degrees_to_radians(angulo))) + (new_position_y * (- seno))
        let y = (new_position_x * Math.sin(this.degrees_to_radians(angulo))) + (new_position_y * Math.cos(this.degrees_to_radians(angulo)))

        return { x: x, y: y}
    }

    public calcular_angulo(x: number, y: number): number {
        if(x == 0  && y == 0) return 0

        if(x == 0 && y > 0) return 90

        if(x <  0 && y == 0) return 180

        if(x == 0 && y < 0) return 270

        if(x < 0 && y > 0) return this.diminuir_180_do_angulo(x, y)

        if(x < 0 && y < 0) return this.somar_180_do_angulo(x, y)

        if(x > 0 && y < 0) return this.somar_360_do_angulo(x, y)

        return Math.atan(y / x) * (180 / Math.PI)
    }

    private diminuir_180_do_angulo(x, y): number {
        let angulo = Math.atan(y / x) * (180 / Math.PI)
        if(angulo < 0) return 180 + angulo
        return 180 - angulo
    }

    private somar_180_do_angulo(x, y): number {
        let angulo = Math.atan(y / x) * (180 / Math.PI)
        if(angulo < 0) return 180 - angulo
        return 180 + angulo
    }

    private somar_360_do_angulo(x, y): number {
        let angulo = Math.atan(y / x) * (180 / Math.PI)
        if(angulo < 0) return 360 + angulo
        return 360 - angulo
    }

    private degrees_to_radians(degrees: number): number {
        return degrees * (Math.PI / 180)
    }
}