"use client";

import { PrimaryButton } from "@/components/buttons/Primary";
import { BaseInputComponent } from "@/components/inputs/Base";
import { UsernameRegex } from "@/constants/regex/validation";

export function RegistrationForm() {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
            }}
            className="flex flex-col gap-6 self-center"
        >
            <BaseInputComponent
                labelText="Username (Nickname)"
                assistiveText="e.g. Jane"
                placeholder="How should we call you?"
                pattern={UsernameRegex.source}
            />

            <BaseInputComponent
                labelText="Username (Nickname)"
                assistiveText=" Only Letters e.g. Jane Doe"
                placeholder="How should we call you?"
                pattern={UsernameRegex.source}
            />

            <BaseInputComponent
                labelText="Username (Nickname)"
                assistiveText="e.g. Jane"
                placeholder="How should we call you?"
                pattern={UsernameRegex.source}
            />

            <BaseInputComponent
                labelText="Username (Nickname)"
                assistiveText="e.g. Jane"
                placeholder="How should we call you?"
                pattern={UsernameRegex.source}
            />
            <PrimaryButton>Create Account</PrimaryButton>
        </form>
    );
}
