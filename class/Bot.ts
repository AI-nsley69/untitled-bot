class Bot {
    private static _instance: Bot;
    
    private constructor() {
        // TODO, add shit here
    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }
}

export default Bot;