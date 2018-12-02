export default class Matematica {

    constructor() {}

    public escalonar(x: number, y: number, old_x: number, old_y: number) {
        let escalonar_x = x / 100
        let escalonar_y = y / 100
        let novo_x = old_x * escalonar_x
        let novo_y = old_y * escalonar_y
        let novo_raio = this.calcular_raio(novo_x, novo_y)
        return {
            x: novo_x,
            y: novo_y,
            raio: novo_raio
        }
    }

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

    public distanceBetweenPoints(x0, y0, x1, y1): any {
        if ((x0 !== 0 && !x0) || (y0 !== 0 && !y0) || (x1 !== 0 && !x1) || (y1 !== 0 && !y1)) {
            return false
        }
        if (typeof x0 !== 'number' || typeof y0 !== 'number' ||
            typeof x1 !== 'number' || typeof y1 !== 'number') {
            return false
        }

        var xbXa, ybYa;

        xbXa = Math.pow(x1 - x0, 2).toFixed(2);
        ybYa = Math.pow(y1 - y0, 2).toFixed(2);
        return Math.sqrt(parseFloat(xbXa) + parseFloat(ybYa)).toFixed(2);
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