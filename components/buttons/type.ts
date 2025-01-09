import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type BaseButtonProps = PropsWithChildren<
    Pick<
        ButtonHTMLAttributes<HTMLButtonElement>,
        "onClick" | "disabled" | "className"
    >
>;
