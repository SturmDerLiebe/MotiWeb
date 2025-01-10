export const CookieNames = {
    sessionId: `${process.env.NODE_ENV === "production" ? "__HOST-" : ""}SESSION_ID`,
};
