import FrameCollectionComponent from "../objectComponenets/frameCollectionComponent";
import CoreNode from "./coreNode";

export default class Backdrop extends CoreNode {

    constructor (name: string, id?: string) {
        super(name, id);

        this.components.add(new FrameCollectionComponent(this));
    }

    getType () {
        return Backdrop;
    }

}