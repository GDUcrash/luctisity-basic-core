import ActionManager from "./actions/actionManager";
import { Id } from "./id/id";
import EventManager, { EventListenersChannel } from "./events/eventManager";

console.log("Luctisity Basic Core loaded", Id.new());

export default class LuctisityCore {

    events: EventListenersChannel = {
        in:  new EventManager(),
        out: new EventManager()
    }

    actions = new ActionManager(this.events);

    constructor () {

        // test core code

        /*this.events.in.connect(EVENT_START, () => {
            this.actions.queueAction({
                type: 'moveTestObject',
                target: 'testObject',
                executeMode: ActionExecuteMode.INSTANT,
                position: { x: 0, y: 0 }
            });
            this.actions.queueAction({
                type: 'wait',
                target: 'testObject',
                executeMode: ActionExecuteMode.TASK,
                duration: 5
            });
            this.actions.queueAction({
                type: 'moveTestObject',
                target: 'testObject',
                executeMode: ActionExecuteMode.INSTANT,
                position: { x: 100, y: 420 }
            });
            this.actions.executeActions();
        });
        
        this.events.in.connect(EVENT_PROCESS, (_delta: number) => {
            /*this.actions.queueAction({
                type: 'moveTestObject',
                target: 'testObject',
                executeMode: ActionExecuteMode.INSTANT,
                position: { 
                    x: testObject.x + 42 * delta, 
                    y: testObject.y + 2 * delta 
                }
            });
            this.actions.executeActions();
        });
        
        this.events.out.connect(EVOUT_TEST_OBJECT_MOVED, (...args: any) => {
            console.log(EVOUT_TEST_OBJECT_MOVED, ...args);
        });
        
        this.events.out.connect(EVOUT_TASK_SCHEDULED, (task: Task) => {
            setTimeout(() => {
                this.events.in.emit(EVENT_TASK_FINISHED, task);
            }, task.data.duration * 1000);
        });
        
        this.events.in.emit(EVENT_START);
        
        document.onclick = () => {
            this.events.in.emit(EVENT_PROCESS, 1);
        };*/

    }
    
}