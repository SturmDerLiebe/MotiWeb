"use server";

import { RegistrationDetails } from "@/data/dto/registrationDetails";
import { isStringRecord } from "@/utils/typeguards/record";
import { forwardSessionIdToClient } from "../_useServer/helper/cookies";
import { UserRepositoryInstance } from "../_useServer/repositorySingletons";

export async function register(_prev: number | null, formData: FormData) {
    const FORM_DATA_RECORD = Object.fromEntries(formData.entries());
    if (isStringRecord(FORM_DATA_RECORD)) {
        const RESPONSE = await UserRepositoryInstance.registerUser(
            RegistrationDetails.buildFromObject(FORM_DATA_RECORD),
        );

        forwardSessionIdToClient(RESPONSE);

        return RESPONSE.status;
    } else return 400;
}
