import { tags } from "../constants/tags";

interface TagProps {
  listOfTag: string[];
}

export default function Tag(props: TagProps): JSX.Element {
  const { listOfTag } = props;

  return (
    <div className="flex w-full flex-wrap gap-4">
      {listOfTag.sort().map((value: string, index) => (
        <h4
          key={index}
          className="w-fit rounded-lg px-4 py-2 text-xs text-white lg:text-base"
          style={{ backgroundColor: tags[value] }}
        >
          {value}
        </h4>
      ))}
    </div>
  );
}
