export class Event {
    readonly run: Function;

    public constructor(run: Function) {
        this.run = run;
    }
}