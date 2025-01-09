"use client";

import { BaseButtonProps } from "./type";

export function BaseButton({
    className = "",
    onClick = () => {},
    children,
}: BaseButtonProps) {
    return (
        <button
            className={`py-3 rounded-full text-lg font-semibold ring-offset-4 ring-offset-white focus-visible:ring-8 hover:ring-8 active:ring-0 active:ring-offset-0 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
