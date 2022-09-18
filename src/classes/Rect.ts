import Vector from "./Vector";

export default class Rect {

    start: Vector = Vector.ZERO;
    end:   Vector = Vector.ZERO;

    constructor (t: number, l?: number, b?: number, r?: number) {
        this.start = new Vector(t, l);
        this.end   = new Vector(b || t, r);
    }

    get size () {
        return new Vector(this.end.x - this.start.x, this.end.y - this.start.y)
    }

    set size (size: Vector) {
        this.end.x = this.start.x + size.x;
        this.end.y = this.start.y + size.y;
    }
    
}