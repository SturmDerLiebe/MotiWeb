import { SessionRepository } from "@/data/interface/sessionRepository";

export class UseServerSessionRepository implements SessionRepository {
    private sessionId = "";

    async readSessionId(): Promise<string> {
        const TEMP = this.sessionId;
        this.sessionId = "";
        return TEMP;
    }

    async saveSessionId(sessionId: string) {
        this.sessionId = sessionId;
    }

    async hasValidSessionId() {
        return this.sessionId.trim().length > 0;
    }
}
