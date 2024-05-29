import { useState } from "react";
import { IoClose, IoList } from "react-icons/io5";
import { Content } from "../types";
import { ScrollToSection } from "../hooks/scroll-to-section";

interface TableOfContentProps {
  contents: Content[];
}

export default function TableOfContent({
  contents,
}: TableOfContentProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="fixed right-10">
      <div className="flex gap-4 ">
        {isOpen && (
          <ul className=" flex flex-col gap-1 rounded-lg bg-[#00000040] px-6 py-4 text-white transition ease-in-out hover:bg-[#000000F0]">
            {contents.map((value, index) => (
              <li
                className="cursor-pointer hover:underline"
                onClick={() => ScrollToSection(value.ref)}
              >
                {index + 1}. {value.headerText}
              </li>
            ))}
          </ul>
        )}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#00000040] p-2 text-base text-white opacity-50 transition ease-in-out hover:opacity-100 lg:h-16 lg:w-16 lg:p-4 lg:text-3xl"
        >
          {isOpen ? (
            <>
              <IoClose />
            </>
          ) : (
            <IoList />
          )}
        </div>
      </div>
    </div>
  );
}
