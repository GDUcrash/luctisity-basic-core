import CoreObject from "./coreObject";
import Node from "./node";

export default class Scene extends CoreObject {

    private children: Node[] = [];

    constructor (name: string, id?: string) {
        super(name, id);
    }

    getChildren () {
        return this.children;
    }

    addChild (node: Node) {
        if (this.children.includes(node)) return;
        this.children.push(node);
    }

    removeChild (node: Node | string) {
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