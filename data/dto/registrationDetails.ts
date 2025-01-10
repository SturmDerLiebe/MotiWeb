/**
 * A Data Transfer Object containing details about a new user to be registered
 */
export class RegistrationDetails {
    static buildFromObject({
        username = "",
        email = "",
        password = "",
    }: Record<string, string>) {
        return new RegistrationDetails(username, email, password);
    }

    constructor(
        public username: string,
        public email: string,
        public password: string,
    ) {}
}
