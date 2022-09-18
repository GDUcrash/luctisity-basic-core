import Rect from "../classes/Rect";
import Vector from "../classes/Vector";
import CoreNode from "./coreNode";

export default class Camera extends CoreNode {

    offset:   Vector = Vector.ZERO;
    zoom:     number = 1;
    rotation: number = 0;
    limits:   Rect = new Rect(Infinity);

    constructor (name: string, id?: string) {
        super(name, id);
    }

    setOffset (offset: Vector) {
        this.offset = offset;
    }

    setZoom (zoom: number) {
        this.zoom = zoom;
    }

    setRotation (rot: number) {
        this.rotation = rot;
    }

    setLimits (limits: Rect) {
        this.limits = limits;
    }

    getType () {
        return Camera;
    }

}