import { ErrorSeverity  } from './enums';

export class InvalidCommand extends Error {
    public static severity: ErrorSeverity = ErrorSeverity.HIGH;
    
    public constructor (message: string) {
        super(message);
    }
}