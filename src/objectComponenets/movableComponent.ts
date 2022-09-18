import Color from "../classes/Color";
import Vector from "../classes/Vector";
import CoreObject from "../objects/coreObject";
import CoreComponent from "./coreComponent";

export default class MovableComponent extends CoreComponent {

    name: string = 'movable';

    position: Vector = Vector.ZERO;
    rotation: number = 0;
    scale:    Vector = Vector.ONE;
    skew:     Vector = Vector.ZERO;

    visible: boolean = true;
    color:   Color   = Color.WHITE;
    opacity: number  = 100;

    constructor (parent?: CoreObject) {
        super(parent);
    }

    setPosition (pos: Vector) {
        this.position = pos;
    }

    setRotation (rot: number) {
        this.rotation = rot % 360;
    }

    setScale (scale: Vector) {
        this.scale = scale;
    }

    setSkew (skew: Vector) {
        this.skew = skew;
    }

    hide () { this.visible = false }
    show () { this.visible = true  }

    setColor (color: Color) {
        this.color = color;
    }

    setOpacity (opacity: number) {
        this.opacity = Math.min(Math.max(opacity, 0), 100);
    }

    getType () {
        return MovableComponent;
    }

}