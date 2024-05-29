import { Link } from "react-router-dom";
import Tag from "./Tag";
import { ScrollToTop } from "../utils/scroll-to-top";

interface CardProps {
  title: string;
  desc: string;
  tags: string[];
  link: string;
}

export default function Card({
  title,
  desc,
  tags,
  link,
}: CardProps): JSX.Element {
  return (
    <Link
      to={link}
      onClick={ScrollToTop}
      className="flex w-full cursor-pointer flex-col items-center rounded-2xl bg-[#00000040] px-8 py-6 lg:flex-row"
    >
      <div className="flex w-full flex-col gap-6 text-white">
        <h3 className="text-xl font-semibold lg:text-3xl">{title}</h3>
        <Tag listOfTag={tags} />
        <p>{desc}</p>
      </div>
    </Link>
  );
}
