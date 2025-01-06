import { useRef } from "react";
import type { BaseInputComponentProps, BaseInputFieldProps } from "./types";

/**
 * Renders a base Input with a Label and an Assistive Text depending on the {@link type}
 */
export function BaseInputComponent({
    labelText,
    assistiveText,
    placeholder,
    type,
    pattern,
    minLength,
    required,
}: BaseInputComponentProps): React.JSX.Element {
    return (
        <label
            htmlFor={labelText}
            className={`paragraph9 text-grey-5 flex items-center gap-2`}
        >
            {labelText}

            <BaseInputField
                placeholder={placeholder}
                type={type}
                required={required}
                pattern={pattern}
                minLength={minLength}
                id={labelText}
            />

            {type === "email" ? null : (
                <p className="paragraph8 text-grey-6 [:user-invalid+&]:text-error-2 before:content-['🛈'] [:user-invalid+&]:before:text-error-2 before:text-xl flex items-center gap-2">
                    {assistiveText}
                </p>
            )}
        </label>
    );
}

function BaseInputField({
    placeholder,
    type = "text",
    pattern,
    minLength,
    required = true,
    id,
}: BaseInputFieldProps) {
    const InputRef = useRef<HTMLInputElement | null>(null);

    return (
        <input
            placeholder={placeholder}
            type={type}
            required={required}
            pattern={pattern}
            minLength={minLength}
            className={`flex-1 paragraph4 py-3 px-4 text-grey-7 border rounded-lg shadow-sm [&:user-invalid]:border-error-2 placeholder:text-grey-4 placeholder-shown:border-grey-4 focus:border-grey-5 focus:outline-none`}
            id={id}
            ref={InputRef}
            onBlur={() => {}}
        />
    );
}
