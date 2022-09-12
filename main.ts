import eventManager from "./src/events/eventManager";
import { EVENT_PROCESS, EVENT_START, EVENT_TASK_FINISHED, EVOUT_TASK_SCHEDULED, EVOUT_TEST_OBJECT_MOVED } from "./src/events/events";
import actionManager from "./src/actions/actionManager";
import { ActionExecuteMode } from "./src/actions/actions";
import { testObject } from "./src/objects/testObject";
import { Id } from "./src/id/id";
import { Task } from "./src/actions/task";
import { ScriptRunner } from "./modules/luctisity-evaluator/main";

console.log("Luctisity Basic Core loaded", Id.new());
console.log(new ScriptRunner(Id.new(), "moment"));

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