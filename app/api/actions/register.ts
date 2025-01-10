"use server";

import { RegistrationDetails } from "@/data/dto/registrationDetails";
import { isStringRecord } from "@/utils/typeguards/record";
import { UserRepositoryInstance } from "../_useServer/repositories";

export async function register(_prev: number | null, formData: FormData) {
    const FORM_DATA_RECORD = Object.fromEntries(formData.entries());
    if (isStringRecord(FORM_DATA_RECORD)) {
        const RESPONSE = await UserRepositoryInstance.registerUser(
            RegistrationDetails.buildFromObject(FORM_DATA_RECORD),
        );
        return RESPONSE.status;
    } else return 400;
}
