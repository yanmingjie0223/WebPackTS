
export default class Main {

    constructor() {
        this.initStage();
    }

    private initStage() {
        Laya.init(600, 400);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
    }

}