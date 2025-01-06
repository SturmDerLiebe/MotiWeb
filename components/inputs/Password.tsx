import { BaseInputComponent } from "./Base";
import type { PasswordInputComponentProps } from "./types";

/**
 * Renders a Password Input Component with a Label and Assistive Text.
 */
export function PasswordInputComponent(
    props: PasswordInputComponentProps,
): React.JSX.Element {
    return <BaseInputComponent type="password" {...props} />;
}
