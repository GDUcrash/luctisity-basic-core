import CoreObject from "../objects/coreObject";
import CoreComponent from "./coreComponent";

type GraphicEffectName = 'hueShift' | 'brightness' | 'contrast' | 'saturation' | 'pixelate' | 'blur';

export default class GraphicEffectsComponent extends CoreComponent {

    name: string = 'graphicEffects';
    protected effects = {
        hueShift: 0,
        brightness: 0,
        contrast: 0,
        saturation: 100,
        pixelate: 0,
        blur: 0
    }

    constructor (parent?: CoreObject) {
        super(parent);
    }

    setEffect (effect: GraphicEffectName, value: number) {
        this.effects[effect] = value;
    }

    getEffect (effect: GraphicEffectName) {
        return this.effects[effect];
    }

    getType () {
        return GraphicEffectsComponent;
    }

}