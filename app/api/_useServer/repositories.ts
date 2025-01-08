import { SessionRepository } from "@/data/interface/sessionRepository";
import { BaseRepository } from "@/data/repository/base";
import { UserRepository } from "@/data/repository/user";

class UseServerSessionRepository implements SessionRepository {
    sessionId = "";

    async saveSessionId(sessionId: string) {
        this.sessionId = sessionId;
    }

    async hasSessionId() {
        return this.sessionId.trim().length > 0;
    }
}

export const UserRepositoryInstance = new UserRepository({
    apiBaseUrl: BaseRepository.Api.mockaroo,
    publicApiKey: process.env.NEXT_PUBLIC_MOCKAROO_KEY ?? "",
    sessionRepository: new UseServerSessionRepository(),
});
