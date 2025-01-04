"use client";

import type { MouseEventHandler, PropsWithChildren } from "react";
import { BaseButton } from "./Base";

export function SecondaryButton({
    className = "",
    onClick,
    children,
}: PropsWithChildren<{
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}>) {
    return (
        <BaseButton
            className={`bg-white border-2 border-grey-7 text-grey-7 ring-grey-5
active:bg-grey-2 active:border-grey-5
disabled:bg-white disabled:text-grey-1 disabled:border-grey-1 ${className}`}
            onClick={onClick}
        >
            {children}
        </BaseButton>
    );
}
