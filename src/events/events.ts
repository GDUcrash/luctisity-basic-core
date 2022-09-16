/** No arguments */
export const EVENT_START = "start";
/** Arguments: delta(number) */
export const EVENT_PROCESS = "process";
/** Arguments: message(string), ...any */
export const EVENT_NODE_MESSAGE = "nodeMessage";
/** Arguments: id(number) */
export const EVENT_CLONE_CREATE = "cloneCreate";
/** Arguments: task(Task) */
export const EVENT_TASK_FINISHED = "taskFinished";

/** Arguments: task(Task) */
export const EVOUT_TASK_SCHEDULED = "taskScheduled";
/** Arguments: newX(number), newY(number) */
export const EVOUT_TEST_OBJECT_MOVED = "testObjectMoved";
/** Arguments: target(Node), content(string), duration(number), think(boolean), wait(boolean) */
export const EVOUT_NODE_SAY = "nodeSay";
/** Arguments: target(Node), content(string), inline(boolean) */
export const EVOUT_NODE_ASK = "nodeAsk";
/** Arguments: target(Node), sound(Sound), mode(0=normal|1=wait|2=loop|3=stop) */
export const EVOUT_PLAY_SOUND = "playSound";
/** Arguments: target(Node) */
export const EVOUT_STOP_ALL_SOUNDS = "stopAllSounds";