import { Project } from "../types";
import { androidProject, websiteProject } from "./url";

export const WebsiteProject: Record<string, Project> = {
  Development_of_an_Interactive_Learning_Platform: {
    title:
      "Development of an Interactive Learning Platform for Personalized Recommendation Mechanism Based on K-Nearest Neighbors algorithm and AI",
    link: websiteProject.Development_of_an_Interactive_Learning_Platform,
    tags: ["TypeScript", "React.js"],
    desc: "The goal of this project is to increase students' learning experience. To measure the usefulness and ease of use of the learning platform, we conducted an experiment in a class at one of the universities in Taiwan.",
  },
};

export const AndroidProject: Record<string, Project> = {
  Petopia: {
    title: "Petopia",
    link: androidProject.Petopia,
    tags: ["Java", "Android Studio"],
    desc: "",
  }
};
