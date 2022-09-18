export default class Vector {

    x: number = 0;
    y: number = 0;

    constructor (x: number, y?: number) {
        this.x = x;
        this.y = y || x;
    }

    get lengthSquared () {
        let x = this.x;
        let y = this.y;
        return x*x + y*y; 
    }

    get length () { 
        return Math.sqrt(this.lengthSquared); 
    }

    get abs () { 
        return new Vector(
            Math.abs(this.x), 
            Math.abs(this.y)
        );
    }

    static get ZERO   () { return new Vector(0, 0)  }
    static get ONE    () { return new Vector(1, 1)  }
    static get UP     () { return new Vector(0, 1)  }
    static get DOWN   () { return new Vector(0, -1) }
    static get LEFT   () { return new Vector(-1, 0) }
    static get RIGHT  () { return new Vector(1, 0)  }
}