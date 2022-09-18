import CoreObject from "./coreObject";
import CoreNode from "./coreNode";

export default class Scene extends CoreObject {

    private children: CoreNode[] = [];

    constructor (name: string, id?: string) {
        super(name, id);
    }

    getChildren () {
        return this.children;
    }

    addChild (node: CoreNode) {
        if (this.children.includes(node)) return;
        this.children.push(node);
    }

    removeChild (node: CoreNode | string) {
        if (typeof node == 'string')
            node = this.children.find(f => f.id == node)!;

        this.children = this.children.filter(f => f != node);
    }

    getChild (id: string) {
        return this.children.find(f => f.id == id);
    }

    getType () {
        return Scene;
    }

}