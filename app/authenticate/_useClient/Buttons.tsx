"use client";

import { PrimaryButton } from "@/components/buttons/Primary";
import { SecondaryButton } from "@/components/buttons/Secondary";
import { useRouter } from "next/navigation";

export function AuthenticationButtons() {
    const router = useRouter();

    return (
        <div className="w-1/2 h-80 self-center bg-MotiMateLogoWithName bg-no-repeat bg-center bg-contain flex flex-col justify-center mt-24">
            <div className="flex gap-4 p-6 rounded-xl bg-white bg-opacity-30">
                <SecondaryButton
                    className="flex-1"
                    onClick={() => {
                        router.push("/authenticate/register");
                    }}
                >
                    Register
                </SecondaryButton>
                <PrimaryButton className="flex-1" onClick={() => {}}>
                    Login
                </PrimaryButton>
            </div>
        </div>
    );
}
