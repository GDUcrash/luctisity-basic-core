import Effect from "../classes/Effect";
import eventManager from "../events/eventManager";
import { EVOUT_PLAY_SOUND, EVOUT_STOP_ALL_SOUNDS } from "../events/events";
import CoreObject from "../objects/coreObject";
import CoreComponent from "./coreComponent";

type SoundEffectName = 'pitch' | 'speed' | 'pan' | 'reverb';

export default class SoundPlayerComponent extends CoreComponent {

    name: string = 'soundPlayer';
   
    protected sounds: any[] = [];

    protected effects = {
        pitch:  new Effect(100, 1, 100_000),
        speed:  new Effect(100, 1, 100_000),
        pan:    new Effect(0, -100, 100),
        reverb: new Effect(0, 0, 100)
    }

    constructor (parent?: CoreObject, sounds?: any[]) {
        super(parent);
        this.sounds = sounds || this.sounds;
    }

    play (sound: number) {
        eventManager.out.emit(EVOUT_PLAY_SOUND, this.parent, this.sounds[sound], 0);
    }

    playAndWait (sound: number) {
        eventManager.out.emit(EVOUT_PLAY_SOUND, this.parent, this.sounds[sound], 1);
    }

    playAndLoop (sound: number) {
        eventManager.out.emit(EVOUT_PLAY_SOUND, this.parent, this.sounds[sound], 2);
    }

    stop (sound: number) {
        eventManager.out.emit(EVOUT_PLAY_SOUND, this.parent, this.sounds[sound], 3);
    }

    stopAllSounds () {
        eventManager.out.emit(EVOUT_STOP_ALL_SOUNDS, this.parent);
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