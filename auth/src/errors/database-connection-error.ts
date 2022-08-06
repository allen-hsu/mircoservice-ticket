import { CustomError } from "./custom-error"
export class DatabaseConntectionError extends CustomError {
    statusCode = 500;
    constructor() {
        super();
        Object.setPrototypeOf(this, DatabaseConntectionError.prototype);
    }

    serializeErrors() {
        return [
            { message: "error connecting to database" }
        ];
    }
}