export default class Effect {

    #value:      number;
    private min: number;
    private max: number;
    private loopBack: boolean;

    constructor (value: number, min: number, max: number, loopBack?: boolean) {
        this.#value = value;
        this.min = min;
        this.max = max;
        this.loopBack = !!loopBack;
    }

    get value () { return this.#value }
    set value (n) { 
        if (this.loopBack) this.#value = n % this.max;
        else               this.#value = Math.min(Math.max(n, this.min), this.max);
    }

}