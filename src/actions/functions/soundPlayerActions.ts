import { Action } from "../actions";

import { EventListenersChannel } from "../../events/eventManager";
import { EVOUT_PLAY_SOUND, EVOUT_STOP_ALL_SOUNDS } from "../../events/events";


export const play = (action: Action, events: EventListenersChannel) => {
    events.out.emit(EVOUT_PLAY_SOUND, action.target, action.sound, 0);
}

export const playAndWait = (action: Action, events: EventListenersChannel) => {
    events.out.emit(EVOUT_PLAY_SOUND, action.target, action.sound, 1);
}

export const playAndLoop = (action: Action, events: EventListenersChannel) => {
    events.out.emit(EVOUT_PLAY_SOUND, action.target, action.sound, 2);
}

export const stop = (action: Action, events: EventListenersChannel) => {
    events.out.emit(EVOUT_PLAY_SOUND, action.target, action.sound, 3);
}

export const stopAllSounds = (action: Action, events: EventListenersChannel) => {
    events.out.emit(EVOUT_STOP_ALL_SOUNDS, action.target);
}