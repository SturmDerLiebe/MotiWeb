"use client";

import type { MouseEventHandler, PropsWithChildren } from "react";

export function BaseButton({
    className = "",
    onClick,
    children,
}: PropsWithChildren<{
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}>) {
    return (
        <button
            className={`py-3 rounded-full text-lg font-semibold ring-offset-4 ring-offset-grey-1 focus-visible:ring-8 hover:ring-8 active:ring-0 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
