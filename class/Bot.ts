import { Command } from './Command';
import { Event } from './Event';

class Bot {
    private static _instance: Bot;
    private _commands: Map<string, Command> = new Map();
    private _events: Map<string, Event> = new Map();
    
    private constructor() {
        // TODO, add shit here
    }

    private loadCommands() {
        
    }

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }
}

export default Bot;