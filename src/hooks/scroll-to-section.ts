import { MutableRefObject } from "react";

export function ScrollToSection(section: MutableRefObject<HTMLElement | null>) {
  section.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
