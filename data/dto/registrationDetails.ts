/**
 * A Data Transfer Object containing details about a new user to be registered
 */
export class RegistrationDetails {
    constructor(
        public username: string,
        public email: string,
        public password: string,
    ) {}
}
