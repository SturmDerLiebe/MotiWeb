import { VerificationCodeRegex } from "@/constants/regex/validation";

export function CodeInput({
    isVerified,
    submitForm,
}: {
    isVerified: boolean | null;
    submitForm: () => void;
}) {
    return (
        <div className="self-stretch flex gap-4">
            <label
                htmlFor="verificationInput"
                className="flex-1 paragraph6 text-grey-5 flex items-center"
            >
                Enter a 4 Digit Code
            </label>

            <div className="group relative ms-8">
                <div
                    aria-hidden
                    className="pointer-events-none absolute flex gap-1 inset-0"
                >
                    {Array.from({ length: 4 }, (_, index) => {
                        return (
                            <div
                                key={index}
                                data-valid={
                                    isVerified === null
                                        ? ""
                                        : isVerified
                                          ? "yes"
                                          : "no"
                                }
                                className="rounded-lg border-grey-6 border h-full aspect-square text-grey-5 group-has-[input:placeholder-shown]:border-grey-4 group-has-[input:user-invalid]:border-error-2 data-[valid=yes]:!border-success-2 data-[valid=no]:!border-error-2"
                            />
                        );
                    })}
                </div>
                <input
                    name="code"
                    placeholder="0000"
                    id="verificationInput"
                    type="text"
                    pattern={VerificationCodeRegex.source}
                    required
                    minLength={4}
                    maxLength={4}
                    className="font-mono font-medium text-6xl tracking-[.775em] ps-6 w-96 focus:outline-none placeholder:text-grey-4 focus-visible:ring-8 ring-grey-5_50P rounded-lg"
                    onChange={({ target: { value } }) => {
                        if (value.length === 4) {
                            submitForm();
                        }
                    }}
                />
            </div>

            <span className="flex-1 flex items-center paragraph8 text-error-2">
                {isVerified === null || isVerified
                    ? ""
                    : "🛈 Invalid code. Please try again."}
            </span>
        </div>
    );
}
