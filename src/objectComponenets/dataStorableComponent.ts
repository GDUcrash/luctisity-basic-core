import List, { ListValue } from "../classes/List";
import Variable, { VariableValue } from "../classes/Variable";
import eventManager from "../events/eventManager";
import { EVOUT_TOGGLE_LIST, EVOUT_TOGGLE_VAR } from "../events/events";
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

    showVar (name: string) {
        eventManager.out.emit(EVOUT_TOGGLE_VAR, this.parent, name, true);
    }

    hideVar (name: string) {
        eventManager.out.emit(EVOUT_TOGGLE_VAR, this.parent, name, false);
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

    showList (name: string) {
        eventManager.out.emit(EVOUT_TOGGLE_LIST, this.parent, name, true);
    }

    hideList (name: string) {
        eventManager.out.emit(EVOUT_TOGGLE_LIST, this.parent, name, false);
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