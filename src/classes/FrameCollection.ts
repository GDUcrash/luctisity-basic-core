export default class FrameCollection {

    protected frames: any[] = [];
    currentFrame:     number = 0;

    constructor (frames: any[]) {
        this.frames = frames;
    }

    setFrame (frame: number) {
        this.currentFrame = frame % this.frames.length;
    }

    nextFrame () {
        this.currentFrame++;
        if (this.currentFrame >= this.frames.length) this.currentFrame = 0;
    }

    previousFrame () {
        this.currentFrame--;
        if (this.currentFrame < 0) this.frames.length;
    }

}