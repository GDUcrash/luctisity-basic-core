import { Id } from "../id/id";
import CoreComponent from "../objectComponenets/coreComponent";

export type ComponentMap = {
    component?:    CoreComponent,
    clonable?:     any,
    [key: string]: any
}

export default class CoreObject {

    id: string = Id.new();
    name: string;
    parent?: CoreObject;
    
    protected components: Set<CoreComponent> = new Set();

    constructor (name: string, id?: string) {
        this.name = name;
        if (id) this.id = id;
    }

    get as () { 
        const compMap: ComponentMap = {};

        this.components.forEach(c => {
            compMap[c.name] = c;
        });

        return compMap;
    }

    getType () {
        return CoreObject;
    }

    getComponents () {
        return this.components;
    }

}