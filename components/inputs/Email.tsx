import { BaseInputComponent } from "./Base";
import type { EmailInputComponentProps } from "./types";

/**
 * Renders a base Email Input with a Label.
 */
export function EmailInputComponent(
    props: EmailInputComponentProps,
): React.JSX.Element {
    return <BaseInputComponent type={"email"} {...props} />;
}
