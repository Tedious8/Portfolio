import { WebsiteProject } from "../constants/projects";
import { Project } from "../types";

export function GetProject(projectName: string): Project {
  return WebsiteProject[projectName];
}

export function GetProjects(projectNames: string[]): Project[] {
  return projectNames.reduce((acc: Project[], projectName) => {
    const project = WebsiteProject[projectName];
    if (project) acc.push(project);
    return acc;
  }, []);
}
