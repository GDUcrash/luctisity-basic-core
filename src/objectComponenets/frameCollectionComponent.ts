import FrameCollection from "../classes/FrameCollection";
import CoreObject from "../objects/coreObject";
import CoreComponent from "./coreComponent";

export default class FrameCollectionComponent extends CoreComponent {

    name: string = 'frameCollection';

    protected frames: any[] = [];
    protected collection = new FrameCollection(this.frames);

    constructor (parent?: CoreObject, frames?: any[]) {
        super(parent);
        this.frames = frames || this.frames;
    }

    setFrame (frame: number) { this.collection.setFrame(frame) }
    nextFrame ()             { this.collection.nextFrame() }
    previousFrame ()         { this.collection.previousFrame() }

    get currentFrame () { return this.collection.currentFrame }

    getType () {
        return FrameCollectionComponent;
    }

}