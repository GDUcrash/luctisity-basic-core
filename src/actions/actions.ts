import { wait, say, sayFor, think, thinkFor, ask } from "./nodeActions";

export enum ActionExecuteMode { INSTANT, TASK }

export type Action = {
    type: string,
    target: any,
    executeMode: ActionExecuteMode,
    [key: string]: any
}

const actionsMap: any = {

    wait,

    say,   sayFor,
    think, thinkFor, 
    ask

}

export default actionsMap;