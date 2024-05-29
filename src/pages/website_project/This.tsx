import TableOfContent from "../../components/TableOfContent";
import Article from "../../components/Article";
import { GetProject } from "../../utils/get-project";
import {
  HomePage,
  ModulePage,
  ContentPage,
  QuizPage,
} from "../../constants/images";
import { CreateContent } from "../../hooks/create-content";
import { Content } from "../../types";

export function Component(): JSX.Element {
  const contents: Content[] = [
    CreateContent({
      headerText: "Project overview",
      paragraphText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustotempore autem qui commodi, doloremque quod beatae iste dolores, utquos maxime libero error, accusamus enim. Adipisci hic aut laborumcorporis?",
      images: [HomePage, ModulePage, ContentPage, QuizPage],
    }),
    CreateContent({
      headerText: "Framework & Language",
      tags: ["TypeScript", "React.js"],
    }),
    CreateContent({
      headerText: "Results",
      paragraphText:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, numquam qui animi nisi mollitia esse architecto corrupti inventore cumque veritatis quae! Voluptatum similique quis necessitatibus dolores! Officia nisi dolore praesentium?",
    }),
  ];
  // const title =
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quaerat voluptatem provident nemo et aspernatur vitae quam velit, numquam maiores dicta aliquam magni cumque earum nam autem quibusdam placeat perferendis.";
  const project = GetProject("This");
  return (
    <>
      <TableOfContent contents={contents} />
      <Article title={project.title} contents={contents} />
    </>
  );
}
