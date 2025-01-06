import type { RefObject } from "react";

export type onBlurWithRef<HtmlElementType> = (
    event: React.FocusEvent<HtmlElementType, Element>,
    inputRef: RefObject<HtmlElementType | null>,
) => void;
