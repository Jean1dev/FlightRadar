export default class BaseLayout {

    private _CANVAS: any
    private _CONTEXT: any

    constructor(canv?, ctx?){
        this._CONTEXT = ctx
        this._CANVAS = canv
    }
}