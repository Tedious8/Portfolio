import { RefObject, useRef } from "react";

export function UseRefHTMLElement(): RefObject<HTMLElement> {
  return useRef<HTMLElement>(null);
}
