import List, { ListValue } from "../classes/List";
import Variable, { VariableValue } from "../classes/Variable";
import CoreObject from "../objects/coreObject";
import CoreComponent from "./coreComponent";

export type VarStoreDict = {
    [key: string]: Variable
}
export type ListStoreDict = {
    [key: string]: List
}

export default class DataStorableComponent extends CoreComponent {

    name: string = 'dataStorable';

    protected variables: VarStoreDict = {}
    protected lists:     ListStoreDict = {}

    constructor (parent?: CoreObject, variables?: VarStoreDict, lists?: ListStoreDict) {
        super(parent);
        this.variables = variables || this.variables;
        this.lists     = lists     || this.lists;
    }

    get data () { return {
        variables: this.variables,
        lists:     this.lists
    } }

    setVar (name: string, value: VariableValue) {
        this.variables[name].value = value;
    }

    getVar (name: string) {
        return this.variables[name].value;
    }

    saveVar (name: string) {
        return name;
        // TODO
    }

    loadVar (name: string) {
        return name;
        // TODO
    }


    setList (name: string, items: ListValue) {
        this.lists[name].items = items;
    }

    getList (name: string) {
        return this.lists[name].items;
    }

    saveList (name: string) {
        return name;
        // TODO
    }

    loadList (name: string) {
        return name;
        // TODO
    }


    getType () {
        return DataStorableComponent;
    }

}