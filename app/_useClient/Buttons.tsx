"use client";

import { PrimaryButton } from "@/components/buttons/Primary";
import { useRouter } from "next/navigation";

export function GetStartedButton() {
    const router = useRouter();
    return (
        <PrimaryButton
            className="w-1/4 self-center"
            onClick={() => {
                router.push("/authenticate");
            }}
        >
            Get Startet
        </PrimaryButton>
    );
}
