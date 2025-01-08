export interface SessionRepository {
    readonly sessionId: string;

    saveSessionId(sessionId: string): Promise<void>;

    /** Retrieves and Checks if {@link sessionId} is not empty */
    hasSessionId(): Promise<boolean>;
}
