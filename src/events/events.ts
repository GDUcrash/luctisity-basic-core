export const EVENT_START = "start";                // no arguments
export const EVENT_PROCESS = "process";            // arguments: delta(number)
export const EVENT_NODE_MESSAGE = "nodeMessage";   // arguments: message(string), ...any
export const EVENT_CLONE_CREATE = "cloneCreate";   // arguments: id(number)
export const EVENT_TASK_FINISHED = "taskFinished"; // arguments: task(Task)

export const EVOUT_TASK_SCHEDULED = "taskScheduled";      // arguments: task(Task)
export const EVOUT_TEST_OBJECT_MOVED = "testObjectMoved"; // arguments: newX(number), newY(number)