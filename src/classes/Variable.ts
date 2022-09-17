import { Id } from "../id/id";

export type VariableValue = number | string | boolean | null;

export default class Variable {

    id = Id.new();
    name: string;
    value: VariableValue = null;
    visible: boolean;

    constructor (name: string, value: VariableValue = null, visible: boolean = false) {
        this.name = name;
        this.value = value;
        this.visible = visible;
    }

}