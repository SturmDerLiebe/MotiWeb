"use client";

import { PrimaryButton } from "@/components/buttons/Primary";
import { BaseInputComponent } from "@/components/inputs/Base";
import { EmailInputComponent } from "@/components/inputs/Email";
import { PasswordInputComponent } from "@/components/inputs/Password";
import { UsernameRegex } from "@/constants/regex/validation";
import { useState } from "react";

export function RegistrationForm() {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
            }}
            className="grid grid-cols-3 gap-6 self-center"
        >
            <BaseInputComponent
                labelText="Username (Nickname)"
                assistiveText="e.g. Jane"
                placeholder="How should we call you?"
                pattern={UsernameRegex.source}
            />

            <EmailInputComponent
                labelText="E-Mail"
                placeholder="Enter your E-Mail"
            />

            <PasswordFields />

            <PrimaryButton className="col-span-full">
                Create Account
            </PrimaryButton>
        </form>
    );
}

function PasswordFields() {
    const PLACEHOLDER = "••••••••";
    const MIN_LENGTH = 8;

    const [chosenPassword, setChosenPassword] = useState("");

    return (
        <>
            <PasswordInputComponent
                labelText="Password"
                assistiveText="Needs to be at least 8 characters long"
                placeholder={PLACEHOLDER}
                minLength={MIN_LENGTH}
                savePassword={(chosenPassword) => {
                    setChosenPassword(chosenPassword);
                }}
            />

            <PasswordInputComponent
                labelText="Confirm password"
                assistiveText="Test if you chose the Password you wanted"
                placeholder={PLACEHOLDER}
                minLength={MIN_LENGTH}
                onBlur={(
                    { target: { value: repeatedPassword } },
                    { current: input },
                ) => {
                    input?.setCustomValidity(
                        repeatedPassword === chosenPassword
                            ? ""
                            : "The Passwords do not match!",
                    );
                }}
            />
        </>
    );
}
