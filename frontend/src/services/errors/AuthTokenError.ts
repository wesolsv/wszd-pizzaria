export class AuthTokenError extends Error {
    constructor(){
        super('Authentication token is missing or invalid');
    }
}