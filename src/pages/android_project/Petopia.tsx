import TableOfContent from "../../components/TableOfContent";
import Article from "../../components/Article";
import { GetProject } from "../../utils/get-project";
import { CreateContent } from "../../hooks/create-content";
import { Content } from "../../types";

export function Component(): JSX.Element {
  const contents: Content[] = [
    CreateContent({
      headerText: "Project overview",
      paragraphText:
        "The goal of this project is to increase students' learning experience. To measure the usefulness and ease of use of the learning platform, we conducted an experiment in a class at one of the universities in Taiwan.",
    //   images: [HomePage, ModulePage, ContentPage, QuizPage],
    }),
    CreateContent({
      headerText: "Framework & Language",
      tags: ["Android Studio", "Java"],
    }),
    CreateContent({
      headerText: "Results",
      paragraphText:
        "We got positive feedback from the students after they finished using the learning platform. The survey proved that 70% of students agree that the learning platform is useful and easy to use.",
    }),
  ];

  const project = GetProject("Petopia", "Android");
  return (
    <>
      <TableOfContent contents={contents} />
      {project && (
        <Article title={project.title} contents={contents} />
      )}
    </>
  );
}
