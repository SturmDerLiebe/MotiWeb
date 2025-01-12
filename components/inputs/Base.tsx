import { useRef, useState } from "react";
import type { BaseInputComponentProps, BaseInputFieldProps } from "./types";
import Image from "next/image";
import EyeOpen from "@/public/icons/EyeOpenFitting.svg";
import EyeClosed from "@/public/icons/EyeHidden.svg";

/**
 * Renders a base Input with a Label and an Assistive Text depending on the {@link type}
 */
export function BaseInputComponent({
    name,
    labelText,
    assistiveText,
    placeholder,
    type,
    pattern,
    minLength,
    required,
    onChangeWithRef,
    onBlurWithRef,
}: BaseInputComponentProps): React.JSX.Element {
    return (
        <div className="col-span-full grid grid-cols-subgrid">
            <label
                htmlFor={labelText}
                className={`col-span-1 paragraph9 text-grey-5 items-center gap-2`}
            >
                {labelText}
            </label>

            <BaseInputField
                name={name}
                placeholder={placeholder}
                type={type}
                required={required}
                pattern={pattern}
                minLength={minLength}
                id={labelText}
                onChangeWithRef={onChangeWithRef}
                onBlurWithRef={onBlurWithRef}
            />

            <span
                data-show={assistiveText !== undefined ? "yes" : "no"}
                className="col-span-1 paragraph8 text-grey-6 [:has(:user-invalid)+&]:text-error-2 data-[show=yes]:before:content-['🛈'] [:user-invalid+&]:before:text-error-2 before:text-xl flex items-center gap-2"
            >
                {assistiveText}
            </span>
        </div>
    );
}

function BaseInputField(props: BaseInputFieldProps) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className="col-span-1 bg-white border rounded-lg shadow-sm flex items-center [&:has(:user-invalid)]:border-error-2 [&:has(:placeholder-shown)]:border-grey-4 [&:has(:focus)]:border-grey-5 ring-grey-5_50P [&:has(:focus-visible)]:ring-8">
            <BaseInputTag
                {...props}
                type={passwordVisible ? "text" : props.type}
            />

            {props.type !== "password" ? null : (
                <EyeButton
                    passwordVisible={passwordVisible}
                    onClick={() => {
                        setPasswordVisible((currentState) => {
                            return !currentState;
                        });
                    }}
                />
            )}
        </div>
    );
}

function BaseInputTag({
    name,
    placeholder,
    type = "text",
    pattern,
    minLength,
    required = true,
    id,
    onChangeWithRef,
    onBlurWithRef,
}: BaseInputFieldProps) {
    const InputRef = useRef<HTMLInputElement | null>(null);

    return (
        <input
            name={name}
            placeholder={placeholder}
            type={type}
            required={required}
            pattern={pattern}
            minLength={minLength}
            className={`flex-1 rounded-lg paragraph4 py-3 px-4 text-grey-7 placeholder:text-grey-4 focus:outline-none`}
            id={id}
            ref={InputRef}
            onBlur={(event) => {
                onBlurWithRef?.(event, InputRef);
            }}
            onChange={(event) => {
                onChangeWithRef?.(event, InputRef);
            }}
        />
    );
}

function EyeButton({
    passwordVisible,
    onClick,
}: {
    passwordVisible: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            className="aspect-square h-12 flex justify-center items-center"
            onClick={onClick}
            aria-label={passwordVisible ? "Hide password" : "Show password"}
        >
            <Image
                src={passwordVisible ? EyeOpen : EyeClosed}
                alt=""
                className="size-6"
            />
        </button>
    );
}
