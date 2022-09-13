import { Action } from "./actions";

import eventManager from "../events/eventManager";
import { EVOUT_NODE_ASK, EVOUT_NODE_SAY } from "../events/events";

export const say = (action: Action) => {
    eventManager.out.emit(EVOUT_NODE_SAY, action.target, action.content, action.duration, false, false);
}

export const sayFor = (action: Action) => {
    eventManager.out.emit(EVOUT_NODE_SAY, action.target, action.content, action.duration, false, true);
}

export const think = (action: Action) => {
    eventManager.out.emit(EVOUT_NODE_SAY, action.target, action.content, action.duration, true, false);
}

export const thinkFor = (action: Action) => {
    eventManager.out.emit(EVOUT_NODE_SAY, action.target, action.content, action.duration, true, true);
}

export const ask = (action: Action) => {
    eventManager.out.emit(EVOUT_NODE_ASK, action.target, action.content, action.inline);
}