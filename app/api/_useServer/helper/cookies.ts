"use server";

import { CookieNames } from "@/constants/cookie/names";
import { HeadersNames } from "@/constants/header/names";
import { cookies } from "next/headers";

/**
 * Forwards SessionId from the root API by Header to Client via Cookie
 */
export async function forwardSessionIdToClient(response: Response) {
    const SESSION_ID = response.headers.get(HeadersNames.sessionId) ?? "";
    (await cookies()).set(CookieNames.sessionId, SESSION_ID, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7 * 2, // ===> Two Weeks
        sameSite: true,
    });
}
