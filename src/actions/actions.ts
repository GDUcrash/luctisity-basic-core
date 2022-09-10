import { moveTestObject, wait } from "./testObject/testObjectActions";

export enum ActionExecuteMode { INSTANT, TASK }

export type Action = {
    type: string,
    target: any,
    executeMode: ActionExecuteMode,
    [key: string]: any
}

const actionsMap: any = {

    moveTestObject: moveTestObject,
    wait: wait

}

export default actionsMap;