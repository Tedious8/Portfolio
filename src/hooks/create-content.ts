import { Content, Image } from "../types";
import { UseRefHTMLElement } from "./useRef";

interface CreateContentProps {
  headerText: string;
  paragraphText?: string;
  afterText?: string;
  tags?: string[];
  images?: Image[];
}

export function CreateContent({
  headerText,
  paragraphText,
  afterText,
  tags,
  images,
}: CreateContentProps): Content {
  return {
    headerText,
    paragraphText,
    afterText,
    ref: UseRefHTMLElement(),
    tags,
    images,
  };
}
