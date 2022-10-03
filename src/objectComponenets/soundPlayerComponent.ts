import Effect from "../classes/Effect";
import CoreObject from "../objects/coreObject";
import CoreComponent from "./coreComponent";

type SoundEffectName = 'pitch' | 'speed' | 'pan' | 'reverb';

export default class SoundPlayerComponent extends CoreComponent {

    name: string = 'soundPlayer';
   
    protected sounds: any[] = [];

    protected effects = {
        pitch:  new Effect(1, 0.1, 10),
        speed:  new Effect(1, 0.1, 10),
        pan:    new Effect(0, -1, 1),
        reverb: new Effect(0, 0, 10)
    }

    constructor (parent?: CoreObject, sounds?: any[]) {
        super(parent);
        this.sounds = sounds || this.sounds;
    }

    setEffect (effect: SoundEffectName, value: number) {
        this.effects[effect].value = value;
    }

    getEffect (effect: SoundEffectName) {
        return this.effects[effect].value;
    }

    getType () {
        return SoundPlayerComponent;
    }

}