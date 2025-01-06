import type { InputHTMLAttributes } from "react";

export type BaseInputFieldProps = Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "type" | "placeholder" | "pattern" | "required" | "id" | "minLength"
>;

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
};
