import { BaseInputComponent } from "./Base";
import type { PasswordInputComponentProps } from "./types";

/**
 * Renders a Password Input Component with a Label and Assistive Text.
 */
export function PasswordInputComponent(
    props: PasswordInputComponentProps,
): React.JSX.Element {
    return (
        <BaseInputComponent
            type="password"
            {...props}
            onBlurWithRef={({ target: { value: password } }) => {
                props.savePassword?.(password);
            }}
            onChangeWithRef={(
                { target: { value: repeatedPassword } },
                inputRef,
            ) => {
                props.validateInput?.(repeatedPassword, inputRef);
            }}
        />
    );
}
