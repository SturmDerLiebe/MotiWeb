"use client";

import { verifyAction } from "@/app/api/actions/verify";
import { useSearchParams } from "next/navigation";
import { useActionState, useEffect, useRef, useState } from "react";
import { CodeInput } from "./CodeInput";

export function VerificationForm() {
    const [secondsLeft, setSecondsLeft] = useState(60);

    const [isCounting, setIsCounting] = useState(() => {
        return secondsLeft < 60;
    });

    useEffect(() => {
        let intervalId: NodeJS.Timeout | undefined;
        if (isCounting) {
            intervalId = setInterval(() => {
                setSecondsLeft((currentState) => {
                    return currentState - 1;
                });
            }, 1000);
        } else {
            clearInterval(intervalId);
            setSecondsLeft(60);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [setSecondsLeft, isCounting]);

    const [state, formAction] = useActionState(verifyAction, null);

    const FORM_REF = useRef<null | HTMLFormElement>(null);

    return (
        <form
            action={formAction}
            className="w-1/2 self-center flex flex-col items-center gap-10 bg-white border-dotted border-4 border-grey-1 p-4"
            ref={FORM_REF}
        >
            <h2 className="heading5 self-center">Verify Account</h2>
            <p className="text-center paragraph5 text-grey-6">
                Code has been send to
                <b className="text-grey-7">{` ${useSearchParams().get("email")}.`}</b>
                <br />
                Enter the code to verify your account.{" "}
            </p>

            <CodeInput
                isVerified={state === null ? state : state.ok}
                submitForm={() => {
                    FORM_REF.current?.requestSubmit();
                }}
            />

            <p className="text-center">
                Didn’t Receive Code?{" "}
                <button
                    type="button"
                    disabled={isCounting}
                    className="underline"
                    onClick={() => {
                        setIsCounting(true);
                    }}
                >
                    Resend Code
                </button>
                <br />
                {isCounting ? `Resend code in ${secondsLeft} seconds` : ""}
            </p>
        </form>
    );
}
