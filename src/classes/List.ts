import { Id } from "../id/id";
import { VariableValue } from "./Variable";

export type ListValue = VariableValue[];

export default class List {

    id = Id.new();
    name: string;
    items: ListValue = [];
    visible: boolean;

    constructor (name: string, items: ListValue = [], visible: boolean = false) {
        this.name = name;
        this.items = items;
        this.visible = visible;
    }

}