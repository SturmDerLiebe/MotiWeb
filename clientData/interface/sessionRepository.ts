export interface SessionRepository {
    saveSessionId(sessionId: string | undefined): Promise<void>;

    findSessionId(): Promise<string | null>;
}
