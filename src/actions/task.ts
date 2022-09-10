import { Id } from "../id/id";

export class Task {

    id = Id.new();
    type = "";
    actionIndex = 0;
    data: any = {};

    constructor (type: string, actionIndex: number, data?: any) {
        this.type = type;
        this.actionIndex = actionIndex;
        if (data) this.data = data;
    }

}