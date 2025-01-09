import { SessionRepository } from "../interface/sessionRepository";

type ApiBaseUrlType =
    (typeof BaseRepository.Api)[keyof typeof BaseRepository.Api];

export type BaseRepositoryConstructorArgs = {
    apiBaseUrl: ApiBaseUrlType;
    publicApiKey: string;
    sessionRepository?: SessionRepository;
};

export abstract class BaseRepository {
    static Api = { mockaroo: "https://my.api.mockaroo.com" };

    static Routes = {
        registration: "registration",
        activation: "activation",
        personalGoal: "personal-goal",
        group: "group",
        message: "group/message",
        userInfo: "user-info",
    };

    constructor(
        private apiBaseUrl: ApiBaseUrlType,
        private publicApiKey: string,
        public sessionRepository?: SessionRepository,
    ) {}

    async buildBaseHeaders() {
        const HEADERS = new Headers();
        HEADERS.append(
            "Cookie",
            (await this.sessionRepository?.findSessionId()) ?? "",
        );

        HEADERS.append("X-API-Key", this.publicApiKey);

        return HEADERS;
    }

    async bulildRequest({
        route,
        method,
        queryParams = new URLSearchParams(),
        extraHeaders = new Headers(),
        body,
        signal,
    }: {
        route: (typeof BaseRepository.Routes)[keyof typeof BaseRepository.Routes];
        method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
        queryParams?: URLSearchParams;
        extraHeaders?: Headers;
        body?: BodyInit | null;
        signal?: AbortSignal | null;
    }) {
        const headers = await this.buildBaseHeaders();
        extraHeaders.forEach((headerValue, headerName) => {
            headers.append(headerName, headerValue);
        });

        return new Request(`${this.apiBaseUrl}/${route}?${queryParams}`, {
            method,
            headers,
            body,
            signal: signal,
        });
    }

    /**
     * No-Op when {@link sessionRepository} is undefined
     */
    async handleSessionId(response: Response) {
        this.sessionRepository?.saveSessionId(
            response.type.toString() /*TODO: Read SessionId from X-Session-Id Header*/,
        );
    }
}
