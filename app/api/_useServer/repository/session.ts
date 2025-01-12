import { SessionRepository } from "@/data/interface/sessionRepository";
import type { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

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

    async saveSessionIdFromCookie(sessionCookie: RequestCookie | undefined) {
        this.saveSessionId(sessionCookie?.value ?? "");
    }

    async hasValidSessionId() {
        return this.sessionId.trim().length > 0;
    }
}
