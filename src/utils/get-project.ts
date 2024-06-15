import { AndroidProject, WebsiteProject } from "../constants/projects";
import { Project } from "../types";

export function GetProject(projectName: string, projectType: string): Project | undefined{
  return DetermineProject(projectName, projectType);
}

export function GetProjects(projectNames: string[], projectType: string): Project[] {
  return projectNames.reduce((acc: Project[], projectName) => {
    const project = DetermineProject(projectName, projectType);
    if (project) acc.push(project);
    return acc;
  }, []);
}

function DetermineProject(projectName: string, projectType: string): Project | undefined {
  let project = undefined;
  switch (projectType) {
    case "Website":
      project = WebsiteProject[projectName];
      break;
    case "Android":
      project = AndroidProject[projectName];
      break;
  }
  return project;
}
