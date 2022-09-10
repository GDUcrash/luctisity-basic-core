import eventManager from "./events/eventManager";
import { EVENT_PROCESS, EVENT_START, EVENT_TASK_FINISHED, EVOUT_TASK_SCHEDULED, EVOUT_TEST_OBJECT_MOVED } from "./events/events";
import actionManager from "./actions/actionManager";
import { ActionExecuteMode } from "./actions/actions";
import { testObject } from "./objects/testObject";
import { Id } from "./id/id";
import { Task } from "./actions/task";

console.log("Luctisity Basic Core loaded", Id.new());

eventManager.in.connect(EVENT_START, () => {
    actionManager.global.queueAction({
        type: 'moveTestObject',
        target: 'testObject',
        executeMode: ActionExecuteMode.INSTANT,
        position: { x: 0, y: 0 }
    });
    actionManager.global.queueAction({
        type: 'wait',
        target: 'testObject',
        executeMode: ActionExecuteMode.TASK,
        duration: 5
    });
    actionManager.global.queueAction({
        type: 'moveTestObject',
        target: 'testObject',
        executeMode: ActionExecuteMode.INSTANT,
        position: { x: 100, y: 420 }
    });
    actionManager.global.executeActions();
});

eventManager.in.connect(EVENT_PROCESS, (delta: number) => {
    actionManager.global.queueAction({
        type: 'moveTestObject',
        target: 'testObject',
        executeMode: ActionExecuteMode.INSTANT,
        position: { 
            x: testObject.x + 42 * delta, 
            y: testObject.y + 2 * delta 
        }
    });
    actionManager.global.executeActions();
});

eventManager.out.connect(EVOUT_TEST_OBJECT_MOVED, (...args: any) => {
    console.log(EVOUT_TEST_OBJECT_MOVED, ...args);
});

eventManager.out.connect(EVOUT_TASK_SCHEDULED, (task: Task) => {
    setTimeout(() => {
        eventManager.in.emit(EVENT_TASK_FINISHED, task);
    }, task.data.duration * 1000);
});

eventManager.in.emit(EVENT_START);

document.onclick = () => {
    eventManager.in.emit(EVENT_PROCESS, 1);
};

export default {

    sendEvent: (eventName: string, ...args:any) => {
        eventManager.in.emit(eventName, ...args);
    },

    on: (eventName: string, callback: Function) => {
        return eventManager.out.connect(eventName, callback);
    }

};