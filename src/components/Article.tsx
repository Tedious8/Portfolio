import { Content } from "../types";
import Slider from "./Slider";
import Tag from "./Tag";

interface ArticleProps {
  title: string;
  contents: Content[];
}

export default function Article({
  title,
  contents,
}: ArticleProps): JSX.Element {
  return (
    <article className="flex w-full flex-col gap-8 px-14 py-6 text-white">
      <h1 className="text-center text-2xl font-bold lg:text-4xl">{title}</h1>
      {contents.map((content) => (
        <section
          ref={content.ref}
          className="flex w-full flex-col items-center gap-6"
        >
          <h2 className="w-full text-start text-2xl font-semibold">
            {content.headerText}
          </h2>
          {content.tags && <Tag listOfTag={content.tags} />}
          {content.paragraphText && (
            <p className="w-full">{content.paragraphText}</p>
          )}
          {content.images && <Slider Images={content.images} />}
          {content.afterText && <p className="w-full">{content.afterText}</p>}
        </section>
      ))}
    </article>
  );
}
