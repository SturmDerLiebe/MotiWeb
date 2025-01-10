"use server";

import { RegistrationDetails } from "@/data/dto/registrationDetails";
import { isStringRecord } from "@/utils/typeguards/record";
import { SimpleResponse } from "../_useServer/actionResponse/SimpleResponse";
import { forwardSessionIdToClient } from "../_useServer/helper/cookies";
import { UserRepositoryInstance } from "../_useServer/repositorySingletons";

export async function registerAction(
    _prev: SimpleResponse | null,
    formData: FormData,
): Promise<SimpleResponse> {
    const FORM_DATA_RECORD = Object.fromEntries(formData.entries());
    if (isStringRecord(FORM_DATA_RECORD)) {
        const RESPONSE = await UserRepositoryInstance.registerUser(
            RegistrationDetails.buildFromObject(FORM_DATA_RECORD),
        );

        forwardSessionIdToClient(RESPONSE);

        return { ok: RESPONSE.ok, statusCode: RESPONSE.status };
    } else return { ok: false, statusCode: 400 };
}
