import Rings from "./Rings";
import BaseLayout from "./BaseLayout";

export default class Grid extends BaseLayout{

    defaultWidth = 500
    defaultHeight = 500
    
    cell ?: {
        width: any,
        height: any
    }
    center ?: {
        x: any,
        y: any
    }
    size ?: {
        x: any,
        y: any
    }

    rings: Rings

    configurar(CanvasObjc: any) {
        this.cell = {
            width: CanvasObjc.width / 10,
            height: CanvasObjc.width / 10
        }

        this.center = {
            x: CanvasObjc.width / 2,
            y: CanvasObjc.height / 2
        }

        this.size = {
            x: (CanvasObjc.width / 10) / 10 - 1,
            y: (CanvasObjc.height / 10) / 10 - 1
        }
    }

    configurarCinrcunferencia() {

    }
}