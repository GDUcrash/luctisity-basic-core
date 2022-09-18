export default class Color {

    #r: number = 0;
    #g: number = 0;
    #b: number = 0;
    #a: number = 0;

    constructor (r: number, g: number, b: number, a: number =255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    get r () { return this.#r }
    get g () { return this.#g }
    get b () { return this.#b }
    get a () { return this.#a }

    set r (v) { this.#r = Math.min(Math.max(v, 0), 255) }
    set g (v) { this.#g = Math.min(Math.max(v, 0), 255) }
    set b (v) { this.#b = Math.min(Math.max(v, 0), 255) }
    set a (v) { this.#a = Math.min(Math.max(v, 0), 255) }

    static get RED         () { return new Color(255, 0, 0)     }
    static get GREEN       () { return new Color(0, 255, 0)     }
    static get BLUE        () { return new Color(0, 0, 255)     }
    static get CYAN        () { return new Color(0, 255, 255)   }
    static get MAGENTA     () { return new Color(255, 0, 255)   }
    static get YELLOW      () { return new Color(255, 255, 0)   }
    static get WHITE       () { return new Color(255, 255, 255) }
    static get BLACK       () { return new Color(0, 0, 0)       }
    static get GRAY        () { return new Color(128, 128, 128) }
    static get TRANSPARENT () { return new Color(0, 0, 0, 0)    }

}