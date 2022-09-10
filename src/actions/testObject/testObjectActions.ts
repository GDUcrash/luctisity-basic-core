import { Action } from "../actions";
import { testObject } from "../../objects/testObject";

import eventManager from "../../events/eventManager";
import { EVOUT_TEST_OBJECT_MOVED } from "../../events/events";

export const moveTestObject = (action: Action) => {
    if (action.target != 'testObject') return;

    testObject.x = action.position.x;
    testObject.y = action.position.y;

    eventManager.out.emit(EVOUT_TEST_OBJECT_MOVED, testObject.x, testObject.y);
}

export const wait = (action: Action) => {
    console.log("waiting " + action.duration + "s...");
}