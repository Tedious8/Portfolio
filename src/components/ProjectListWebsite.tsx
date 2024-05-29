import Card from "./Card";
import { Project } from "../types";

export default function ProjectListWebsite({
  projects,
}: {
  projects: Project[];
}): JSX.Element {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          link={project.link}
          tags={project.tags}
          desc={project.desc}
        />
      ))}
    </div>
  );
}
