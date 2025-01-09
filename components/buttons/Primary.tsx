"use client";

import { BaseButton } from "./Base";
import { BaseButtonProps } from "./type";

export function PrimaryButton({
    disabled,
    className = "",
    onClick,
    children,
}: BaseButtonProps) {
    return (
        <BaseButton
            disabled={disabled}
            className={`bg-grey-7 text-white ring-blue-2 active:bg-blue-2 disabled:bg-grey-6 ${className}`}
            onClick={onClick}
        >
            {children}
        </BaseButton>
    );
}
