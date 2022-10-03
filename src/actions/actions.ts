import { wait, say, sayFor, think, thinkFor, ask } from "./functions/nodeActions";
import { play, playAndWait, playAndLoop, stop, stopAllSounds } from "./functions/soundPlayerActions";

export enum ActionExecuteMode { INSTANT, TASK }

export type Action = {
    type: string,
    target: any,
    executeMode: ActionExecuteMode,
    [key: string]: any
}

const actionsMap: any = {

    wait,

    say, sayFor,
    think, thinkFor, 
    ask,

    play, playAndWait,
    playAndLoop, stop,
    stopAllSounds

}

export default actionsMap;