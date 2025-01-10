import type { ChangeEvent, FormEvent, RefObject } from "react";

export type OnBlurWithRef<HtmlElementType extends HTMLElement> = (
    event: React.FocusEvent<HtmlElementType, Element>,
    elementRef: RefObject<HtmlElementType | null>,
) => void;

export type OnSubmitWithRef<HtmlElementType extends HTMLElement> = (
    event: FormEvent<HtmlElementType>,
    elementRef: RefObject<HtmlElementType | null>,
) => void;

export type OnChangeWithRef<HtmlElementType extends HTMLElement> = (
    event: ChangeEvent<HtmlElementType>,
    elementRef: RefObject<HtmlElementType | null>,
) => void;
