import { MutableRefObject } from "react";

export type Image = {
  src: string;
  alt: string;
};

export type Content = {
  headerText: string;
  paragraphText?: string;
  afterText?: string;
  ref: MutableRefObject<HTMLElement | null>;
  tags?: string[];
  images?: Image[];
};

export type Project = {
  title: string;
  link: string;
  tags: string[];
  desc: string;
};

export type ProjectList = {
  This: Project;
};
