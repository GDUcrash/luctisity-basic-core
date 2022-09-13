import { moveTestObject, wait } from "./testObject/testObjectActions";
import { say, sayFor, think, thinkFor } from "./nodeActions";

export enum ActionExecuteMode { INSTANT, TASK }

export type Action = {
    type: string,
    target: any,
    executeMode: ActionExecuteMode,
    [key: string]: any
}

const actionsMap: any = {

    moveTestObject: moveTestObject,
    wait: wait,

    say,   sayFor,
    think, thinkFor

}

export default actionsMap;