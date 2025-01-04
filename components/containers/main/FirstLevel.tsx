import { PropsWithChildren } from "react";

export function FirstLevelMain({
    className = "",
    children,
}: PropsWithChildren<{ className?: string }>) {
    return (
        <main className={`flex flex-col mx-4 mt-4 gap-4 ${className}`}>
            {children}
        </main>
    );
}
