export default class BaseLayout {

    protected _CANVAS: any
    protected _CONTEXT: any

    constructor(canv?, ctx?){
        this._CONTEXT = ctx
        this._CANVAS = canv
    }
}