import ProjectListWebsite from "../../components/ProjectListWebsite";
import { GetProjects } from "../../utils/get-project";

export function Component(): JSX.Element {
  const projects = GetProjects(["This"]);
  return (
    <>
      <section className="flex w-full flex-col gap-14 px-14 py-14 lg:py-14">
        <h3 className="text-3xl font-bold text-white">My Website Project</h3>
        <ProjectListWebsite projects={projects} />
      </section>
    </>
  );
}
