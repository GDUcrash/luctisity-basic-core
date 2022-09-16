import Effect from "../classes/Effect";
import CoreObject from "../objects/coreObject";
import CoreComponent from "./coreComponent";

type GraphicEffectName = 'hueShift' | 'brightness' | 'contrast' | 'saturation' | 'pixelate' | 'blur';

export default class GraphicEffectsComponent extends CoreComponent {

    name: string = 'graphicEffects';

    protected effects = {
        hueShift:   new Effect(0, 0, 256, true),
        brightness: new Effect(0, -100, 100),
        contrast:   new Effect(0, -100, 100),
        saturation: new Effect(100, 0, 200),
        pixelate:   new Effect(0, 0, 999),
        blur:       new Effect(0, 0, 999)
    }

    constructor (parent?: CoreObject) {
        super(parent);
    }

    setEffect (effect: GraphicEffectName, value: number) {
        this.effects[effect].value = value;
    }

    getEffect (effect: GraphicEffectName) {
        return this.effects[effect].value;
    }

    getType () {
        return GraphicEffectsComponent;
    }

}