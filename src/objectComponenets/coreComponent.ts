import CoreObject from "../objects/coreObject";

export default class CoreComponent {

    name: string = 'component';
    parent?: CoreObject;

    constructor (parent?: CoreObject) {
        this.parent = parent;
    }

    getType () {
        return CoreComponent;
    }

}