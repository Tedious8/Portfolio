import { Project } from "../types";
import { baseUrl } from "./url";

export const WebsiteProject: Record<string, Project> = {
  This: {
    title: "This is the title",
    link: baseUrl + "/website_project/This",
    tags: ["TypeScript", "React.js"],
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit beatae accusantium tenetur, ab rem quam ullam quod iure voluptatem qui quas vitae optio, laborum saepe, facere asperiores deleniti molestiae tempora.",
  },
};
