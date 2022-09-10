import eventManager from "../events/eventManager";
import { EVOUT_TASK_SCHEDULED, EVENT_TASK_FINISHED } from "../events/events";
import actionsMap, { Action, ActionExecuteMode } from "./actions";
import { Task } from "./task";

class ActionManager {

    currentActions: Action[] = [];
    currentTasks: Set<Task> = new Set();

    constructor () {
        eventManager.in.connect(EVENT_TASK_FINISHED, (task: Task) => {
            if (!this.currentTasks.has(task)) return;

            this.step(task.actionIndex+1);
            this.currentTasks.delete(task);
        });
    }

    queueAction (action: Action) {
        this.currentActions.push(action);
    }

    executeActions () {
        if (!this.currentActions.length) return;
        this.step();
    }

    step (i: number =0) {
        if (i >= this.currentActions.length) return this.finalStep();

        let targetAction = this.currentActions[i];
        let targetFunc = actionsMap[targetAction.type];

        targetFunc(targetAction);

        if (targetAction.executeMode == ActionExecuteMode.INSTANT) {
            this.step(i+1);
        } else if (targetAction.executeMode == ActionExecuteMode.TASK) {
            let targetTask = new Task(targetAction.type, i, targetAction);
            this.currentTasks.add(targetTask);

            eventManager.out.emit(EVOUT_TASK_SCHEDULED, targetTask);
        }
    }
    
    finalStep () {
        this.currentActions = [];
        console.log('All current action done!');
    }

}

export default {
    global: new ActionManager()
}