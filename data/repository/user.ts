import { RegistrationDetails } from "../dto/registrationDetails";
import { BaseRepository, BaseRepositoryConstructorArgs } from "./base";

export class UserRepository extends BaseRepository {
    constructor(baseArgs: BaseRepositoryConstructorArgs) {
        super(
            baseArgs.apiBaseUrl,
            baseArgs.publicApiKey,
            baseArgs.sessionRepository,
        );
    }

    /**
     * Sends a request to register the new user with {@link RegistrationDetails} and handles saving the sessionID from the Responses Cookie
     * @throws any `fetch()` related error
     * @throws any {@link sessionRepository} related Error
     */
    async registerUser(body: RegistrationDetails) {
        const RESPONSE = await fetch(
            await this.bulildRequest({
                route: BaseRepository.Routes.registration,
                method: "POST",
                queryParams: new URLSearchParams({ username: body.username }),
                body: JSON.stringify(body),
            }),
        );

        await this.handleSessionId(RESPONSE);

        return RESPONSE;
    }

    /**
     * @throws any `fetch()` related error
     * @throws any {@link sessionRepository} related Error
     */
    async verifyUser(verificationCode: string) {
        return await this.bulildRequest({
            route: BaseRepository.Routes.activation,
            method: "POST",
            queryParams: new URLSearchParams({ code: verificationCode }),
            body: JSON.stringify(verificationCode),
        });
    }

    /**
     * @throws any `fetch()` related error
     * @throws any {@link sessionRepository} related Error
     */
    async updatePersonalGoal(goalPerWeek: number) {
        return await this.bulildRequest({
            route: BaseRepository.Routes.personalGoal,
            method: "PUT",
            queryParams: new URLSearchParams({ goal: goalPerWeek.toString() }),
            body: JSON.stringify(goalPerWeek),
        });
    }

    /**
     *
     *
     * @throws any `fetch()` related error
     * @throws any {@link sessionRepository} related Error
     */
    async getUserInfo(abortSignal: AbortSignal) {
        return await this.bulildRequest({
            route: BaseRepository.Routes.userInfo,
            method: "GET",
            signal: abortSignal,
        });
    }
}
