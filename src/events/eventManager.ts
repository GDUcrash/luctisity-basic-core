type EventListenersList = {
    [key: string]: Set<Function>
}

export type EventListenersChannel = {
    in:  EventManager,
    out: EventManager
}

export default class EventManager {

    listeners: EventListenersList = {};

    connect (eventName: string, callback: Function) {
        if (!this.listeners[eventName]) 
            this.listeners[eventName] = new Set();

        const eventListeners = this.listeners[eventName];
        eventListeners.add(callback);

        return this.disconnect;
    }

    disconnect (eventName: string, callback: Function) {
        const eventListeners = this.listeners[eventName];

        eventListeners.delete(callback);
        if (!eventListeners.size) delete this.listeners[eventName];
    }

    emit (eventName: string, ...args: any) {
        if (!this.listeners[eventName]) return;

        const eventListeners = this.listeners[eventName];
        for (let callback of eventListeners) {
            callback(...args);
        }
    }

}

/*export default {
    in:  new EventManager(),
    out: new EventManager()
};*/