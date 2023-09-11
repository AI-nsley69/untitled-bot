import { CommandArgs } from "../consts/enums";
import { InvalidCommand } from "../consts/errors";
import { PermissionFlags } from "discord.js";


/**
 * Class which represents a bot command
 * @class
 * @public
 */
export class Command {
    /** Description of what command does - useful for help commands
     * @type {string}
     * @public
     */
    public description: string = '';
    /** Usage of the command, the args used etc 
     * @type {string}
     * @public
     */
    public usage: string = '';
    /** The args which the commands expects
     * @type {Array<CommandArgs>}
     * @public
     */
    public args: Array<CommandArgs> = [];
    /** Permissions for the user to run this command 
     * @type {Array<PermissionFlags>}
     * @public
     */
    public permissions: Array<PermissionFlags> = [];
    /** Permissions for the bot to run this command 
     * @type {Array<PermissionFlags>}
     * @public
     */
    public botPermissions: Array<PermissionFlags> = [];
    /** Defines whether this is a guild only command 
     * @type {boolean}
     * @public
     */
    public guild: boolean = false;
    /** Cooldown per user for each command, in ms
     * @type {number}
     * @public
     */
    public cooldown: number = 0;
    /** Functions to run for the command
     * @type {Function}
     * @public
     */
    public run: Function = () => { throw new InvalidCommand('This command is invalid.') }

    public setDescription(description: string): Command {
        this.description = description;
        return this;
    }

    public setUsage(usage: string): Command {
        this.usage = usage;
        return this;
    }

    public setArgs(args: Array<CommandArgs>): Command {
        this.args = args;
        return this;
    }

    public setPermissions(permissions: Array<PermissionFlags>): Command {
        this.permissions = permissions;
        return this;
    }

    public setBotPermissions(permissions: Array<PermissionFlags>): Command {
        this.botPermissions = permissions;
        return this;
    }

    public setGuild(guild: boolean): Command {
        this.guild = guild;
        return this;
    }

    public setCooldown(cooldown: number): Command {
        this.cooldown = cooldown;
        return this;
    }

    public setRun(run: Function): Command {
        this.run = run;
        return this;
    }
}