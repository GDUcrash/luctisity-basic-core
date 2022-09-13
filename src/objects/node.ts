import GraphicEffectsComponent from "../objectComponenets/graphicEffectsComponent";
import CoreObject from "./coreObject";
import Scene from "./scene";

export default class Node extends CoreObject {

    parent?: Scene = undefined;

    constructor (name: string, id?: string) {
        super(name, id);
        this.components.add(new GraphicEffectsComponent());
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