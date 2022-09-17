import DataStorableComponent from "../objectComponenets/dataStorableComponent";
import GraphicEffectsComponent from "../objectComponenets/graphicEffectsComponent";
import ScriptableComponent from "../objectComponenets/scriptableComponent";
import SoundPlayerComponent from "../objectComponenets/soundPlayerComponent";
import CoreObject from "./coreObject";
import Scene from "./scene";

export default class Node extends CoreObject {

    parent?: Scene = undefined;

    constructor (name: string, id?: string) {
        super(name, id);
        
        this.components.add(new GraphicEffectsComponent(this));
        this.components.add(new SoundPlayerComponent(this));
        this.components.add(new ScriptableComponent(this));
        this.components.add(new DataStorableComponent(this));
    }

    remove () {
        this.parent?.removeChild(this);
    }

    duplicate () {
        let clone: Node = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        this.parent?.addChild(clone);
        return clone;
    }

    getType () {
        return Node;
    }

}