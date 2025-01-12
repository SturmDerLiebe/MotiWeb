"use server";

import { cookies } from "next/headers";
import type { SimpleResponse } from "../_useServer/actionResponse/SimpleResponse";
import {
    SessionRepositoryInstance,
    UserRepositoryInstance,
} from "../_useServer/repositorySingletons";
import { CookieNames } from "@/constants/cookie/names";

export async function verifyAction(
    _prev: SimpleResponse | null,
    formData: FormData,
): Promise<SimpleResponse> {
    SessionRepositoryInstance.saveSessionIdFromCookie(
        (await cookies()).get(CookieNames.sessionId),
    );

    const VERIFICATION_CODE = formData.get("code");
    if (typeof VERIFICATION_CODE === "string") {
        const RESPONSE =
            await UserRepositoryInstance.verifyUser(VERIFICATION_CODE);

        return { ok: RESPONSE.ok, statusCode: RESPONSE.status };
    } else return { ok: false, statusCode: 400 };
}
