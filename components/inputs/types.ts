import type { InputHTMLAttributes, RefObject } from "react";
import { OnBlurWithRef, OnChangeWithRef } from "../types/EventHandlerFunctions";

export type BaseInputFieldProps = Pick<
    InputHTMLAttributes<HTMLInputElement>,
    | "type"
    | "placeholder"
    | "pattern"
    | "required"
    | "id"
    | "minLength"
    | "name"
> & {
    onBlurWithRef?: OnBlurWithRef<HTMLInputElement>;
    onChangeWithRef?: OnChangeWithRef<HTMLInputElement>;
};

export type BaseInputComponentProps = Omit<BaseInputFieldProps, "id"> & {
    labelText: string;
    assistiveText?: string;
};

export type EmailInputComponentProps = Omit<
    BaseInputComponentProps,
    "type" | "pattern"
>;

export type PasswordInputComponentProps = Omit<
    BaseInputComponentProps,
    "type" | "pattern"
> & {
    minLength: number;
    assistiveText: string;
    savePassword?: (newChosenPassword: string) => void;
    validateInput?: (
        repeatedPassword: string,
        refObject: RefObject<HTMLInputElement | null>,
    ) => void;
};
