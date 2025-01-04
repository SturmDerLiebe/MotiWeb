"use client";

import { type PropsWithChildren } from "react";

export function PrimaryButton({
    className = "",
    children,
}: PropsWithChildren<{ className?: string }>) {
    return (
        <button
            className={`bg-grey-7 text-white py-3 rounded-full font-semibold ring-offset-4 focus-visible:ring-8  hover:ring-8 active:bg-blue-2 active:ring-0 disabled:bg-grey-6 ${className}`}
            onClick={() => {}}
        >
            {children}
        </button>
    );
}
