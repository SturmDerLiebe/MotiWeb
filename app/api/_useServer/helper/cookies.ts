import { CookieNames } from "@/constants/cookie/names";
import { HeadersNames } from "@/constants/header/names";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export function buildSessionIdCookieFromApiResponse(
    rootApiResponse: Response,
): ResponseCookie {
    return {
        name: CookieNames.sessionId,
        value: rootApiResponse.headers.get(HeadersNames.sessionId) ?? "",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7 * 2, // ===> Two Weeks
        sameSite: true,
    };
}
