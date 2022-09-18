import FrameCollectionComponent from "../objectComponenets/frameCollectionComponent";
import MovableComponent from "../objectComponenets/movableComponent";
import CoreNode from "./coreNode";

export default class Sprite extends CoreNode {

    constructor (name: string, id?: string) {
        super(name, id);

        this.components.add(new FrameCollectionComponent(this));
        this.components.add(new MovableComponent(this));
    }

    getType () {
        return Sprite;
    }

}