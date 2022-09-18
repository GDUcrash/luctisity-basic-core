import FrameCollection from "../classes/FrameCollection";
import MovableComponent from "../objectComponenets/movableComponent";
import CoreNode from "./coreNode";

export default class AnimationSprite extends CoreNode {

    protected animations: FrameCollection[] = [];

    currentAnimation: number = 0;

    constructor (name: string, id?: string, animations?: FrameCollection[]) {
        super(name, id);

        this.animations = animations || this.animations;
        this.components.add(new MovableComponent(this));
    }

    get currentFrame () { return this.animations[this.currentAnimation].currentFrame }
    set currentFrame (frame: number) {
        this.animations[this.currentAnimation].setFrame(frame);
    }

    setAnimation (anim: number) {
        this.currentAnimation = anim;
    }

    setFrame (frame: number) {
        this.currentFrame = frame;
    }

    nextFrame () {
        this.currentFrame++;
    }

    previousFrame () {
        this.currentFrame--;
    }

    getType () {
        return AnimationSprite;
    }

}