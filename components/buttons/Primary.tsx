"use client";

import type { MouseEventHandler, PropsWithChildren } from "react";
import { BaseButton } from "./Base";

export function PrimaryButton({
    className = "",
    onClick,
    children,
}: PropsWithChildren<{
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}>) {
    return (
        <BaseButton
            className={`bg-grey-7 text-white ring-blue-2 active:bg-blue-2 disabled:bg-grey-6 ${className}`}
            onClick={onClick}
        >
            {children}
        </BaseButton>
    );
}
